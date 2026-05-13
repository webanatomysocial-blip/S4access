<?php
// content.php - Dynamic Content Extractor for SEO bots and AI crawlers

include_once('routes_metadata.php');

function getStaticContent($path, $blogMetadata) {
    global $staticRoutes; // Use the global static routes from routes_metadata.php
    
    $path = "/" . trim($path, '/');
    if ($path === "/index.php") $path = "/";
    
    $content = "";

    // 1. Check Static Routes
    $targetFile = null;
    foreach ($staticRoutes as $route) {
        if ($route['url'] === $path) {
            $targetFile = $route['file'];
            break;
        }
    }

    if ($targetFile) {
        $content = extractJSXText($targetFile);
    } 
    // 2. Handle Individual Blogs
    elseif (strpos($path, '/blogs/') === 0) {
        $slug = basename($path);
        $blogFile = findBlogFile($slug, $blogMetadata);
        if ($blogFile) {
            $content = extractJSXText($blogFile);
        } else {
            $content = "<h1>Blog Post Not Found</h1><p>The requested blog post could not be found.</p>";
        }
    }
    else {
        $content = "<h1>s4access</h1><p>Leading SAP Access Management Specialists.</p>";
    }

    return "<div class='ssr-content'>" . $content . "</div>";
}

function findBlogFile($slug, $blogMetadata) {
    // Try to match slug to file in src/blogs/
    $targetId = "";
    foreach ($blogMetadata as $blog) {
        if ($blog['slug'] === $slug) {
            $targetId = $blog['id'];
            break;
        }
    }

    $potentialFiles = [
        "src/blogs/" . $slug . ".jsx",
        "src/blogs/" . $targetId . ".jsx",
    ];

    foreach ($potentialFiles as $file) {
        if (file_exists($file)) return $file;
    }

    // Fallback: search directory for case-insensitive match
    $files = glob("src/blogs/*.jsx");
    foreach ($files as $file) {
        $filename = basename($file, ".jsx");
        if (strtolower($filename) === strtolower($slug) || strtolower($filename) === strtolower($targetId)) {
            return $file;
        }
    }

    return null;
}

function extractJSXText($filePath) {
    if (!file_exists($filePath)) return "<h1>Content not found</h1><p>The system could not locate the source file for this page.</p>";
    
    $rawContent = file_get_contents($filePath);
    
    // Extract the main JSX block (everything inside the return statement)
    if (preg_match('/return\s*\(\s*(.*)\s*\);/s', $rawContent, $matches)) {
        $jsx = $matches[1];
    } else {
        // Fallback for files without parenthesized returns
        $jsx = $rawContent;
    }
    
    // 1. Remove Helmet block
    $jsx = preg_replace('/<Helmet>.*?<\/Helmet>/s', '', $jsx);
    
    // 2. Remove common layout components
    $jsx = preg_replace('/<(Header|Footer|FAQTemplate|Blogs|CustomerSuccessCards|HomeSlider|HomeSlidersMobile|ServiceTabs|ServiceSection).*?\/>/s', '', $jsx);
    $jsx = preg_replace('/<(Header|Footer|FAQTemplate|Blogs|CustomerSuccessCards|HomeSlider|HomeSlidersMobile|ServiceTabs|ServiceSection)>.*?<\/\1>/s', '', $jsx);

    // 3. Strip Link tags but keep content
    $jsx = preg_replace('/<Link[^>]*>/', '', $jsx);
    $jsx = str_replace('</Link>', '', $jsx);

    // 4. Strip all other JSX/HTML tags
    $jsx = preg_replace('/<[a-zA-Z0-9]+[^>]*>/s', ' ', $jsx);
    $jsx = preg_replace('/<\/[a-zA-Z0-9]+>/s', ' ', $jsx);
    
    // 5. Remove JavaScript expressions { ... }
    $jsx = preg_replace('/\{[^\}]+\}/s', ' ', $jsx);
    
    // 6. Clean up entities and whitespace
    $text = html_entity_decode(strip_tags($jsx));
    
    // 7. Format headings and paragraphs loosely
    $lines = explode("\n", $text);
    $cleanLines = [];
    foreach ($lines as $line) {
        $trimmed = trim($line);
        if ($trimmed !== "" && strlen($trimmed) > 3) {
            $cleanLines[] = $trimmed;
        }
    }
    
    // Build a simple HTML structure for the bot
    $htmlOutput = "";
    foreach ($cleanLines as $line) {
        if (strlen($line) < 100 && !preg_match('/[.,]/', $line)) {
            $htmlOutput .= "<h2>" . htmlspecialchars($line) . "</h2>";
        } else {
            $htmlOutput .= "<p>" . htmlspecialchars($line) . "</p>";
        }
    }

    return $htmlOutput ?: "<p>No content could be extracted.</p>";
}
