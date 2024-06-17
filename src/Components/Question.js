import React from 'react';

function Question({ question, handleAnswerOptionClick }) {
  return (
    <div className='question-section'>
      <div className='question-text'>{question.question}</div>
      <div className='answer-section'>
        {question.answers.map((answer) => (
          <button
            onClick={() => handleAnswerOptionClick(answer === question.correctAnswer)}
            key={answer}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
