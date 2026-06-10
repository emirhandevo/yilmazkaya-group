<?php
// contact.php - İletişim formu POST handler (statik next.js sitesi için)
// Canlıda: shared hosting PHP ile çalışır | localhost:3000' de PHP yok

header("Content-Type: application/json; charset=UTF-8");

// Sadece POST 
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Method not allowed"]);
    exit;
}

// JSON body oku
$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Geçersiz istek."]);
    exit;
}

// Honeypot - bot doldurduysa sessizce başarılı say (spam önleme)
if (!empty($data["website"])) {
    echo json_encode(["success" => true]);
    exit;
}

$name = trim($data["name"] ?? "" );
$email = trim($data["email"] ?? "" );
$subject = trim($data["subject"] ?? "İletişim Formu" );
$message = trim($data["message"] ?? "" );

// Validasyon
if ($name === "" || $email === "" || $message === "" ) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Lütfen zorunlu alanları doldurunuz."]);
    exit;
}

// Mail gidecek adres
$to = "info@yilmazkayagroup.com.tr";

$mailSubject = "[Yılmazkaya Group] " . $subject;
$body = "Ad Soyad: {$name}\n";
$body .= "E-posta: {$email}\n";
$body .= "Konu: {$subject}\n";
$body .= "Mesaj: {$message}\n";

$headers = "From: Yılmazkaya Group <noreply@yilmazkayagroup.com.tr>\r\n";
$headers .= "Reply-To: {$name} <{$email}>\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $mailSubject, $body, $headers);

if ($sent) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => "Mail gönderilemedi. Lütfen tekrar deneyiniz."]);
}

?>