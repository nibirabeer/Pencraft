import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'; // Import faUser icon
import { Link } from 'react-router-dom'; // Import Link from React Router
import './NavbarLogin.css'; // Import the CSS file

function NavbarLogin() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar-container h-20 flex items-center justify-between w-full'>
      <div className='navbar-title text-3xl pl-20 font-bold font-outfit'>
        <Link to="/Home">PenCraft</Link> {/* Use Link to navigate to Home */}
      </div>
      <div className='pr-20 flex items-center relative'>
        {/* Replaced login and signup buttons with user icon and name */}
        <Link to="/author-profile" className='bg-black text-white px-3 py-2 rounded-md mr-4 flex items-center'>
          <FontAwesomeIcon icon={faUser} className='mr-2' />
          <span>Md Mridha</span> {/* Replace with user's name */}
        </Link>
        <FontAwesomeIcon icon={faBars} className='ml-4 cursor-pointer navbar-menu' onClick={toggleMenu} />
        {isMenuOpen && (
          <div className="absolute top-full right-0 mt-2 bg-white shadow-md rounded-md">
            <ul className="navbar-menu">
              <li className="px-4 py-3 cursor-pointer hover:bg-gray-100">
                <Link to="/authors-list">Authors List</Link> {/* Use Link to navigate to Authors List */}
              </li>
              <li className="px-4 py-3 cursor-pointer hover:bg-gray-100">
                <Link to="/author-profile">Author Profile</Link> {/* Use Link to navigate to Author Profile */}
              </li>
              <li className="px-4 py-3 cursor-pointer hover:bg-gray-100">
                <Link to="/writing-portfolio">Writing Portfolio</Link> {/* Use Link to navigate to Writing Portfolio */}
              </li>
              <li className="px-4 py-3 cursor-pointer hover:bg-gray-100">
                <Link to="/author-dashboard">Author Dashboard</Link> {/* Use Link to navigate to Author Dashboard */}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavbarLogin;
