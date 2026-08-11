"use client";

import { useRouter } from "next/navigation";
import "../css/QuizPopup.css";

const QuizPopup = ({ open, onClose }) => {
  const router = useRouter();
  if (!open) return null;

  return (
    <div className="quiz-popup-overlay" onClick={onClose}>
      <div className="quiz-popup-card" onClick={(e) => e.stopPropagation()}>
        <button className="quiz-popup-close" onClick={onClose} aria-label="Close popup">
          <i className="bi bi-x-lg"></i>
        </button>

        <h2 className="quiz-popup-title">
          How mature is your <span>SAP access governance?</span>
        </h2>
        <p className="quiz-popup-desc">
          Answer 6 quick questions and see exactly where your SAP environment sits against industry benchmarks.
        </p>

        <div className="quiz-popup-feature">
          <span className="quiz-popup-feature-icon"><i className="bi bi-clock"></i></span>
          <div>
            <p className="quiz-popup-feature-title">2 minutes</p>
            <p className="quiz-popup-feature-sub">6 strategic questions, nothing more</p>
          </div>
        </div>

        <div className="quiz-popup-feature">
          <span className="quiz-popup-feature-icon"><i className="bi bi-bar-chart-fill"></i></span>
          <div>
            <p className="quiz-popup-feature-title">Instant benchmark</p>
            <p className="quiz-popup-feature-sub">See how you compare to similar SAP teams</p>
          </div>
        </div>

        <button className="quiz-popup-cta" onClick={() => router.push("/quiz")}>
          Start assessment <i className="bi bi-arrow-right"></i>
        </button>

        <p className="quiz-popup-footer">
          Takes About 2 Minutes <span className="quiz-popup-dot">•</span>{" "}
          <button className="quiz-popup-later" onClick={onClose}>No thanks, maybe later</button>
        </p>
      </div>
    </div>
  );
};

export default QuizPopup;
