import React, { useState } from 'react';
import './WritingForm.css'; // Import the CSS file

const WritingForm = ({ onSubmitWriting }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !category || !content) {
      setError('Please fill in all fields');
      return;
    }
    onSubmitWriting({ title, author, category, content });
    setTitle('');
    setAuthor('');
    setCategory('');
    setContent('');
    setError('');
  };

  return (
    <form className="writing-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
      <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
      {error && <div className="error">{error}</div>}
      <button type="submit">Add Writing</button>
    </form>
  );
};

export default WritingForm;
