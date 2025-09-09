// Import the local image
import img22 from './blogs-images/blog1-img.jpg'; // Ensure this path is correct

export const blogMetadata = [
  {
    id: "Is-SAP-Certification-Still-Valid-for-Your-Career-in-2025", // Matches file name without .jsx
    title: "Is the SAP Certification Still Valid for Your Career in 2025?",
    slug: "sap-certification-2025", // URL-friendly slug
    metaDescription: "Discover if SAP certification is still worth it in 2025. Explore industry demand, SAP’s evolution, career benefits, and why continuous learning is key.",
    excerpt: "In 2025, SAP certification continues to hold value for professionals aiming to grow within the SAP ecosystem. With SAP’s shift toward cloud and intelligent enterprise, modern certifications matter more than ever. Continuous learning and complementary digital skills enhance career growth and relevance in a competitive job market.",
    image: img22, // Imported image
    date: "2025-08-26",
  },
];

// Preload images with error handling
blogMetadata.forEach(blog => {
  const img = new Image();
  img.src = blog.image;
  img.onload = () => console.log(`Successfully preloaded image: ${blog.image}`);
  img.onerror = () => {
    console.error(`Failed to preload image: ${blog.image}`);
    blog.image = "/images/placeholder.jpg"; // Fallback image in public folder
  };
});