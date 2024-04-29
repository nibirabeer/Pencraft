import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Navbar.css'; // Import the CSS file

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isSignUpFormOpen, setIsSignUpFormOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLoginForm = () => {
    setIsLoginFormOpen(!isLoginFormOpen);
    // Close sign up form if open
    if (isSignUpFormOpen) {
      setIsSignUpFormOpen(false);
    }
  };

  const toggleSignUpForm = () => {
    setIsSignUpFormOpen(!isSignUpFormOpen);
    // Close login form if open
    if (isLoginFormOpen) {
      setIsLoginFormOpen(false);
    }
  };

  return (
    <div className='navbar-container h-20 flex items-center justify-between w-full'>
      <div className='navbar-title text-3xl pl-20 font-bold font-outfit'>
        <Link to="/Home">PenCraft</Link> {/* Use Link to navigate to Home */}
      </div>
      <div className='pr-20 flex items-center relative'>
        <button className='bg-white text-black px-3 py-2 rounded-md mr-2' onClick={toggleLoginForm}>
          Login
        </button>
        <button className='bg-black text-white px-3 py-2 rounded-md mr-4' onClick={toggleSignUpForm}>
          Sign Up
        </button>
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
        {isLoginFormOpen && (
          <div className="absolute top-full right-0 mt-2 bg-white shadow-md rounded-md p-4">
            <form>
              {/* Login form inputs */}
              <input type="text" placeholder="Username" className="block w-full px-4 py-2 mb-2 border rounded-md" />
              <input type="password" placeholder="Password" className="block w-full px-4 py-2 mb-2 border rounded-md" />
              <button type="submit" className="bg-black text-white px-4 py-2 rounded-md w-full">Login</button>
            </form>
          </div>
        )}
        {isSignUpFormOpen && (
          <div className="absolute top-full right-0 mt-2 bg-white shadow-md rounded-md p-4">
            <form>
              {/* Sign up form inputs */}
              <input type="text" placeholder="Full Name" className="block w-full px-4 py-2 mb-2 border rounded-md" />
              <input type="text" placeholder="Username" className="block w-full px-4 py-2 mb-2 border rounded-md" />
              <input type="email" placeholder="Email" className="block w-full px-4 py-2 mb-2 border rounded-md" />
              <input type="password" placeholder="Password" className="block w-full px-4 py-2 mb-2 border rounded-md" />
              <input type="password" placeholder="Confirm Password" className="block w-full px-4 py-2 mb-2 border rounded-md" />
              <button type="submit" className="bg-black text-white px-4 py-2 rounded-md w-full">Sign Up</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
