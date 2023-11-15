import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Question from "./pages/Question";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            {/* <Route path="/question" element={<Question />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
