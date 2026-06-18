<?php
// Ortak mail gönderimi — Brevo API (öncelik) veya PHP mail() yedek

function mail_load_config(): array
{
    $configFile = __DIR__ . "/mail-config.php";
    return file_exists($configFile) ? require $configFile : [];
}

/**
 * @param array{name?:string,email?:string} $replyTo
 * @param array<int, array{name:string, content:string}> $attachments
 */
function mail_send(array $config, array $params): bool
{
    $to = $params["to"] ?? ($config["to_email"] ?? "info@yilmazkayagroup.com.tr");
    $subject = $params["subject"];
    $body = $params["body"];
    $replyTo = $params["replyTo"] ?? null;
    $attachments = $params["attachments"] ?? [];

    if (!empty($config["brevo_api_key"])) {
        $payload = [
            "sender" => [
                "name" => $config["sender_name"] ?? "Yılmazkaya Group",
                "email" => $config["sender_email"] ?? "noreply@yilmazkayagroup.com.tr",
            ],
            "to" => [["email" => $to]],
            "subject" => $subject,
            "textContent" => $body,
        ];

        if ($replyTo && !empty($replyTo["email"])) {
            $payload["replyTo"] = [
                "email" => $replyTo["email"],
                "name" => $replyTo["name"] ?? "",
            ];
        }

        if ($attachments !== []) {
            $payload["attachment"] = array_map(
                static fn(array $file) => [
                    "name" => $file["name"],
                    "content" => base64_encode($file["content"]),
                ],
                $attachments
            );
        }

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
        $httpCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);

        if ($httpCode >= 200 && $httpCode < 300) {
            return true;
        }
    }

    if ($attachments !== []) {
        return mail_send_with_attachments($to, $subject, $body, $replyTo, $attachments);
    }

    return mail_send_plain($to, $subject, $body, $replyTo);
}

/** @param array{name?:string,email?:string}|null $replyTo */
function mail_send_plain(
    string $to,
    string $subject,
    string $body,
    ?array $replyTo = null
): bool {
    $headers = "From: Yılmazkaya Group <noreply@yilmazkayagroup.com.tr>\r\n";

    if ($replyTo && !empty($replyTo["email"])) {
        $name = $replyTo["name"] ?? "";
        $headers .= "Reply-To: {$name} <{$replyTo["email"]}>\r\n";
    }

    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    return mail($to, $subject, $body, $headers);
}

/**
 * @param array{name?:string,email?:string}|null $replyTo
 * @param array<int, array{name:string, content:string}> $attachments
 */
function mail_send_with_attachments(
    string $to,
    string $subject,
    string $body,
    ?array $replyTo,
    array $attachments
): bool {
    $boundary = "mp_" . md5((string) time());
    $headers = "From: Yılmazkaya Group <noreply@yilmazkayagroup.com.tr>\r\n";

    if ($replyTo && !empty($replyTo["email"])) {
        $name = $replyTo["name"] ?? "";
        $headers .= "Reply-To: {$name} <{$replyTo["email"]}>\r\n";
    }

    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";

    $mailBody = "--{$boundary}\r\n";
    $mailBody .= "Content-Type: text/plain; charset=UTF-8\r\n\r\n";
    $mailBody .= $body . "\r\n";

    foreach ($attachments as $file) {
        $mailBody .= "--{$boundary}\r\n";
        $mailBody .= "Content-Type: application/octet-stream; name=\"{$file["name"]}\"\r\n";
        $mailBody .= "Content-Transfer-Encoding: base64\r\n";
        $mailBody .= "Content-Disposition: attachment; filename=\"{$file["name"]}\"\r\n\r\n";
        $mailBody .= chunk_split(base64_encode($file["content"])) . "\r\n";
    }

    $mailBody .= "--{$boundary}--";

    return mail($to, $subject, $mailBody, $headers);
}

function mail_require_privacy_consent($value): void
{
    $accepted = filter_var($value, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);

    if ($accepted !== true) {
        http_response_code(400);
        echo json_encode([
            "success" => false,
            "error" => "Gizlilik politikasını onaylamanız gerekmektedir.",
        ]);
        exit;
    }
}
