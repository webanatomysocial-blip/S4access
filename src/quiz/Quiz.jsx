import React from 'react';
import { BsClockHistory, BsClipboardCheck } from 'react-icons/bs';
import { IoBarChartSharp } from 'react-icons/io5';
import { FaChevronRight } from 'react-icons/fa';
import { Asterisk } from 'lucide-react';
import Link from 'next/link';
import bannerBg from '../assets/quiz-assets/bg..png';
import twoMinIcon from '../assets/quiz-assets/2-min.png';
import Image from 'next/image';
import './Quiz.css';

const cards = [
  {
    id: 1,
    icon: <BsClockHistory />,
    title: <>Quick<br/>Assessment</>,
    description: '6 strategic questions',
  },
  {
    id: 2,
    icon: <IoBarChartSharp />,
    title: <>Instant<br/>Results</>,
    description: 'Get your score immediately',
  },
  {
    id: 3,
    icon: <BsClipboardCheck />,
    title: <>
Confidential & <br/>Secure
</>,
    description: 'Your answers are never shared publicly',
  },
];

export default function Quiz() {
  return (
    <section className="quiz-hero-section">
      <Image src={bannerBg} alt="" fill priority className="quiz-bg-image" />

      <div className="quiz-content">
        {/* Badge */}
        <div className="quiz-badge">
          <Image src={twoMinIcon} alt="" className="quiz-badge-icon" />
          <span>2-Minute Assessment</span>
        </div>

        {/* Title */}
        <h1 className="quiz-title">
          SAP Access<br />Governance Maturity
        </h1>

        {/* Feature cards */}
        <div className="quiz-cards">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className="quiz-card" 
            >
              <div className="quiz-card-top">
                <span className="quiz-card-react-icon">{card.icon}</span>
                <Asterisk className="quiz-card-star" strokeWidth={3} />
              </div>
              <div className="quiz-card-body">
                <h3 className="quiz-card-title">{card.title}</h3>
                <p className="quiz-card-desc">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link href="/quiz/start" className="quiz-start-btn">
          Start Assessment <FaChevronRight className="quiz-btn-arrow" />
        </Link>

        {/* Footnote */}
        {/* <p className="quiz-footnote">
          Benchmark based on assessment of SAP environments
        </p> */}
      </div>
    </section>
  );
}