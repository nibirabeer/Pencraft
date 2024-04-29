import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CookieConsentPopup from './components/CookieConsentPopup';
import AuthorDashboard from './pages/AuthorDashboard';
import AuthorsList from './pages/AuthorsList';
import AuthorProfile from './pages/AuthorProfile';
import WritingPortfolio from './pages/WritingPortfolio';

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
        <Route path="/Home" element={<Home />} />
          <Route path="/author-dashboard" element={<AuthorDashboard />} />
          <Route path="/authors-list" element={<AuthorsList />} />
          <Route path="/author-profile" element={<AuthorProfile />} />
          <Route path="/writing-portfolio" element={<WritingPortfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
