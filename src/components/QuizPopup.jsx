"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import "../css/QuizPopup.css";

const QuizPopup = ({ open, onClose }) => {
  const router = useRouter();
  const videoRef = useRef(null);

  useEffect(() => {
    if (open && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay prevented:", err);
      });
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="quiz-popup-overlay" onClick={onClose}>
      <div className="quiz-popup-card" onClick={(e) => e.stopPropagation()}>
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="quiz-popup-bg-video"
        >
          <source src="/videos/popupbackground.mp4" type="video/mp4" />
        </video>

        {/* Video Background Gradient Overlay */}
        <div className="quiz-popup-bg-overlay"></div>

        {/* Popup Main Content */}
        <div className="quiz-popup-content">
          <button
            className="quiz-popup-close"
            onClick={onClose}
            aria-label="Close popup"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <h2 className="quiz-popup-title">
            How mature is your{" "}
            <span className="quiz-popup-title-highlight">
              SAP access
              <br />
              governance?
            </span>
          </h2>

          <p className="quiz-popup-desc">
            Answer 6 quick questions and see exactly where your SAP environment
            stands today - and what to fix first.
          </p>

          <div className="quiz-popup-feature">
            <div className="quiz-popup-feature-icon">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div>
              <p className="quiz-popup-feature-title">2 minutes</p>
              <p className="quiz-popup-feature-sub">
                6 strategic questions, nothing more
              </p>
            </div>
          </div>

          <div className="quiz-popup-feature">
            <div className="quiz-popup-feature-icon">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect x="3" y="12" width="4.5" height="9" rx="1" />
                <rect x="9.75" y="4" width="4.5" height="17" rx="1" />
                <rect x="16.5" y="8" width="4.5" height="13" rx="1" />
              </svg>
            </div>
            <div>
              <p className="quiz-popup-feature-title">Instant maturity score</p>
              <p className="quiz-popup-feature-sub">
                Get your result immediately, no waiting
              </p>
            </div>
          </div>

          <button
            className="quiz-popup-cta"
            onClick={() => router.push("/quiz")}
          >
            <span>Start assessment</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

          <div className="quiz-popup-footer">
            <span>Takes About 2 Minutes</span>
            <span className="quiz-popup-dot">•</span>
            <button className="quiz-popup-later" onClick={onClose}>
              No thanks, maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPopup;
