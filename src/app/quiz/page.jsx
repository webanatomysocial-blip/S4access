import React from 'react';
import Quiz from '../../quiz/Quiz';

export const metadata = {
  title: "SAP Access Governance Maturity Quiz | s4access",
  description: "Take the SAP Access Governance Maturity Quiz to benchmark your organization.",
};

export default function QuizPage() {
  return (
    <>
      <Quiz />
    </>
  );
}
