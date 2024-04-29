// CookieConsentPopup.jsx

import React from 'react';

function CookieConsentPopup({ onAccept, onReject }) {
  return (
    <div className="cookie-popup" style={{ backgroundColor: '#333', color: '#fff', padding: '10px', borderRadius: '0 0 10px 10px' }}>
      <p style={{ marginBottom: '10px' }}>We use cookies to improve your experience. Do you accept?</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={{ backgroundColor: '#fff', color: '#333', borderRadius: '5px', padding: '2px 8px', marginRight: '10px' }} onClick={onAccept}>Accept</button>
        <button style={{ backgroundColor: '#fff', color: '#333', borderRadius: '5px', padding: '2px 8px' }} onClick={onReject}>Reject</button>
      </div>
    </div>
  );
}

export default CookieConsentPopup;
