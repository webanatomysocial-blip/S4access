import React, { Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogMetadata } from '../blogs/metadata.js';
import Blogs from './Blog'; // Adjust path to match src/components/Blog.jsx
import '../blogs/Internal-Blog.css';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const DynamicBlog = () => {
  const { blogName } = useParams();
  console.log('URL blogName:', blogName); // Debug: Check URL parameter

  // Find metadata for the blog
  const metadata = blogMetadata.find(blog => blog.id === blogName);
  console.log('Found metadata:', metadata); // Debug: Check metadata

  if (!metadata) {
    console.warn(`No metadata found for blog: ${blogName}`);
    return (
      <div className="breach-article-wrapper">
        <h1>Blog Not Found</h1>
        <p>No blog found with the ID: {blogName}</p>
        <Link to="/insights" className="back-btn">Back to Blogs</Link>
      </div>
    );
  }

  // Dynamically import the blog component
  const BlogComponent = React.lazy(() =>
    import(`../blogs/${blogName}.jsx`).catch(error => {
      console.error(`Failed to load blog component for ${blogName}:`, error);
      return {
        default: () => (
          <div>
            <p>Error loading blog content. Please try again later.</p>
            <Link to="/insights">Back to Blogs</Link>
          </div>
        ),
      };
    })
  );

  return (
    <>
        <Header backgroundColor="black" />
    <div className="breach-article-wrapper">
      {/* Hero Section */}
      <div className="breach-hero-banner">
        <img src={metadata.image} alt={metadata.title} />
        <div className="hero-overlay-section">
          <h1>{metadata.title}</h1>
        </div>
      </div>
      {/* Blog Content */}
      <div className="breach-article-content">
        <Suspense fallback={<div>Loading blog content...</div>}>
          <BlogComponent />
        </Suspense>
      </div>
      {/* Recent Blogs Section */}
      <section className="news-blogs-section-inner-blog-page">
        <div className="heading-news-blog">
          <h1 className="big-heading-text-black">Recent Blogs</h1>
        </div>
        <div className="news-blogs-container">
          <Blogs /> {/* Defaults to limit=3 */}
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default DynamicBlog;