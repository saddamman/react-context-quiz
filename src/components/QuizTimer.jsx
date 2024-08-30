import { useEffect, useState } from "react";

function QuizTimer({ duration, onHandleClick, isStartQuiz }) {
  const [timeLeft, setTimer] = useState(duration);
  useEffect(() => {
    let intervalTimer;

    if (isStartQuiz) {
      intervalTimer = setInterval(() => {
        if (timeLeft > 0) {
          setTimer((prev) => prev - 1);
        } else {
          onHandleClick();
          clearInterval(intervalTimer);
        }
      }, 1000);
    }

    return () => clearInterval(intervalTimer);
  }, [timeLeft, onHandleClick, isStartQuiz]);

  const quizTimerClasses = ` h-full bg-pink-100 absolute top-0 left-0 transition-all`;
  return (
    <div className="relative h-2 bg bg-pink-900 rounded-md overflow-hidden ">
      <span
        className={quizTimerClasses}
        style={{ width: `${(timeLeft / duration) * 100}%` }}
      ></span>
    </div>
  );
}

export default QuizTimer;
