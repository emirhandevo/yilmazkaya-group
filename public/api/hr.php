<?php
// hr.php - İş başvurusu formu (multipart: metin + PDF CV eki)
// Brevo: mail-config.php içinde brevo_api_key tanımlıysa ekli mail gider (önerilen)
// Yoksa PHP mail() + MIME attachment dener

header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Method not allowed"]);
    exit;
}

if (!empty($_POST["website"])) {
    echo json_encode(["success" => true]);
    exit;
}

$name = trim($_POST["name"] ?? "");
$email = trim($_POST["email"] ?? "");
$phone = trim($_POST["phone"] ?? "");
$subject = trim($_POST["subject"] ?? "İş Başvurusu");
$message = trim($_POST["message"] ?? "");

if ($name === "" || $email === "" || $phone === "" || $message === "") {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Lütfen zorunlu alanları doldurunuz."]);
    exit;
}

$phoneDigits = preg_replace("/\D/", "", $phone);
if (strlen($phoneDigits) < 10) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Geçerli bir telefon numarası giriniz."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Geçerli bir e-posta adresi giriniz."]);
    exit;
}

if (
    !isset($_FILES["cv"]) ||
    $_FILES["cv"]["error"] !== UPLOAD_ERR_OK
) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Lütfen PDF formatında özgeçmiş yükleyiniz."]);
    exit;
}

$cv = $_FILES["cv"];
$maxBytes = 5 * 1024 * 1024;

if ($cv["size"] > $maxBytes) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "CV dosyası en fazla 5 MB olabilir."]);
    exit;
}

$finfo = finfo_open(FILEINFO_MIME_TYPE);
$mimeType = finfo_file($finfo, $cv["tmp_name"]);
finfo_close($finfo);

$extension = strtolower(pathinfo($cv["name"], PATHINFO_EXTENSION));

if ($mimeType !== "application/pdf" && $extension !== "pdf") {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Sadece PDF dosyası kabul edilir."]);
    exit;
}

$safeBase = preg_replace("/[^a-zA-Z0-9._-]/", "_", pathinfo($cv["name"], PATHINFO_FILENAME));
$attachmentName = ($safeBase !== "" ? $safeBase : "cv") . ".pdf";
$cvContent = file_get_contents($cv["tmp_name"]);

$configFile = __DIR__ . "/mail-config.php";
$config = file_exists($configFile) ? require $configFile : [];

$to = $config["to_email"] ?? "info@yilmazkayagroup.com.tr";
$mailSubject = "[Yılmazkaya Group] " . $subject;
$body = "Ad Soyad: {$name}\n";
$body .= "E-posta: {$email}\n";
$body .= "Telefon: {$phone}\n";
$body .= "Konu: {$subject}\n";
$body .= "Yetkinlikler / Özet:\n{$message}\n";
$body .= "CV Dosyası: {$attachmentName}\n";

$sent = false;

if (!empty($config["brevo_api_key"])) {
    $payload = [
        "sender" => [
            "name" => $config["sender_name"] ?? "Yılmazkaya Group",
            "email" => $config["sender_email"] ?? "noreply@yilmazkayagroup.com.tr",
        ],
        "to" => [["email" => $to]],
        "replyTo" => ["email" => $email, "name" => $name],
        "subject" => $mailSubject,
        "textContent" => $body,
        "attachment" => [[
            "name" => $attachmentName,
            "content" => base64_encode($cvContent),
        ]],
    ];

    $ch = curl_init("https://api.brevo.com/v3/smtp/email");
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER => [
            "accept: application/json",
            "api-key: " . $config["brevo_api_key"],
            "content-type: application/json",
        ],
        CURLOPT_POSTFIELDS => json_encode($payload),
    ]);
    curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    $sent = $httpCode >= 200 && $httpCode < 300;
}

if (!$sent) {
    $boundary = "mp_" . md5((string) time());
    $headers = "From: Yılmazkaya Group <noreply@yilmazkayagroup.com.tr>\r\n";
    $headers .= "Reply-To: {$name} <{$email}>\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";

    $mailBody = "--{$boundary}\r\n";
    $mailBody .= "Content-Type: text/plain; charset=UTF-8\r\n\r\n";
    $mailBody .= $body . "\r\n";
    $mailBody .= "--{$boundary}\r\n";
    $mailBody .= "Content-Type: application/pdf; name=\"{$attachmentName}\"\r\n";
    $mailBody .= "Content-Transfer-Encoding: base64\r\n";
    $mailBody .= "Content-Disposition: attachment; filename=\"{$attachmentName}\"\r\n\r\n";
    $mailBody .= chunk_split(base64_encode($cvContent)) . "\r\n";
    $mailBody .= "--{$boundary}--";

    $sent = mail($to, $mailSubject, $mailBody, $headers);
}

if ($sent) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "error" => "Mail gönderilemedi. Canlıda Brevo ayarını kontrol ediniz.",
    ]);
}
