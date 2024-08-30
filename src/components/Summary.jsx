import Image from './comman/Image';
import QUESTION from '../data/question';
import quizCompletedImg from '../assets/quiz-complete.png';

import calculatePercentage from '../utils/calculatePercentage';

export const Summary = ({ userAnswer }) => {
  const totalQuestion = QUESTION?.length;
  let noSkippedAnswer = userAnswer.filter((answer) => answer === null).length;

  let noCorrectAnswer = userAnswer.filter(
    (answer, index) => answer === QUESTION[index].answers[0]
  );

  let noIncorrectAnswer = userAnswer.filter(
    (answer, index) => answer !== QUESTION[index].answers[0] && answer !== null
  ).length;

  const skippedPercentage = calculatePercentage(noSkippedAnswer, totalQuestion);
  const correctPercentage = calculatePercentage(
    noCorrectAnswer.length,
    totalQuestion
  );
  const incorrectPercentage = calculatePercentage(
    noIncorrectAnswer,
    totalQuestion
  );

  console.log(noCorrectAnswer);

  return (
    <div className="text-center mx-auto bg-white-100 shadow-lg rounded p-10">
      <Image
        src={quizCompletedImg}
        alt="quiz completed"
        className="max-w-20 inline-block"
      />
      <h3 className="text-3xl font-semibold mb-4">Completed the Quiz!</h3>
      <section className="flex justify-center items-center result-section gap-6 my-4">
        {noSkippedAnswer > 0 && (
          <div>
            <b>{skippedPercentage}%</b>
            <div>Skipped</div>
          </div>
        )}

        <div>
          <b>{correctPercentage}%</b>
          <div> Answered Correctly</div>
        </div>
        <div>
          <b>{incorrectPercentage}%</b>
          <div>Answered Wrong</div>
        </div>
      </section>
      <section className="all-answers mt-10">
        {userAnswer.map((answer, index) => {
          let cssClass = '';

          if (answer === null) {
            cssClass = 'bg-gray-600';
          } else if (answer === QUESTION[index].answers[0]) {
            cssClass = 'bg-green-900';
          } else {
            cssClass = 'bg-red-900';
          }
          return (
            <div key={QUESTION[index].id} className="mb-3 py-3 text-left">
              <div className=" bg-gray-200 rounded-xl">
                <p className="font-bold p-3 ">
                  <span className="w-10 h-10 bg-gray-300 rounded-full text-center inline-block text-black leading-10 me-4">
                    {index + 1}
                  </span>{' '}
                  {QUESTION[index].text}
                </p>
                <p className={` text-white p-3 text-sm ${cssClass}`}>
                  {answer ?? 'Skipped'}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
