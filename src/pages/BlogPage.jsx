import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import '../css/Blog.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const blogModules = import.meta.glob('../blogs/*.jsx');

const BlogPage = () => {
  const { blogName } = useParams();

  // Handle undefined or empty blogName
  if (!blogName) {
    console.warn('BlogPage: blogName is undefined');
    return <div className="blog-not-found">Blog not found</div>;
  }

  const blogKey = Object.keys(blogModules).find(key =>
    key.toLowerCase().includes(`/${blogName.toLowerCase()}.jsx`)
  );

  if (!blogKey) {
    console.warn(`BlogPage: No blog found for blogName: ${blogName}`);
    return <div className="blog-not-found">Blog not found: {blogName}</div>;
  }

  const LazyBlog = React.lazy(() =>
    blogModules[blogKey]()
      .then(module => ({
        default: module.default || (() => <div>Blog content missing</div>),
      }))
      .catch(error => {
        console.error(`Error loading blog ${blogName}:`, error);
        return { default: () => <div>Error loading blog: {blogName}</div> };
      })
  );

  return (
    <>
    
    <Header backgroundColor="#000000ff" />
    <div className="blog-page-container">
      <Suspense fallback={<div>Loading...</div>}>
        <LazyBlog />
      </Suspense>
    </div>
    <Footer />
    </>
  );
};

export default BlogPage;