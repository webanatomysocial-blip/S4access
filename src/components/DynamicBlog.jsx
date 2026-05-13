// src/components/DynamicBlog.jsx
import React, { Suspense, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { blogMetadata } from "../blogs/metadata.js";
import Blogs from "./Blog";
import "../blogs/Internal-Blog.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Helmet } from "react-helmet-async";

// import all blog modules (lazy)
const blogModules = import.meta.glob("../blogs/*.jsx", { eager: false });

const SITE_ORIGIN = "https://s4access.com";

export default function DynamicBlog() {
  const { blogName } = useParams();
  console.log("DynamicBlog param blogName:", blogName);

  // find metadata case-insensitively
  const metadata = useMemo(() => {
    if (!blogName) return null;
    const key = String(blogName).toLowerCase();
    return (
      blogMetadata.find((b) => {
        const matchSlug = b.slug ? String(b.slug).toLowerCase() : null;
        const matchId = b.id ? String(b.id).toLowerCase() : null;
        return matchSlug === key || matchId === key;
      }) ?? null
    );
  }, [blogName]);

  // If metadata not found, attempt to match by filename (best-effort)
  const matchedBlogFile = useMemo(() => {
    if (!blogName) return null;
    const wanted = String(blogName).toLowerCase();
    // find a glob key whose filename matches wanted (case-insensitive)
    const found = Object.keys(blogModules).find((k) => {
      const fname = k
        .split("/")
        .pop()
        .replace(/\.(jsx|js|tsx?)$/, "");
      return fname.toLowerCase() === wanted;
    });
    return found || null;
  }, [blogName]);

  // if we found metadata use its id for the module lookup, otherwise use matchedBlogFile
  const blogImportKey = useMemo(() => {
    if (metadata) {
      // find the glob key for metadata.id (case-insensitive)
      const target = (metadata.id ?? metadata.slug ?? "")
        .toString()
        .toLowerCase();
      return (
        Object.keys(blogModules).find((k) => {
          const fname = k
            .split("/")
            .pop()
            .replace(/\.(jsx|js|tsx?)$/, "");
          return fname.toLowerCase() === target;
        }) || matchedBlogFile
      );
    }
    return matchedBlogFile;
  }, [metadata, matchedBlogFile]);

  // If still not found, render not-found
  if (!metadata && !blogImportKey) {
    console.warn("Blog metadata AND file not found for", blogName);
    return (
      <div className="breach-article-wrapper">
        <h1>Blog Not Found</h1>
        <p>No blog found with the ID: {blogName}</p>
        <Link to="/insights" className="back-btn">
          Back to Blogs
        </Link>
      </div>
    );
  }

  // Build absolute image URL (ensure full URL)
  const imageUrl =
    metadata?.image &&
    (metadata.image.startsWith("http://") ||
      metadata.image.startsWith("https://"))
      ? metadata.image
      : metadata?.image
      ? `${SITE_ORIGIN}${metadata.image.startsWith("/") ? "" : "/"}${
          metadata.image
        }`
      : `${SITE_ORIGIN}/images/black-logo-400.png`;

  const pageUrl = `${SITE_ORIGIN}/blogs/${metadata?.slug ?? metadata?.id ?? blogName}`;

  // Lazy load the blog component using the exact glob key
  const BlogComponent = React.lazy(async () => {
    const key = blogImportKey;
    if (!key) {
      return {
        default: () => (
          <div>
            <p>Blog content unavailable.</p>
            <Link to="/insights">Back to Blogs</Link>
          </div>
        ),
      };
    }
    try {
      const mod = await blogModules[key]();
      return mod;
    } catch (err) {
      console.error("Error loading blog module for", key, err);
      return {
        default: () => (
          <div>
            <p>Error loading blog content. Please try again later.</p>
            <Link to="/insights">Back to Blogs</Link>
          </div>
        ),
      };
    }
  });

  const description =
    metadata?.metaDescription ??
    metadata?.excerpt ??
    "Read this article on s4access.";

  return (
    <>
      <Helmet>
        <title>{(metadata?.title ?? "Blog") + " | s4access"}</title>
        <meta name="description" content={description} />
        {metadata?.keywords && (
          <meta name="keywords" content={metadata.keywords} />
        )}
        <link rel="canonical" href={pageUrl} />

        <meta
          property="og:title"
          content={`${metadata?.title ?? "Blog"} | s4access`}
        />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:secure_url" content={imageUrl} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta
          property="og:image:alt"
          content={`${metadata?.title ?? "Blog"} - s4access`}
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="s4access" />
        {metadata?.date && (
          <meta property="article:published_time" content={metadata.date} />
        )}
      </Helmet>

      <Header backgroundColor="black" />
      <div className="breach-article-wrapper">
        <div className="breach-hero-banner">
          <img
            src={metadata?.image ?? "/images/black-logo-400.png"}
            alt={metadata?.title ?? "s4access blog"}
          />
          <div className="hero-overlay-section">
            <h1>{metadata?.title ?? "s4access"}</h1>
          </div>
        </div>

        <div className="breach-article-content">
          <Suspense fallback={<div>Loading blog content...</div>}>
            <BlogComponent />
          </Suspense>
        </div>

        <section className="news-blogs-section-inner-blog-page">
          <div className="heading-news-blog">
            <h2 className="big-heading-text-black">Recent Blogs</h2>
          </div>
          <div className="news-blogs-container">
            <Blogs />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
