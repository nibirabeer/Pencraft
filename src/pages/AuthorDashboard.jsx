import React from 'react';
import NavbarLogin from '../components/NavbarLogin'; // Import NavbarLogin component
import Footer from '../components/Footer';
import WritingForm from '../components/WritingForm'; // Import the WritingForm component
import './AuthorDashboard.css'; // Import the CSS file

const AuthorDashboard = () => {
  const handleSubmitWriting = (newWriting) => {
    // Logic to handle the submission of new writing
    console.log('New writing submitted:', newWriting);
  };

  return (
    <div className="author-dashboard-container">
      <NavbarLogin /> {/* Use NavbarLogin component */}
      <div className="dashboard-content">
        <h1>Welcome to the Author Dashboard</h1>
        <p>This is the dashboard where authors can manage their content.</p>
        {/* Integrate WritingForm component for adding new writings */}
        <WritingForm onSubmitWriting={handleSubmitWriting} />
      </div>
      <Footer />
    </div>
  );
};    

export default AuthorDashboard;
