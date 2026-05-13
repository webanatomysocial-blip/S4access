<?php
// sitemap.php - Dynamic XML Sitemap Generator
header("Content-Type: application/xml; charset=UTF-8");

include_once('routes_metadata.php');

$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
$host = $_SERVER['HTTP_HOST'];
$baseUrl = $protocol . $host;

echo '<?xml version="1.0" encoding="UTF-8"?>' . PHP_EOL;
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . PHP_EOL;

// 1. Static Routes
foreach ($staticRoutes as $route) {
    echo '  <url>' . PHP_EOL;
    echo '    <loc>' . $baseUrl . $route['url'] . '</loc>' . PHP_EOL;
    echo '    <changefreq>' . $route['changefreq'] . '</changefreq>' . PHP_EOL;
    echo '    <priority>' . $route['priority'] . '</priority>' . PHP_EOL;
    echo '  </url>' . PHP_EOL;
}

// 2. Blog Routes
foreach ($blogMetadata as $blog) {
    echo '  <url>' . PHP_EOL;
    echo '    <loc>' . $baseUrl . '/blogs/' . $blog['slug'] . '</loc>' . PHP_EOL;
    echo '    <lastmod>' . ($blog['date'] ?? date('Y-m-d')) . '</lastmod>' . PHP_EOL;
    echo '    <changefreq>weekly</changefreq>' . PHP_EOL;
    echo '    <priority>0.9</priority>' . PHP_EOL;
    echo '  </url>' . PHP_EOL;
}

echo '</urlset>';
?>
