import React, { useState } from 'react';

function TopicInput({ onSubmit }) {
  const [topic, setTopic] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (topic) {
      onSubmit(topic);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter a topic"
      />
      <button type="submit">Generate Questions</button>
    </form>
  );
}

export default TopicInput;
