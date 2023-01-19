import { useState, useEffect, useContext } from "react";
import { QuizContext } from "../context/QuizContext";

function Timer() {
  const [quizState, dispatch] = useContext(QuizContext);
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    const timer = () => {
      setInterval(() => setCounter(counter - 1), 1000);
    };
    timer();
    clearInterval(timer);
  }, [counter, dispatch, quizState.showResults]);

  // counter === 0 && setCounter(10);

  return (
    <div>
      {!quizState.showResults &&
        counter === 0(dispatch({ type: "NEXT_QUESTION" }))}
    </div>
  );
}

export default Timer;
