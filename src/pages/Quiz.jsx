import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";
import Navbar from "../components/Navbar";
import Question from "./Question";

function Quiz() {
  const [quizState, dispatch] = useContext(QuizContext);
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="quiz">
          {quizState.showResults && (
            <div className="results">
              <div className="congratulations">Congratulations!</div>
              <div className="results-info">
                <div>You have completed the quiz.</div>
                <div>
                  You got{" "}
                  <span className="score">{quizState.correctAnswerCount}</span>{" "}
                  of <span className="score">{quizState.questions.length}</span>{" "}
                  questions right!
                </div>
              </div>
              <div className="prompt">
                <button
                  onClick={() => dispatch({ type: "RESTART" })}
                  className="btn"
                >
                  Restart
                </button>
                <button onClick={() => navigate("/")} className="btn btn-quit">
                  Quit
                </button>
              </div>
            </div>
          )}
          {!quizState.showResults && <Question />}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
