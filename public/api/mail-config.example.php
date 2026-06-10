<?php
// Canlı sunucuda bu dosyayı kopyalayıp mail-config.php olarak kaydedin.
// mail-config.php git'e eklenmemeli — API anahtarı gizli kalmalı.

return [
    // Brevo API key — CV ekli başvurular için önerilir (mail() ek dosyada sorun çıkarabilir)
    "brevo_api_key" => "xkeysib-BURAYA-API-KEY",

    // Başvuruların gideceği adres
    "to_email" => "info@yilmazkayagroup.com.tr",

    // Brevo gönderici (domain doğrulaması hosting panelinde yapılmalı)
    "sender_name" => "Yılmazkaya Group",
    "sender_email" => "noreply@yilmazkayagroup.com.tr",
];
