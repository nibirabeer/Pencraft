// components/WritingForm.jsx
import React, { useState } from 'react';
import './WritingForm.css'; // Import the CSS file

const WritingForm = ({ onSubmitWriting }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit writing logic
    onSubmitWriting({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form className="writing-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">Add Writing</button>
    </form>
  );
};

export default WritingForm;
