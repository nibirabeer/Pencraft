import React from 'react';

function Header() {
  const gradientText = {
    backgroundImage: 'linear-gradient(to right, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  return (
    <div className='mt-10 flex flex-col gap-5 items-center justify-center text-black'>
      <h1 className='text-5xl font-bold' style={gradientText}>Be Your Own Hero</h1>
      <p className='text-xl text-center px-10'>
        "Unleash your creativity and share your voice with the world. Join PenCraft and connect with readers who are eager to discover your unique stories."
      </p>
    </div>
  );
}

export default Header;
