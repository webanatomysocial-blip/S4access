"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { blogMetadata } from "../blogs/metadata.js";
import "../css/Blog.css";

// Sort blogs by date in descending order (most recent first)
const sortedBlogs = [...blogMetadata].sort((a, b) => {
  const dateA = new Date(a.date || "1970-01-01");
  const dateB = new Date(b.date || "1970-01-01");
  return dateB - dateA;
});

const Blogs = ({ backgroundColor, limit = 3 }) => {
  const totalBlogs = sortedBlogs.length;
  const initialVisible = limit === "all" ? totalBlogs : Math.min(limit, totalBlogs);
  const [visibleCount, setVisibleCount] = useState(initialVisible);



  const loadMore = () => {
    const newCount = totalBlogs;
    setVisibleCount(newCount);
    setTimeout(() => {
      window.lenis?.scrollTo(window.scrollY, { immediate: true });
    }, 0);
  };

  const showLoadMore = limit === "all" && visibleCount < totalBlogs;

  return (
    <div className="whole-blog-section" style={{ backgroundColor }}>
      <div className="blogs-container">
        <div className="blogs-grid">
          {sortedBlogs.length === 0 && <p>No blogs found.</p>}
          {sortedBlogs.slice(0, visibleCount).map((metadata, index) => {
            const imageUrl = typeof metadata.image === 'string' ? metadata.image : (metadata.image?.src || "/images/placeholder.jpg");
            return (
              <div key={index} className="inner-news-blogs-container">
                <Suspense fallback={<BlogCardSkeleton />}>
                  <div className="blog-text">
                    <p className="text-black">BLOG</p>
                    <Link href={`/blogs/${metadata.slug}`} style={{ textDecoration: "none" }}>
                      <h3 className="sub-big-heading-text-black">
                        {metadata.title}
                      </h3>
                    </Link>
                  </div>
                  <div
                    className="image-hover-text-come"
                    style={{ backgroundImage: `url(${imageUrl.src || imageUrl})` }}
                  >
                    <div className="inner-text-come">
                      <div>
                        <Link href={`/blogs/${metadata.slug}`} style={{ textDecoration: "none" }}>
                          <p className="small-text-black">{metadata.excerpt}</p>
                        </Link>
                      </div>
                      <Link href={`/blogs/${metadata.slug}`}
                        className="read-more-btn-blue"
                        aria-label={`Read more about ${metadata.title}`}
                      >
                        Read More{" "}
                        <i className="bi bi-arrow-right arrow-icon"></i>
                      </Link>
                    </div>
                  </div>
                </Suspense>
              </div>
            );
          })}
        </div>
        {showLoadMore && (
          <button className="load-more" onClick={loadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

const BlogCardSkeleton = () => (
  <div className="inner-news-blogs-container">
    <div className="blog-text">
      <div className="skeleton-title"></div>
      <div className="skeleton-title"></div>
    </div>
    <div className="image-hover-text-come">
      <div className="inner-text-come">
        <div>
          <div className="skeleton-title"></div>
          <div className="skeleton-excerpt"></div>
        </div>
        <div className="skeleton-link"></div>
      </div>
    </div>
  </div>
);

export default Blogs;
