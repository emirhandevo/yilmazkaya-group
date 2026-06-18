<?php
// Canlı sunucuda bu dosyayı kopyalayıp mail-config.php olarak kaydedin.
// mail-config.php git'e eklenmemeli — API anahtarı gizli kalmalı.

return [
    // Brevo API key — iletişim ve İK formları için önerilir
    "brevo_api_key" => "xkeysib-BURAYA-API-KEY",

    // Formların gideceği adres
    "to_email" => "info@yilmazkayagroup.com.tr",

    // Brevo gönderici (domain doğrulaması hosting panelinde yapılmalı)
    "sender_name" => "Yılmazkaya Group",
    "sender_email" => "noreply@yilmazkayagroup.com.tr",
];

// Brevo panel: Transactional → Settings → log retention = 1 ay önerilir
