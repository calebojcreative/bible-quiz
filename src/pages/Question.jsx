import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import Answer from "./Answer";
// import Timer from "../components/Timer";

function Question() {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  return (
    <div className="questions">
      {/* <Timer /> */}
      <div className="question">
        <div className="question-number">
          {quizState.currentQuestionIndex + 1}.
        </div>
        <div className="question-text">{currentQuestion.question}</div>
      </div>
      <div className="answers">
        {quizState.answers.map((answer, index) => (
          <Answer
            answerText={answer}
            currentAnswer={quizState.currentAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            key={index}
            index={index}
            onSelectAnswer={(answerText) =>
              dispatch({ type: "SELECT_ANSWER", payload: answerText })
            }
          />
        ))}
      </div>
      <div>
        <button
          onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          className="btn btn-next"
        >
          NEXT QUESTION
        </button>
      </div>
    </div>
  );
}

export default Question;
