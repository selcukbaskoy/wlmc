<?php
// WALMCO.COM - Natro Hosting PHP Redirect
// This file redirects to index.html for React Router compatibility

// Check if index.html exists
if (file_exists('index.html')) {
    // Serve the React app
    include 'index.html';
    exit;
} else {
    // Fallback error message
    http_response_code(503);
    echo '<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>WALMCO - Site Yükleniyor</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; margin-top: 100px; }
        .container { max-width: 600px; margin: 0 auto; }
        .logo { color: #b91c1c; font-size: 2em; margin-bottom: 20px; }
        .message { color: #666; }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">WALMCO</div>
        <h1>Site Yükleniyor...</h1>
        <p class="message">Lütfen birkaç dakika sonra tekrar deneyin.</p>
        <p class="message">Site dosyaları yapılandırılıyor.</p>
    </div>
</body>
</html>';
}
?>
