// src/quiz/QuizApp.jsx
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {
  BsClipboardCheck,
  BsClockHistory,
  BsShieldExclamation,
  BsArrowLeftRight,
} from "react-icons/bs";
import { IoBarChartSharp } from "react-icons/io5";
import {
  FaUsers,
  FaChevronLeft,
  FaChevronRight,
  FaLock,
  FaCheck,
  FaUndoAlt,
  FaEnvelope,
  FaInfoCircle,
} from "react-icons/fa";
import "./QuizApp.css";
import bannerBg from "../../src/QUIZ/background.png";

const questions = [
  {
    id: 1,
    category: "Access Request & Approval",
    icon: <BsClipboardCheck />,
    questionText:
      "How mature is your organization's SAP user access request and approval process?",
    guidance:
      "Select the option that best describes your current state. Focus on documented processes, approval accountability, and automation level.",
    options: [
      {
        key: "A",
        score: 1,
        text: "No formal process - Ad-hoc, undocumented requests with no approval workflow or accountability.",
      },
      {
        key: "B",
        score: 2,
        text: "Basic process - Manual forms (email/spreadsheet), approval routing inconsistent across departments.",
      },
      {
        key: "C",
        score: 3,
        text: "Defined process - Documented workflow with clear approval hierarchy and ticketing, but exceptions bypass it.",
      },
      {
        key: "D",
        score: 4,
        text: "Managed process - Automated, role-based approvals in SAP/IDM with 95%+ compliance and integrated sign-off.",
      },
      {
        key: "E",
        score: 5,
        text: "Optimized process - Fully automated with intelligent role recommendations, real-time audit trail, sub-24-hour provisioning.",
      },
    ],
  },
  {
    id: 2,
    category: "Access Review & Recertification",
    icon: <BsClockHistory />,
    questionText:
      "What is your organization's approach to periodic access reviews and user access recertification in SAP systems?",
    guidance:
      "Consider frequency, automation level, documentation, and percentage of access covered by reviews.",
    options: [
      {
        key: "A",
        score: 1,
        text: "No formal reviews - Ad-hoc or nonexistent; no recertification, no visibility into who has access.",
      },
      {
        key: "B",
        score: 2,
        text: "Annual reviews only - Manual, spreadsheet-based; informal spot-checks, no certification sign-off.",
      },
      {
        key: "C",
        score: 3,
        text: "Semi-annual reviews - Structured, twice-yearly with manager attestation, but some access stays unreviewed.",
      },
      {
        key: "D",
        score: 4,
        text: "Quarterly reviews - Automated via IAM/SAP with owner certification, escalation, and 90%+ visibility.",
      },
      {
        key: "E",
        score: 5,
        text: "Continuous monitoring & quarterly certification - Real-time anomaly detection, automated de-provisioning, sub-5% orphaned accounts.",
      },
    ],
  },
  {
    id: 3,
    category: "Segregation of Duties (SoD)",
    icon: <BsShieldExclamation />,
    questionText:
      "How does your organization manage Segregation of Duties (SoD) conflicts in SAP access provisioning?",
    guidance:
      "Evaluate both the existence of SoD policies and their enforcement mechanism (manual vs. automated).",
    options: [
      {
        key: "A",
        score: 1,
        text: "Minimal SoD awareness - Conflicts unmanaged; users may hold both approval and execution rights, high risk.",
      },
      {
        key: "B",
        score: 2,
        text: "Basic SoD rules - Known conflicts (Finance, Procurement) prevented manually; coverage gaps across modules.",
      },
      {
        key: "C",
        score: 3,
        text: "Documented SoD policy - Formal policy across FI/MM/SD/HR with periodic manual checks; exceptions untracked.",
      },
      {
        key: "D",
        score: 4,
        text: "Automated SoD controls - SAP/IAM rules block conflicting assignments at provisioning; minor gaps in extended modules.",
      },
      {
        key: "E",
        score: 5,
        text: "Advanced SoD governance - Real-time detection across all modules, automated exceptions, cost-center-based rules, zero critical conflicts.",
      },
    ],
  },
  {
    id: 4,
    category: "Access Compliance & Audit",
    icon: <IoBarChartSharp />,
    questionText:
      "How prepared is your organization for regulatory audits (SOX, GDPR, IIA) regarding SAP access controls?",
    guidance:
      "Focus on documentation availability, traceability, and ability to respond quickly to audit requests.",
    options: [
      {
        key: "A",
        score: 1,
        text: "Limited audit readiness - Documentation incomplete and scattered; no audit trail, response requires major manual effort.",
      },
      {
        key: "B",
        score: 2,
        text: "Basic audit documentation - Access lists exist but aren't always current; manual effort to justify access.",
      },
      {
        key: "C",
        score: 3,
        text: "Documented and traceable - Audit trails and justification linked to approvals; response in 2-3 weeks.",
      },
      {
        key: "D",
        score: 4,
        text: "Comprehensive audit capability - Centralized GRC/IAM repository with full change history; response within 5 business days.",
      },
      {
        key: "E",
        score: 5,
        text: "Advanced audit & compliance framework - Real-time dashboard, predictive risk analytics, response within 24 hours.",
      },
    ],
  },
  {
    id: 5,
    category: "User Provisioning & De-provisioning",
    icon: <BsArrowLeftRight />,
    questionText:
      "What is the maturity of your user provisioning and de-provisioning processes in SAP?",
    guidance:
      "Consider the level of automation, speed of provisioning/de-provisioning, and integration with HR systems.",
    options: [
      {
        key: "A",
        score: 1,
        text: "Manual and unstructured - Provisioning done manually by admins; de-provisioning inconsistent, leavers may retain access for months.",
      },
      {
        key: "B",
        score: 2,
        text: "Basic structured process - Templates exist; HR-initiated de-provisioning often delayed, some post-exit lingering.",
      },
      {
        key: "C",
        score: 3,
        text: "Documented workflow - Formalized with role templates; access removed within 2 weeks of exit, process monitored.",
      },
      {
        key: "D",
        score: 4,
        text: "Semi-automated workflow - Template-based provisioning; automatic HR-triggered de-provisioning within 3 days, audit trail maintained.",
      },
      {
        key: "E",
        score: 5,
        text: "Fully automated provisioning - Full HR/SAP-IAM integration; same-day de-provisioning, terminated-user accounts under 1%.",
      },
    ],
  },
  {
    id: 6,
    category: "Governance Operating Model & Oversight",
    icon: <FaUsers />,
    questionText:
      "How is access governance oversight and accountability structured in your organization?",
    guidance:
      "Consider governance structure, defined roles, oversight frequency, and executive involvement.",
    options: [
      {
        key: "A",
        score: 1,
        text: "Unclear ownership - No governance structure; IT/admins decide access alone, no defined roles or oversight committee.",
      },
      {
        key: "B",
        score: 2,
        text: "Informal structure - Basic roles exist informally; annual discussion only, no governance committee.",
      },
      {
        key: "C",
        score: 3,
        text: "Defined structure - Documented roles (owner, approver, reviewer); quarterly reviews with cross-functional input and basic metrics.",
      },
      {
        key: "D",
        score: 4,
        text: "Formal governance program - RACI-based framework with monthly reviews, dashboard, steering committee, annual training.",
      },
      {
        key: "E",
        score: 5,
        text: "Mature governance program - Executive-level oversight with KPI trend analysis, continuous improvement, and role-based training across efficiency, compliance, and risk metrics.",
      },
    ],
  },
];

