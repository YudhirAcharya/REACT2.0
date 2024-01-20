import React from "react";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: string;
  questionNo: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNo,
  totalQuestions,
}) => {
  return (
    <div>
      <p className="number">
        Question : {questionNo} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}>
        {" "}
      </p>
      <div className="">
        {answers.map((answers) => (
          <div>
            <button disabled></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
