import React from 'react';
import { BsClockHistory, BsClipboardCheck } from 'react-icons/bs';
import { IoBarChartSharp } from 'react-icons/io5';
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import blueIcon from '../assets/blue-icon.png';
import bannerBg from '../../src/QUIZ/background.png';
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
    description: 'Benchmark comparison',
  },
  {
    id: 3,
    icon: <BsClipboardCheck />,
    title: <>No<br/>Sign-up</>,
    description: 'See results immediately',
  },
];

export default function Quiz() {
  return (
    <section className="quiz-hero-section">
    

      <div className="quiz-content">
        {/* Badge */}
        <div className="quiz-badge">
          <IoBarChartSharp className="quiz-badge-icon" />
          <span>Industry Benchmark</span>
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
        <p className="quiz-footnote">
          Benchmark based on assessment of SAP environments
        </p>
      </div>
    </section>
  );
}