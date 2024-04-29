// index.jsx

import React from 'react';
import './HeroSection.css'; // Import the CSS file

function HeroSection() {
  return (
    <div className="hero-section relative">
       <h6>Read what others have to say</h6> {/* Heading remains in its original position */}
       <div className="writer middle"> {/* Middle writer moved to the top */}
        <div className="photo-frame">
          <img src="public/Screenshot 2024-04-23 at 21.00.49.png" alt="Photo 2" className="photo" />
        </div>
        <h6>Md Abidur Rahman Mridha</h6>
        <p>"Meet Abid, the go-to author for easy-to-understand web design books. His clear writing style and practical tips help readers create impressive websites with confidence."</p>
      </div>
     
      <div className="writer left"> {/* Top writer moved to the middle */}
        <div className="photo-frame">
          <img src="public/Screenshot 2024-04-23 at 20.58.43.png" alt="Photo 1" className="photo" />
        </div>
        <h6>Shahdin Nawaj Ahir</h6>
        <p>"Meet Ahir, the author behind user-friendly web design guides. With clear instructions and practical insights, Ahir's books make creating impressive websites a breeze for everyone."</p>
      </div>
      <div className="writer right">
        <div className="photo-frame">
          <img src="public/Screenshot 2024-04-23 at 21.02.13.png" alt="Photo 3" className="photo" />
        </div>
        <h6>Noorun Noobi</h6>
        <p>"Introducing Noor, the web design guru whose straightforward books simplify website creation for all skill levels."</p>
      </div>
    </div>
  );
}

export default HeroSection;
