<?php
// hr.php - İş başvurusu formu (multipart: metin + PDF CV eki)
// Brevo: mail-config.php içinde brevo_api_key tanımlıysa önerilir

header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . "/mail-helper.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Method not allowed"]);
    exit;
}

if (!empty($_POST["website"])) {
    echo json_encode(["success" => true]);
    exit;
}

mail_require_privacy_consent($_POST["privacyAccepted"] ?? false);

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

$extension = strtolower(pathinfo($cv["name"], PATHINFO_EXTENSION));

if ($mimeType !== "application/pdf" && $extension !== "pdf") {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Sadece PDF dosyası kabul edilir."]);
    exit;
}

$safeBase = preg_replace("/[^a-zA-Z0-9._-]/", "_", pathinfo($cv["name"], PATHINFO_FILENAME));
$attachmentName = ($safeBase !== "" ? $safeBase : "cv") . ".pdf";
$cvContent = file_get_contents($cv["tmp_name"]);

$config = mail_load_config();
$to = $config["to_email"] ?? "info@yilmazkayagroup.com.tr";
$mailSubject = "[Yılmazkaya Group] " . $subject;
$body = "Ad Soyad: {$name}\n";
$body .= "E-posta: {$email}\n";
$body .= "Telefon: {$phone}\n";
$body .= "Konu: {$subject}\n";
$body .= "Yetkinlikler / Özet:\n{$message}\n";
$body .= "CV Dosyası: {$attachmentName}\n";

$sent = mail_send($config, [
    "to" => $to,
    "subject" => $mailSubject,
    "body" => $body,
    "replyTo" => ["name" => $name, "email" => $email],
    "attachments" => [
        ["name" => $attachmentName, "content" => $cvContent],
    ],
]);

if ($sent) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "error" => "Mail gönderilemedi. Canlıda Brevo ayarını kontrol ediniz.",
    ]);
}
