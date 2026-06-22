import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { customerSuccessMetadata } from "../coustomer-pages/metadata";
import "./CustomerSuccessonebyone.css";

const CustomerSuccessonebyone = () => {
  // Dynamically sort stories by date in descending order (newest first)
  const sortedStories = [...customerSuccessMetadata].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="customer-success-onebyone-container">
      <h2 className="big-heading-text-black ">Customer success stories</h2>
      <div className="customer-success-grid">
        {sortedStories.map((story) => (
          <Link href={story.link}
            key={story.id}
            className="customer-success-card"
          >
            <div className="customer-success-image-wrapper">
              <Image src={story.image} alt={story.title} />
            </div>
            <div className="customer-success-content">
           
              <h3 className="customer-success-card-title">{story.title}</h3>
              <p className="customer-success-card-desc">
                {story.description.slice(0, 140) + "..."}
              </p>
              <div className="customer-success-card-footer">
                <span className="customer-success-read-more">Read More</span>
                <span className="customer-success-arrow">
                  <FaArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CustomerSuccessonebyone;
