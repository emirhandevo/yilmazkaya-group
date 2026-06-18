<?php
// contact.php - İletişim formu POST handler (statik next.js sitesi için)
// Brevo: mail-config.php içinde brevo_api_key tanımlıysa önerilir

header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . "/mail-helper.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Method not allowed"]);
    exit;
}

$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Geçersiz istek."]);
    exit;
}

if (!empty($data["website"])) {
    echo json_encode(["success" => true]);
    exit;
}

mail_require_privacy_consent($data["privacyAccepted"] ?? false);

$name = trim($data["name"] ?? "");
$email = trim($data["email"] ?? "");
$subject = trim($data["subject"] ?? "İletişim Formu");
$message = trim($data["message"] ?? "");

if ($name === "" || $email === "" || $message === "") {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Lütfen zorunlu alanları doldurunuz."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Geçerli bir e-posta adresi giriniz."]);
    exit;
}

$config = mail_load_config();
$to = $config["to_email"] ?? "info@yilmazkayagroup.com.tr";
$mailSubject = "[Yılmazkaya Group] " . $subject;
$body = "Ad Soyad: {$name}\n";
$body .= "E-posta: {$email}\n";
$body .= "Konu: {$subject}\n";
$body .= "Mesaj: {$message}\n";

$sent = mail_send($config, [
    "to" => $to,
    "subject" => $mailSubject,
    "body" => $body,
    "replyTo" => ["name" => $name, "email" => $email],
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
