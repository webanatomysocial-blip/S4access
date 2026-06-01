<?php
/**
 * sitemap.php - Fully Dynamic XML Sitemap Generator
 * Automatically discovers all routes using the DiscoveryEngine.
 */
header("Content-Type: application/xml; charset=UTF-8");
include_once('DiscoveryEngine.php');

$engine = new DiscoveryEngine();
$routes = $engine->getRoutes();

$baseUrl = "https://s4access.com";

echo '<?xml version="1.0" encoding="UTF-8"?>' . PHP_EOL;
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . PHP_EOL;

foreach ($routes as $category => $categoryRoutes) {
    foreach ($categoryRoutes as $url => $data) {
        // Skip hidden or technical files if necessary
        if (strpos($url, 'linktree') !== false) continue;

        $priority = "0.8";
        if ($url === "/") $priority = "1.0";
        if ($category === "blogs") $priority = "0.9";

        echo '  <url>' . PHP_EOL;
        echo '    <loc>' . $baseUrl . $url . '</loc>' . PHP_EOL;
        echo '    <lastmod>' . $data['lastmod'] . '</lastmod>' . PHP_EOL;
        echo '    <changefreq>weekly</changefreq>' . PHP_EOL;
        echo '    <priority>' . $priority . '</priority>' . PHP_EOL;
        echo '  </url>' . PHP_EOL;
    }
}

echo '</urlset>';
?>
