<?php
header("Content-Type: text/html; charset=UTF-8");
$request_uri = $_SERVER['REQUEST_URI'];
$path = parse_url($request_uri, PHP_URL_PATH);

// Include centralized routes and metadata
include_once('routes_metadata.php');
// Determine protocol and host dynamically
$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
$host = $_SERVER['HTTP_HOST'];
$baseUrl = $protocol . $host;

// Bot Detection
function isBot() {
    $bots = array(
        'googlebot', 'bingbot', 'slurp', 'duckduckgo', 'baiduspider', 'yandexbot', 'facebookexternalhit', 'twitterbot', 'rogerbot', 'linkedinbot', 'embedly', 'quora link preview', 'showyoubot', 'outbrain', 'pinterest/0.', 'developers.google.com/+/web/snippet', 'slackbot', 'vkShare', 'W3C_Validator', 'redditbot', 'Applebot', 'WhatsApp', 'flipboard', 'tumblr', 'bitlybot', 'SkypeShell', 'msnbot', 'ZSTVAndroid', 'AhrefsBot', 'ClaudeBot', 'Claude'
    );
    $userAgent = strtolower($_SERVER['HTTP_USER_AGENT']);
    foreach ($bots as $bot) {
        if (strpos($userAgent, $bot) !== false) {
            return true;
        }
    }
    return false;
}

// Include static content generator
include_once('content.php');

// Default Meta Tags
$defaultTitle = "Leading SAP Access Management Specialists | s4access";
$defaultDesc = "Welcome to s4access, your go-to solution for SAP access management!";
$defaultImage = "https://s4access.com/images/black-logo-400.png";
$defaultUrl = $baseUrl . "/";

$title = $defaultTitle;
$description = $defaultDesc;
$image = $defaultImage;
$url = $defaultUrl;

// Check if we are on a blog page
if (strpos($path, '/blogs/') !== false) {
    $blogId = basename($path);
    foreach ($blogMetadata as $blog) {
        if ($blog['slug'] === $blogId) {
            $title = $blog['title'];
            $description = $blog['metaDescription'];
            $image = "https://s4access.com" . $blog['image'];
            $url = $baseUrl . "/blogs/" . $blog['slug'];
            break;
        }
    }
}

// Read index.html
$html = file_get_contents('index.html');

// Inject Static Content for Bots
if (isBot()) {
    $staticContent = getStaticContent($path, $blogMetadata);
    $html = str_replace('<div id="root"></div>', '<div id="root">' . $staticContent . '</div>', $html);
}

// Replace Meta Tags
$html = str_replace('content="Leading SAP Access Management Specialists | s4access"', 'content="' . htmlspecialchars($title) . '"', $html);
$html = str_replace('content="Welcome to s4access, your go-to solution for SAP access management!"', 'content="' . htmlspecialchars($description) . '"', $html);
$html = str_replace('content="https://s4access.com/images/black-logo-400.png"', 'content="' . htmlspecialchars($image) . '"', $html);
$html = str_replace('content="https://s4access.com/"', 'content="' . htmlspecialchars($url) . '"', $html);

// Remove conflicting OG tags if we are serving a custom blog image
if ($image !== $defaultImage) {
    $html = preg_replace('/<meta property="og:image:type" content="image\/png"\s*\/>/i', '', $html);
    $html = preg_replace('/<meta property="og:image:width" content="400"\s*\/>/i', '', $html);
    $html = preg_replace('/<meta property="og:image:height" content="400"\s*\/>/i', '', $html);
    $html = preg_replace('/<meta property="og:image:alt" content="s4access logo"\s*\/>/i', '', $html);

    // Inject og:image:secure_url before </head>
    $secureTag = '<meta property="og:image:secure_url" content="' . htmlspecialchars($image) . '" />';
    $html = str_replace('</head>', $secureTag . "\n</head>", $html);
}

echo $html;
?>