// components/ProfileForm.jsx
import React, { useState } from 'react';

const ProfileForm = ({ author, onUpdateProfile }) => {
  const [name, setName] = useState(author.name);
  const [email, setEmail] = useState(author.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update profile logic
    onUpdateProfile({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default ProfileForm;
