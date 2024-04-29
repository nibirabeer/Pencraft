import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import NavbarLogin from '../components/NavbarLogin'; // Import NavbarLogin component
import Footer from '../components/Footer';
import './AuthorProfile.css'; // Import the CSS file for styling

const AuthorProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [authorInfo, setAuthorInfo] = useState({
    bio: "Insert author bio here...",
    email: "author@example.com",
    phone: "+1234567890",
    website: "www.authorwebsite.com",
    // Add more fields for additional information as needed
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Logic to save updated profile information
    setIsEditing(false);
  };

  const handleLogout = () => {
    // Logic to handle logout
    // For example, you might clear user authentication tokens or perform other logout tasks

    // Redirect to the home page
    window.location.href = '/'; // Or you can use history.push('/') if you have access to history
  };

  const handleChangePhoto = (e) => {
    // Logic to handle changing the author's photo
    // You can use e.target.files to get the selected file
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuthorInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <NavbarLogin />
      <div className="container author-profile">
        <div className="row">
          <div className="col-md-4">
            <img src="public/IMG_20240128_083100_548.webp" alt="Author" className="author-image" />
            {isEditing && (
              <div>
                <input type="file" onChange={handleChangePhoto} accept="image/*" />
              </div>
            )}
          </div>
          <div className="col-md-8">
            <div className="author-details">
              <h1 className="big-heading">Author Profile</h1>
              <div className="edit-button-container">
                {isEditing ? (
                  <div className="btn-group">
                    <button onClick={handleSaveClick} className="btn btn-primary save-button">Save</button>
                    <button onClick={() => setIsEditing(false)} className="btn btn-secondary">Cancel</button>
                  </div>
                ) : (
                  <button onClick={handleEditClick} className="btn btn-primary">Edit</button>
                )}
                <button onClick={handleLogout} className="btn btn-primary">Logout</button> {/* Logout button */}
              </div>
              <p>This is the page where you can view an author's profile.</p>
              <h3>About the Author</h3>
              {isEditing ? (
                <textarea name="bio" value={authorInfo.bio} onChange={handleInputChange} className="form-control" />
              ) : (
                <p>{authorInfo.bio}</p>
              )}
              <h3>Contact Information</h3>
              {isEditing ? (
                <div className="form-group">
                  <input type="text" name="email" value={authorInfo.email} onChange={handleInputChange} className="form-control" />
                </div>
              ) : (
                <p>Email: {authorInfo.email}</p>
              )}
              {isEditing ? (
                <div className="form-group">
                  <input type="tel" name="phone" value={authorInfo.phone} onChange={handleInputChange} className="form-control" />
                </div>
              ) : (
                <p>Phone: {authorInfo.phone}</p>
              )}
              {isEditing ? (
                <div className="form-group">
                  <input type="text" name="website" value={authorInfo.website} onChange={handleInputChange} className="form-control" />
                </div>
              ) : (
                <p>Website: {authorInfo.website}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AuthorProfile;
