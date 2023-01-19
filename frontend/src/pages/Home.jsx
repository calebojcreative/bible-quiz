import { useContext } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";

function Home() {
  const navigate = useNavigate();
  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState.correctAnswerCount);

  const onClick = () => {
    navigate("/quiz");
    return dispatch({ type: "RESTART" });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="hero">
          <div>
            <p className="title">Ojana Bible Quiz</p>
          </div>
          <div>
            <p className="sub-title">Test your bible knowledge!</p>
          </div>
          <div>
            <button onClick={onClick} className="btn btn-start">
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
