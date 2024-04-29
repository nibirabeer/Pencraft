import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Route, and Routes from React Router
import Navbar from './components/Navbar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import AuthorCard from './components/AuthorCard';
import CookieConsentPopup from './components/CookieConsentPopup';
import AuthorDashboard from './pages/AuthorDashboard'; // Import the AuthorDashboard component
import AuthorsList from './pages/AuthorsList'; // Import the AuthorsList component
import AuthorProfile from './pages/AuthorProfile'; // Import the AuthorProfile component
import WritingPortfolio from './pages/WritingPortfolio'; // Import the WritingPortfolio component

function App() {
  const [showCookiePopup, setShowCookiePopup] = useState(true);

  const handleAcceptCookies = () => {
    setShowCookiePopup(false);
  };

  const handleRejectCookies = () => {
    setShowCookiePopup(false);
  };

  return (
    <Router>
      <div>
        {showCookiePopup && (
          <CookieConsentPopup
            onAccept={handleAcceptCookies}
            onReject={handleRejectCookies}
          />
        )}
        <Routes>
          <Route path="/author-dashboard" element={<AuthorDashboard />} /> {/* Route for AuthorDashboard */}
          <Route path="/authors-list" element={<AuthorsList />} /> {/* Route for AuthorsList */}
          <Route path="/author-profile" element={<AuthorProfile />} /> {/* Route for AuthorProfile */}
          <Route path="/writing-portfolio" element={<WritingPortfolio />} /> {/* Route for WritingPortfolio */}
        </Routes>
        <Navbar />
        
        <Header />
        <SearchBar />
        <AuthorCard />
        <HeroSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
