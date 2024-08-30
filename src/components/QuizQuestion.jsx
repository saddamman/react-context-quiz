export const QuizQuestion = ({ suffleAnswer, handleClick }) => {
  console.log("QuizQuestion");

  return (
    <ul className=" space-y-2">
      {suffleAnswer.map((answer, index) => (
        <li
          key={index}
          className="bg-white text-gray-800 cursor-pointer rounded-2xl p-3 hover:bg-pink-900 transition-all
          hover:text-white"
          onClick={handleClick}
        >
          {answer}
        </li>
      ))}
    </ul>
  );
};
