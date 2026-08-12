"use client";

import { useEffect, useState } from "react";
import QuizPopup from "./QuizPopup";

const HomeQuizPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // const timer = setTimeout(() => setOpen(true), 5000);
    // return () => clearTimeout(timer);
  }, []);

  // return <QuizPopup open={open} onClose={() => setOpen(false)} />;
  return null;
};

export default HomeQuizPopup;
