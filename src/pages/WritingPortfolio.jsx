// WritingPortfolio.jsx

import React, { useState } from 'react';
import NavbarLogin from '../components/NavbarLogin';
import Footer from '../components/Footer';
import './WritingPortfolio.css'; // Import the CSS file

const WritingPortfolio = () => {
  // Sample data for the writing portfolio
  const [portfolioItems] = useState([
    {
      title: "Short Story: The Lost City",
      type: "Story",
      content: "In the heart of the dense Amazon rainforest, where ancient trees reached towards the sky and the sounds of wildlife echoed through the greenery, there lay a secret. Buried beneath layers of foliage and forgotten by time was the Lost City",
      author: "John Doe",
    },
    {
      title: "Article: The Importance of Reading",
      type: "Article",
      content: "In an era dominated by screens and digital distractions, the simple act of reading holds a profound significance that transcends time and technology. From the earliest civilizations to the modern age, reading has been the gateway to knowledge, imagination, and empathy, shaping minds and societies in ways both subtle and profound....",
      author: "Jane Smith",
    },
    {
      title: "Poem: A Whisper in the Wind",
      type: "Poem",
      content: "Whispers in the wind, gentle and light...",
      author: "Emily Brown",
    },
    {
      title: "Essay: Exploring the Universe",
      type: "Essay",
      content: "The universe is vast and mysterious...",
      author: "Michael Johnson",
    },
    {
      title: "Short Story: The Haunted Manor",
      type: "Story",
      content: "In the depths of the night, shadows linger...",
      author: "Sophia Wang",
    },
    {
      title: "Article: The Benefits of Meditation",
      type: "Article",
      content: "Meditation brings peace and clarity...",
      author: "David Lee",
    },
    // Add more portfolio items as needed
  ]);

  // State to track the selected type for filtering
  const [selectedType, setSelectedType] = useState("All");

  // Function to filter portfolio items based on type
  const filterPortfolio = (type) => {
    setSelectedType(type);
  };

  return (
    <div>
      <NavbarLogin />
      <div className="portfolio-container">
        <h5>Writing Portfolio</h5>
        <p>This is the page where you can view an author's writing portfolio.</p>
        
        {/* Filter options */}
        <div className="filter-options">
          <span>Filter by Type:</span>
          <button onClick={() => filterPortfolio("All")}>All</button>
          <button onClick={() => filterPortfolio("Story")}>Story</button>
          <button onClick={() => filterPortfolio("Article")}>Article</button>
          <button onClick={() => filterPortfolio("Poem")}>Poem</button>
          <button onClick={() => filterPortfolio("Essay")}>Essay</button>
          {/* Add more filter options for different types */}
        </div>
        
        {/* Writing portfolio section */}
        <div>
          {portfolioItems.map((item, index) => (
            (selectedType === "All" || item.type === selectedType) && (
              <div key={index} className="portfolio-item">
                <h3>{item.title}</h3>
                <p><strong>Type:</strong> {item.type}</p>
                <p>{item.content}</p>
                <p><strong>Author:</strong> {item.author}</p>
                {/* Add Read More button or Social Media Sharing buttons */}
              </div>
            )
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WritingPortfolio;
