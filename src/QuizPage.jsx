import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");

  const navigate = useNavigate();

  const goToWelcomePage = (e) => {
    e.preventDefault(); // Prevent form submission
    if (q1 === "true" && q2 === "false" && q3 === "true") {
      navigate('/welcome'); // Navigate to the Welcome page
    } else {
      alert("Please try again with the correct answers.");
    }
  };

  return (
    <div>
      <h1>Take Quiz to Qualify</h1>
      <p>Welcome to the qualifier quiz</p>
      <form onSubmit={goToWelcomePage}>
        <h2>Question One: True or False, React is a tool used primarily for frontend development.</h2>
        <input type="radio" value="true" name="q1" onChange={(e) => setQ1(e.target.value)} /> True
        <input type="radio" value="false" name="q1" onChange={(e) => setQ1(e.target.value)} /> False

        <h2>Question Two: True or False, Frontend and backend code must be written in the same language.</h2>
        <input type="radio" value="true" name="q2" onChange={(e) => setQ2(e.target.value)} /> True
        <input type="radio" value="false" name="q2" onChange={(e) => setQ2(e.target.value)} /> False

        <h2>Question Three: True or False, a web developer should be familiar with SQL.</h2>
        <input type="radio" value="true" name="q3" onChange={(e) => setQ3(e.target.value)} /> True
        <input type="radio" value="false" name="q3" onChange={(e) => setQ3(e.target.value)} /> False

        <button type="submit">Submit Quiz</button>
      </form>
    </div>
  );
};

export default QuizPage;