export default function QuizApp() {
  const [currentStep, setCurrentStep] = useState(0); // 0 to 5 for questions, 6 for results
  const [answers, setAnswers] = useState(Array(6).fill(null));
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [leadData, setLeadData] = useState({
    name: "",
    jobTitle: "",
    companyName: "",
    email: "",
  });
  const [emailError, setEmailError] = useState("");
  const [wantsInsights, setWantsInsights] = useState(false);

  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [currentStep, leadCaptured]);

  const handleOptionSelect = (score, optionKey) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentStep] = { score, optionKey };
    setAnswers(updatedAnswers);
  };

  const sendQuizResults = async (resultsData) => {
    try {
      const formData = new FormData();
      formData.append("type", "quiz");
      Object.keys(resultsData).forEach((key) => {
        formData.append(key, resultsData[key]);
      });

      const response = await fetch("/api/send-email.php", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log("Quiz email sent successfully:", data);
    } catch (err) {
      console.error("Error sending quiz email:", err);
    }
  };

  const handleLeadSubmit = (e) => {
    e.preventDefault();

    const freeEmailDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
      "aol.com",
      "icloud.com",
    ];
    const emailDomain = leadData.email.split("@")[1]?.toLowerCase();

    if (freeEmailDomains.includes(emailDomain)) {
      setEmailError(
        "Please enter a valid work email address (free domains are not accepted).",
      );
      return;
    }

    setEmailError("");

    if (
      leadData.name &&
      leadData.jobTitle &&
      leadData.companyName &&
      leadData.email
    ) {
      // Calculate results and trigger email dispatch at the end of the quiz when they submit the form
      const totalScore = answers.reduce(
        (sum, ans) => sum + (ans ? ans.score : 0),
        0,
      );
      const avgScore = parseFloat((totalScore / 6).toFixed(1));

      let matLevel = "";
      if (avgScore >= 4.5) matLevel = "OPTIMIZED (Level 5)";
      else if (avgScore >= 3.5) matLevel = "INTEGRATED (Level 4)";
      else if (avgScore >= 2.5) matLevel = "DEFINED (Level 3)";
      else if (avgScore >= 1.5) matLevel = "MANAGED (Level 2)";
      else matLevel = "INITIAL (Level 1)";

      // High and Low Analysis
      let maxVal = -1;
      let minVal = 6;
      let maxIdx = 0;
      let minIdx = 0;

      answers.forEach((ans, idx) => {
        if (ans) {
          if (ans.score > maxVal) {
            maxVal = ans.score;
            maxIdx = idx;
          }
          if (ans.score < minVal) {
            minVal = ans.score;
            minIdx = idx;
          }
        }
      });

      const strongest = questions[maxIdx];
      const weakest = questions[minIdx];

      sendQuizResults({
        name: leadData.name,
        email: leadData.email,
        jobTitle: leadData.jobTitle,
        companyName: leadData.companyName,
        averageScore: avgScore,
        maturityLevel: matLevel,
        strongestArea: strongest.category,
        strongestScore: answers[maxIdx]?.score || 0,
        weakestArea: weakest.category,
        weakestScore: answers[minIdx]?.score || 0,
        wantsInsights,
      });

      setLeadCaptured(true);
    }
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(6);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setAnswers(Array(6).fill(null));
    setCurrentStep(0);
    setLeadCaptured(false);
    setLeadData({ name: "", jobTitle: "", companyName: "", email: "" });
    setEmailError("");
  };

  // ── Computations ──
  const isQuestionAnswered = currentStep < 6 && answers[currentStep] !== null;

  // Calculate results if at step 6
  let averageScore = 0;
  let maturityLevel = "";
  let maturityDesc = "";
  let strongestArea = null;
  let weakestArea = null;

  if (currentStep === 6) {
    const totalScore = answers.reduce(
      (sum, ans) => sum + (ans ? ans.score : 0),
      0,
    );
    averageScore = parseFloat((totalScore / 6).toFixed(1));

    // Maturity Level
    if (averageScore >= 4.5) {
      maturityLevel = "OPTIMIZED (Level 5)";
      maturityDesc =
        "Your organization demonstrates a highly advanced, HR-integrated, and fully automated access lifecycle with continuous risk intelligence.";
    } else if (averageScore >= 3.5) {
      maturityLevel = "INTEGRATED (Level 4)";
      maturityDesc =
        "SAP access processes are highly formalized, automated, and compliant. GRC systems and automated controls manage SOD effectively.";
    } else if (averageScore >= 2.5) {
      maturityLevel = "DEFINED (Level 3)";
      maturityDesc =
        "Clear hierarchies and workflows are documented, using structured manual and electronic tracking. Minor gaps or bypass exceptions remain.";
    } else if (averageScore >= 1.5) {
      maturityLevel = "MANAGED (Level 2)";
      maturityDesc =
        "Basic spreadsheet processes and spot-checks are used. Access is inconsistent, and enforcement relies heavily on ad-hoc or manual efforts.";
    } else {
      maturityLevel = "INITIAL (Level 1)";
      maturityDesc =
        "Access processes are largely ad-hoc, verbal, and undocumented. Compliance risk is high due to a lack of governance oversight.";
    }

    // High and Low Analysis
    let maxVal = -1;
    let minVal = 6;
    let maxIdx = 0;
    let minIdx = 0;

    answers.forEach((ans, idx) => {
      if (ans) {
        if (ans.score > maxVal) {
          maxVal = ans.score;
          maxIdx = idx;
        }
        if (ans.score < minVal) {
          minVal = ans.score;
          minIdx = idx;
        }
      }
    });

    strongestArea = questions[maxIdx];
    weakestArea = questions[minIdx];
  }

  // Calculate SVG arc dashboard gauge
  const progressPercent =
    currentStep < 6 ? Math.round((currentStep / 6) * 100) : 100;

  // Radial gauge variables
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  // Calculate percentage of 360 degrees for gauge stroke
  const strokeOffset = circumference - (averageScore / 5) * circumference;

  return (
    <div className="quiz-app-container">
      <main className="quiz-app-content-wrapper">
        {currentStep < 6 ? (
          /* ── ACTIVE QUIZ QUESTIONS STEP ── */
          <div key={currentStep} className="quiz-fade-in">
            <div className="quiz-sticky-header">
              {/* Top Progress bar matching the layout */}
              <div className="quiz-progress-section">
                <div className="quiz-progress-labels-top">
                  <span className="quiz-assessment-protocol">
                    ASSESSMENT PROTOCOL
                  </span>
                </div>
                <div className="quiz-progress-info">
                  <span className="quiz-progress-step">
                    <strong>Question {currentStep + 1}</strong> of 6
                  </span>
                  <span className="quiz-progress-pct">
                    {progressPercent}% Complete
                  </span>
                </div>
                <div className="quiz-progress-track">
                  <div
                    className="quiz-progress-fill"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Question Card Header */}
              <div className="quiz-question-header">
                <div className="quiz-question-title-row">
                  <div className="quiz-category-icon-wrapper">
                    {questions[currentStep].icon}
                  </div>
                  <h2 className="quiz-question-title">
                    {questions[currentStep].questionText}
                  </h2>
                </div>
                <div className="quiz-answer-guidance">
                  <div className="quiz-guidance-title">
                    <FaInfoCircle className="quiz-guidance-icon" /> Answer
                    Guidance
                  </div>
                  <div className="quiz-guidance-text">
                    {questions[currentStep].guidance}
                  </div>
                </div>
              </div>
            </div>

            {/* Question Card Options */}
            <div className="quiz-question-card">
              {/* Options */}
              <div className="quiz-options-list">
                {questions[currentStep].options.map((opt) => {
                  const isSelected =
                    answers[currentStep]?.optionKey === opt.key;
                  return (
                    <div
                      key={opt.key}
                      className={`quiz-option-row ${isSelected ? "selected" : ""}`}
                      onClick={() => handleOptionSelect(opt.score, opt.key)}
                    >
                      <div className="quiz-option-letter-box">{opt.key}</div>
                      <div className="quiz-option-content">
                        <span className="quiz-option-text">
                          <strong>{opt.text.split(" - ")[0]}</strong> —{" "}
                          {opt.text.split(" - ").slice(1).join(" - ")}
                        </span>
                      </div>
                      <div className="quiz-option-indicator-circle">
                        <div className="quiz-option-indicator-inner" />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="quiz-footer-divider"></div>

              {/* Bottom Buttons */}
              <div className="quiz-footer-nav">
                {currentStep > 0 ? (
                  <button className="quiz-back-btn" onClick={handleBack}>
                    <FaChevronLeft size={12} style={{ marginRight: "8px" }} />{" "}
                    Back
                  </button>
                ) : (
                  <Link
                    href="/quiz"
                    className="quiz-back-btn"
                    style={{
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    <FaChevronLeft size={12} style={{ marginRight: "8px" }} />{" "}
                    Back
                  </Link>
                )}

                <button
                  className="quiz-next-btn"
                  onClick={handleNext}
                  disabled={!isQuestionAnswered}
                >
                  {currentStep === 5 ? "See Results" : "Next Question"}{" "}
                  <FaChevronRight size={12} style={{ marginLeft: "8px" }} />
                </button>
              </div>
            </div>
          </div>
        ) : !leadCaptured ? (
          /* ── LEAD CAPTURE FORM ── */
          <div className="quiz-lead-form-container quiz-fade-in">
            <h1 className="quiz-lead-title">See my results</h1>
            <p className="quiz-lead-subtitle">
              See your maturity score instantly – plus get a checklist sent to
              your inbox
            </p>
            <p
              className="quiz-lead-subtitle"
              style={{ marginBottom: "48px" }}
            >
              Your information is confidential and never shared
            </p>

            <form className="quiz-lead-form" onSubmit={handleLeadSubmit}>
              <div className="quiz-form-row">
                <div className="quiz-form-group">
                  <label className="quiz-form-label">Full Name</label>
                  <input
                    type="text"
                    className="quiz-form-input"
                    placeholder="Enter your full name"
                    value={leadData.name}
                    onChange={(e) =>
                      setLeadData({ ...leadData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="quiz-form-group">
                  <label className="quiz-form-label">Job Title</label>
                  <input
                    type="text"
                    className="quiz-form-input"
                    placeholder="e.g. SAP Manager"
                    value={leadData.jobTitle}
                    onChange={(e) =>
                      setLeadData({ ...leadData, jobTitle: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="quiz-form-group">
                <label className="quiz-form-label">Company Name</label>
                <input
                  type="text"
                  className="quiz-form-input"
                  placeholder="Your company name"
                  value={leadData.companyName}
                  onChange={(e) =>
                    setLeadData({ ...leadData, companyName: e.target.value })
                  }
                  required
                />
              </div>

              <div className="quiz-form-group">
                <label className="quiz-form-label">Work Email</label>
                <input
                  type="email"
                  className={`quiz-form-input ${emailError ? "error" : ""}`}
                  placeholder="your.email@company.com"
                  value={leadData.email}
                  onChange={(e) => {
                    setLeadData({ ...leadData, email: e.target.value });
                    if (emailError) setEmailError("");
                  }}
                  required
                />
                {emailError && (
                  <div
                    style={{
                      color: "#dc2626",
                      fontSize: "13px",
                      marginTop: "4px",
                    }}
                  >
                    {emailError}
                  </div>
                )}
              </div>

              <label
                className="quiz-form-group"
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={wantsInsights}
                  onChange={(e) => setWantsInsights(e.target.checked)}
                />
                <span className="quiz-form-label" style={{ margin: 0 }}>
                  I'd like to receive occasional SAP access governance insights
                  from s4access
                </span>
              </label>

              <button type="submit" className="quiz-lead-submit-btn">
                See my results
                <FaCheck size={13} />
              </button>
            </form>
          </div>
        ) : (
          /* ── DASHBOARD RESULTS STEP ── */
          <div className="quiz-fade-in">
            <h1 className="quiz-results-title">
              SAP Access Governance Maturity
            </h1>
            <p className="quiz-results-subtitle">
              Based on your answers, here is the detailed breakdown of your
              organization's maturity levels.
            </p>

            <div className="quiz-results-grid">
              {/* Card 1: Score Gauge */}
              <div className="quiz-results-card-gauge">
                <div className="quiz-maturity-badge">Maturity Score</div>
                <div className="quiz-gauge-outer">
                  <svg className="quiz-gauge-svg">
                    <defs>
                      <linearGradient
                        id="gauge-gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#40ffc9" />
                        <stop offset="100%" stopColor="#008a63" />
                      </linearGradient>
                    </defs>
                    <circle
                      className="quiz-gauge-track"
                      cx="90"
                      cy="90"
                      r={radius}
                    />
                    <circle
                      className="quiz-gauge-fill"
                      cx="90"
                      cy="90"
                      r={radius}
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeOffset}
                    />
                  </svg>
                  <div className="quiz-gauge-value">
                    <span className="quiz-gauge-score">{averageScore}</span>
                    <span className="quiz-gauge-max">out of 5.0</span>
                  </div>
                </div>
                <div className="quiz-maturity-badge">{maturityLevel}</div>
                <p className="quiz-maturity-level-desc">{maturityDesc}</p>
              </div>

              {/* Card 2: Insights (Strength & Weakness) */}
              <div className="quiz-results-card-insights">
                {/* Strength */}
                <div className="quiz-insight-group">
                  <div className="quiz-insight-title strength">
                    <span>★</span> Strongest Governance Area
                  </div>
                  <div className="quiz-insight-box strength">
                    <div className="quiz-insight-icon">
                      {strongestArea?.icon}
                    </div>
                    <div>
                      <div className="quiz-insight-area-name">
                        {strongestArea?.category}
                      </div>
                      <div className="quiz-insight-area-desc">
                        You scored high in this category (Score:{" "}
                        {answers[questions.indexOf(strongestArea)]?.score}/5).
                        Keep maintaining these robust workflows and automated
                        procedures.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Weakness */}
                <div className="quiz-insight-group">
                  <div className="quiz-insight-title weakness">
                    <span>⚠</span> Priority Improvement Area
                  </div>
                  <div className="quiz-insight-box weakness">
                    <div className="quiz-insight-icon">{weakestArea?.icon}</div>
                    <div>
                      <div className="quiz-insight-area-name">
                        {weakestArea?.category}
                      </div>
                      <div className="quiz-insight-area-desc">
                        You scored lowest in this category (Score:{" "}
                        {answers[questions.indexOf(weakestArea)]?.score}/5).
                        Gaps here introduce compliance vulnerabilities and
                        excess administrative workloads.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Gap Analysis */}
              <div className="quiz-results-card-gap">
                <div className="quiz-gap-header">
                  <h3 className="quiz-gap-title">
                    Industry Benchmark Gap Analysis
                  </h3>
                  <p className="quiz-gap-desc">
                    A side-by-side comparison of your governance score against
                    typical market standards (Nordic SAP environments).
                  </p>
                </div>

                <div className="quiz-gap-visualizer">
                  <div className="quiz-gap-bar-label-row">
                    <span>Initial (1.0)</span>
                    <span>Defined (3.0)</span>
                    <span>Optimized (5.0)</span>
                  </div>

                  <div className="quiz-gap-track">
                    {/* Benchmark range: 3.8 to 4.2. (3.8/5 = 76%, 4.2/5 = 84%) */}
                    <div
                      className="quiz-gap-benchmark-range"
                      style={{ left: "76%", width: "8%" }}
                    >
                      <span className="quiz-gap-benchmark-tag">
                        Benchmark Range (3.8 - 4.2)
                      </span>
                    </div>

                    {/* User marker */}
                    <div
                      className="quiz-gap-user-score-marker"
                      style={{ left: `${(averageScore / 5) * 100}%` }}
                    >
                      <span className="quiz-gap-user-tag">
                        Your Score: {averageScore}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="quiz-gap-legend">
                  <div className="quiz-legend-item">
                    <div className="quiz-legend-color user" />
                    <span>Your Current State</span>
                  </div>
                  <div className="quiz-legend-item">
                    <div className="quiz-legend-color benchmark" />
                    <span>Industry Benchmark Target</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="quiz-results-actions">
              <button className="quiz-back-btn" onClick={handleReset}>
                <FaUndoAlt size={13} /> Retake Assessment
              </button>
              <Link
                href="/contact"
                className="quiz-next-btn"
                style={{ textDecoration: "none" }}
              >
                <FaEnvelope size={13} /> Contact Us for a Detailed Audit
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
