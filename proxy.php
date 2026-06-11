<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

$url = isset($_GET["url"]) ? $_GET["url"] : "";
if (!$url) {
    http_response_code(400);
    header("Content-Type: text/plain; charset=utf-8");
    echo "Missing url parameter";
    exit;
}

$ch = curl_init($url);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_TIMEOUT => 25,
    CURLOPT_HTTPHEADER => [
        "User-Agent: Mozilla/5.0 (compatible; DV-Shop/1.0)",
        "Accept: application/json,text/plain,*/*",
        "Accept-Encoding: identity",
    ],
]);

$body = curl_exec($ch);
$status = curl_getinfo($ch, CURLINFO_HTTP_CODE) ?: 502;
$contentType = curl_getinfo($ch, CURLINFO_CONTENT_TYPE) ?: "application/octet-stream";

if ($body === false) {
    $error = curl_error($ch);
    curl_close($ch);
    http_response_code(502);
    header("Content-Type: text/plain; charset=utf-8");
    echo $error ?: "Proxy request failed";
    exit;
}

curl_close($ch);
http_response_code($status);
header("Content-Type: " . $contentType);
echo $body;
