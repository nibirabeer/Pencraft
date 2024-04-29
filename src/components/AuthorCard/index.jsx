import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './AuthorCard.css'; // Import CSS file

function AuthorCard({ author }) {
  return (
    <div className="card text-center">
      <div className="card-header">
        Featured
      </div>
      <div className="card-body">
        <h5 className="card-title">A Judgement in Stone</h5>
        <p className="card-text">"Eunice Parchman killed the Coverdale family because she could not read or write."</p>
        {/* Use Link component to navigate to AuthorDashboard */}
        <Link to="/authors-list" className="btn btn-primary">Read More</Link>
      </div>
      <div className="card-footer text-body-secondary">
        £7.99/month
      </div>
    </div>
  );
}

export default AuthorCard;
