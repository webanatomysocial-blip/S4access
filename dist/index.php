<?php
$request_uri = $_SERVER['REQUEST_URI'];
$path = parse_url($request_uri, PHP_URL_PATH);

// Blog Metadata (Mirrored from src/blogs/metadata.js)
$blogMetadata = [
    [
        "id" => "Is-SAP-Certification-Still-Valid-for-Your-Career-in-2025",
        "title" => "Is the SAP Certification Still Valid for Your Career in 2025?",
        "slug" => "sap-certification-2025",
        "metaDescription" => "Discover if SAP certification is still worth it in 2025. Explore industry demand, SAP's evolution, career benefits, and why continuous learning is key.",
        "image" => "/blogs-images/blog1-img.jpg",
        "url" => "https://s4access.com/blogs/sap-certification-2025"
    ],
    [
        "id" => "Autumn-2025-Outlook",
        "title" => "Autumn 2025 Outlook: Navigating SAP Security and Access Management in a New Market Reality – Is There a Way Forward ?",
        "slug" => "Autumn-2025-Outlook",
        "metaDescription" => "Explore SAP security and access management in Autumn 2025's cost-conscious market. Learn key challenges, solutions, and a proactive approach to optimize SAP systems.",
        "image" => "/blogs-images/2.jpg",
        "url" => "https://s4access.com/blogs/Autumn-2025-Outlook"
    ],
    [
        "id" => "Turning-Frustration-into-Value",
        "title" => "Understanding SAP Access Management Audits: Turning Frustration into Value ",
        "slug" => "Turning-Frustration-into-Value",
        "metaDescription" => "When speaking with SAP customers, one sentiment comes up again and again: audits are frustrating. Many teams feel that audit processes are disconnected from the realities of day-to-day SAP operations.",
        "image" => "/blogs-images/1.jpg",
        "url" => "https://s4access.com/blogs/Turning-Frustration-into-Value"
    ],
    [
        "id" => "Best-Practices-and-Pitfalls",
        "title" => "Managing Public Views in Fiori S/4HANA: Best Practices and Pitfalls",
        "slug" => "Best-Practices-and-Pitfalls",
        "metaDescription" => "In SAP S/4HANA Fiori apps—whether standard or extended—public views play a key role in tailoring user experiences.",
        "image" => "/blogs-images/3.jpg",
        "url" => "https://s4access.com/blogs/Best-Practices-and-Pitfalls"
    ],
    [
        "id" => "Typical-Challenges-in-Approving-SAP-Access-Requests",
        "title" => "Typical Challenges in Approving SAP Access Requests",
        "slug" => "Typical-Challenges-in-Approving-SAP-Access-Requests",
        "metaDescription" => "Explore the common challenges organizations face when approving SAP access requests. Learn best practices to streamline the process and enhance security.",
        "image" => "/blogs-images/Blog-5.jpg",
        "url" => "https://s4access.com/blogs/Typical-Challenges-in-Approving-SAP-Access-Requests"
    ],
    [
        "id" => "RICEFW-Security-Guidelines",
        "title" => "RICEFW Security Guidelines: Building Security into Custom Developments – Part I",
        "slug" => "RICEFW-Security-Guidelines-Building-Security-into-Custom-Developments-Part-I",
        "metaDescription" => "When talking about SAP security, most conversations revolve around roles, authorizations, and segregation of duties. But there's another critical piece that often slips under the radar: RICEFW objects.",
        "image" => "/blogs-images/Blog-6.jpg",
        "url" => "https://s4access.com/blogs/RICEFW-Security-Guidelines-Building-Security-into-Custom-Developments-Part-I"
    ],
    [
        "id" => "RICEFW-Security-Guidelines-Part-2",
        "title" => "RICEFW Security Guidelines: Building Security into Custom Developments – Part II",
        "slug" => "RICEFW-Security-Guidelines-Building-Security-into-Custom-Developments-Part-II",
        "metaDescription" => "In Part II of our blog series, we'll dive deeper into other key RICEFW artifacts, namely Enhancements, Forms, and Workflows.",
        "image" => "/blogs-images/Blog-7.jpg",
        "url" => "https://s4access.com/blogs/RICEFW-Security-Guidelines-Building-Security-into-Custom-Developments-Part-II"
    ],
    [
        "id" => "How-Firefighter-IDs-Help-You-Stay-Compliant",
        "title" => "When Access Becomes a Risk: How Firefighter IDs Help You Stay Compliant",
        "slug" => "When-Access-Becomes-a-Risk-How-Firefighter-IDs-Help-You-Stay-Compliant",
        "metaDescription" => "How SAP Firefighter IDs provide controlled emergency access, prevent security risks, and keep systems audit-compliant with logging and timely review processes.",
        "image" => "/blogs-images/Blog8.jpg",
        "url" => "https://s4access.com/blogs/When-Access-Becomes-a-Risk-How-Firefighter-IDs-Help-You-Stay-Compliant"
    ],
    [
        "id" => "Building-Display-Roles-the-Smart-Way-in-SAP-S4HANA",
        "title" => "Building Display Roles the Smart Way in SAP S/4HANA",
        "slug" => "Building-Display-Roles-the-Smart-Way-in-SAP-S4HANA",
        "metaDescription" => "How to build display roles in SAP S/4HANA correctly to avoid common pitfalls and ensure compliance.",
        "image" => "/blogs-images/Blog10.jpg",
        "url" => "https://s4access.com/blogs/Building-Display-Roles-the-Smart-Way-in-SAP-S4HANA"
    ],
    [
        "id" => "why-feedback-from-it-auditors-matters",
        "title" => "Feedback Is a Gift – Even When It Comes from an External IT Auditor",
        "slug" => "why-feedback-from-it-auditors-matters",
        "metaDescription" => "Engaging external auditors is a strategic decision. Learn how to use auditor feedback to improve security and operations.",
        "image" => "/blogs-images/Blog-img011.jpg",
        "url" => "https://s4access.com/blogs/why-feedback-from-it-auditors-matters"
    ],
    [
        "id" => "A-Year-of-Strong-Growth-s4access-and-Its-Customers-Moving-Forward-Together",
        "title" => "A Year of Strong Growth: s4access and Its Customers Moving Forward Together",
        "slug" => "A-Year-of-Strong-Growth-s4access-and-Its-Customers-Moving-Forward-Together",
        "metaDescription" => "Explore how s4access and its customers achieved growth in 2025 through SAP Access Management, compliance, and innovation—while looking ahead to 2026.",
        "image" => "/blogs-images/9298.jpg",
        "url" => "https://s4access.com/blogs/A-Year-of-Strong-Growth-s4access-and-Its-Customers-Moving-Forward-Together"
    ],
    [
        "id" => "Your-Partner-for-Efficient-SAP-Access",
        "title" => "Your Partner for Efficient SAP Access",
        "slug" => "Your-Partner-for-Efficient-SAP-Access",
        "metaDescription" => "Learn how clear SAP access tickets improve service levels, reduce delays, and help support teams resolve issues faster.",
        "image" => "/blogs-images/1165.webp",
        "url" => "https://s4access.com/blogs/Your-Partner-for-Efficient-SAP-Access"
    ],
    [
        "id" => "Native-HANA-database-authorizations",
        "title" => "Native HANA Database Authorizations",
        "slug" => "Native-HANA-database-authorizations",
        "metaDescription" => "When creating HANA database users and authorizations for custom-made schema structures",
        "image" => "/blogs-images/Blog-img012.jpg",
        "url" => "https://s4access.com/blogs/Native-HANA-database-authorizations"
    ],
    // [
        //     "id" => "When-a-company-grows-what-opportunities-can-it-create-for-its-people",
        //     "title" => "When a company grows, what opportunities can it create for its people?",
        //     "slug" => "When-a-company-grows-what-opportunities-can-it-create-for-its-people",
        //     "metaDescription" => "Company growth is not only about expanding business operations – it is also a significant opportunity for employees.",
        //     "image" => "/blogs-images/2290.webp",
        //     "url" => "https://s4access.com/blogs/When-a-company-grows-what-opportunities-can-it-create-for-its-people"
        // ],
        [
            "id" => "sap-access-management-consultant-guide",
            "title" => "How to Choose the Right SAP Access Consultant: When to Bring in External SAP Security & GRC Experts",
            "slug" => "sap-access-management-consultant-guide",
            "metaDescription" => "Learn when to bring in external SAP Access, Security, and GRC experts. Discover how to choose the right SAP consultant to strengthen compliance, controls, and role design.",
            "image" => "/blogs-images/blog15.jpg",
            "url" => "https://s4access.com/blogs/sap-access-management-consultant-guide"
        ],

];

// Determine protocol and host dynamically
$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
$host = $_SERVER['HTTP_HOST'];
$baseUrl = $protocol . $host;

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