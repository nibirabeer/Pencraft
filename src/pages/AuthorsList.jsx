import React from 'react';
import NavbarLogin from '../components/NavbarLogin';
import Footer from '../components/Footer';
import './AuthorsList.css'; // Import the CSS file

const AuthorsList = () => {
  const authors = [
    {
      name: "William Shakespeare",
      description: "William Shakespeare was an English playwright, poet, and actor, widely regarded as the greatest writer in the English language and the world's greatest dramatist.",
      photoUrl: "public/w1.jpeg" // Add the URL for William Shakespeare's photo
    },
    {
      name: "Jane Austen",
      description: "Jane Austen was an English novelist known primarily for her six major novels, which interpret, critique and comment upon the British landed gentry at the end of the 18th century.",
      photoUrl: "public/w2.jpeg" // Add the URL for Jane Austen's photo
    },
    {
      name: "Charles Dickens",
      description: "Charles Dickens was an English writer and social critic. He created some of the world's best-known fictional characters and is regarded by many as the greatest novelist of the Victorian era.",
      photoUrl: "public/w6.jpeg" // Add the URL for Charles Dickens's photo
    },
    {
      name: "Agatha Christie",
      description: "Agatha Christie was an English writer known for her sixty-six detective novels and fourteen short story collections, particularly those revolving around fictional detectives Hercule Poirot and Miss Marple.",
      photoUrl: "public/w4.jpeg" // Add the URL for Agatha Christie's photo
    },
    {
      name: "J.K. Rowling",
      description: "J.K. Rowling is a British author, philanthropist, film producer, television producer, and screenwriter. She is best known for writing the Harry Potter fantasy series.",
      photoUrl: "public/w5.jpeg" // Add the URL for J.K. Rowling's photo
    },
    {
      name: "George Orwell",
      description: "George Orwell was an English novelist, essayist, journalist, and critic. His work is characterised by lucid prose, biting social criticism, and opposition to totalitarianism.",
      photoUrl: "public/w6.jpg" // Add the URL for George Orwell's photo
    },
    // Add more authors as needed
  ];

  return (
    <div>
      <NavbarLogin />
      <div className="authors-list-container"> {/* Apply CSS class */}
        <h1 className="heading">Famous British Authors</h1>
        <p className="sub-heading">Explore the works of renowned British writers</p>
        <ul>
          {authors.map((author, index) => (
            <li key={index}>
              <div className="author-container">
                <div className="author-photo">
                  <img src={author.photoUrl} alt={author.name} />
                </div>
                <div className="author-details">
                  <h3>{author.name}</h3>
                  <p>{author.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default AuthorsList;
