import React, { useState } from 'react';
import Question from './Question';
import TopicInput from './TopicInput';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const fetchQuestions = async (topic) => {
    // Replace this with the actual API call to OpenAI or any other service
    const response = await fetch('your-api-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
      },
      body: JSON.stringify({ topic })
    });
    const data = await response.json();
    setQuestions(data.questions);
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='quiz'>
      <TopicInput onSubmit={fetchQuestions} />
      {questions.length > 0 && (
        showScore ? (
          <div className='score-section'>
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <Question
            question={questions[currentQuestionIndex]}
            handleAnswerOptionClick={handleAnswerOptionClick}
          />
        )
      )}
    </div>
  );
}

export default Quiz;
