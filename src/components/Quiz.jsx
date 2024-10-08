import { useState } from "react";
import QUESTION from "../data/question";
import { QuizQuestion } from "./QuizQuestion";
import QuizTimer from "./QuizTimer";
import { Summary } from "./Summary";
import { Button } from "./comman/Button";

function Quiz() {
  console.log("Quiz Component");
  const [userAnswer, setUserAnswer] = useState([]);
  const [isStartQuiz, setIsStartQuiz] = useState(false);

  const currentAnswer = userAnswer?.length;

  const defaultTimerDuration = 5; // You can change this value or make it dynamic

  //   console.log(QUESTION);
  if (QUESTION?.length === userAnswer?.length) {
    return (
      <div className="md:w-3/4 mx-auto">
        <Summary userAnswer={userAnswer} />
      </div>
    );
  }

  let correctAnswer = QUESTION[currentAnswer].answers[0];
  let incorrectAnswers = QUESTION[currentAnswer].answers.slice(1);
  let suffleAnswer = [correctAnswer, ...incorrectAnswers];
  suffleAnswer.sort(() => Math.random() - 0.5);

  const handleClick = (e) => {
    setUserAnswer((prevQuizAnswer) => [
      ...prevQuizAnswer,
      e !== undefined ? e.target.innerText : null,
    ]);
  };

  const handleStartQuiz = () => {
    setIsStartQuiz(true);
  };

  return (
    <section>
      <div className="quiz-header text-center">
        <h2 className="mb-2 text-xl">
          <b>React Quiz</b>
        </h2>
        <p>A simple quiz application written in React.js</p>
      </div>
      <div className="quiz-section mt-10 bg-pink-700 border border-pink rounded-3xl p-6 text-white w-1/2 m-auto">
        {!isStartQuiz ? (
          <Button className="mx-auto block" onClick={handleStartQuiz}>
            Start Quiz
          </Button>
        ) : (
          <>
            <div className="mb-4">
              <QuizTimer
                key={currentAnswer}
                duration={defaultTimerDuration}
                onHandleClick={handleClick}
                isStartQuiz={isStartQuiz}
              />
            </div>
            <p className="font-semibold mb-5">{QUESTION[currentAnswer].text}</p>

            <QuizQuestion
              suffleAnswer={suffleAnswer}
              currentAnswer={currentAnswer}
              handleClick={handleClick}
              key={currentAnswer}
            />
          </>
        )}
      </div>
    </section>
  );
}

export default Quiz;
