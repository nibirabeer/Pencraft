import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import AuthorCard from '../components/AuthorCard';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar />
      <AuthorCard />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default Home;
