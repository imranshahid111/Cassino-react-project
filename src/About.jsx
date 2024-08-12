import React from 'react';
import Right from './Right';
import Navbar from './Navbar';

export default function About(){
  return (
    <div className='flex'>
        
    <div className='w-[60%]    poppins_thin'>
    <Navbar/>
    <div className="pl-10">
    
      <h1>About Our Number Guessing Game</h1>
      <p>Welcome to the ultimate number guessing challenge! At <strong className='font-semibold'>Cassino</strong>, we believe in the thrill of the game and the joy of solving puzzles. Whether you’re a casual player or a competitive gamer, our number guessing game offers endless fun and excitement.</p>

      <h2>Our Mission</h2>
      <p>Our mission is simple: to provide a fun, engaging, and brain-teasing experience for players of all ages. We aim to create a game that’s not only enjoyable but also stimulates your mind and sharpens your problem-solving skills.</p>

      <h2>How It All Began</h2>
      <p><strong className='font-semibold'>Cassino</strong> was created by <strong className='font-semibold'>Mr. Imran Shahid</strong>, a group of passionate game developers and puzzle enthusiasts. We wanted to design a game that combines strategy, chance, and a touch of suspense. Since our launch in <strong className='font-semibold'>2024</strong>, we’ve been dedicated to improving and expanding our game based on player feedback and innovative ideas.</p>

      <h2>What Makes Us Unique</h2>
      <p>Our game stands out for its <strong>unique features</strong>. With each round, you’ll experience <strong>[describe any special elements, like varied difficulty levels, exciting sound effects, or unique challenges]</strong>. We pride ourselves on creating a game that’s easy to pick up but hard to put down!</p>

      <h2>Meet the Team</h2>
      <p>We’re a diverse team of developers, designers, and gamers who are passionate about creating engaging experiences. <strong>[Include a brief mention of key team members or roles if applicable]</strong>. Together, we’re committed to bringing you a high-quality game that you’ll love to play.</p>

      <h2>Join the Fun</h2>
      <p>Ready to test your guessing skills? Play <strong className='font-semibold'>Cassino</strong> today and see if you can outsmart the game. Follow us on <a href="[social media links]" target="_blank" rel="noopener noreferrer">social media</a> for updates, tips, and more challenges!</p>

      <p>Thank you for visiting our "About" page. We hope you enjoy playing our game as much as we enjoyed creating it!</p>
    </div>
    </div>
    <Right/>
    </div>
  );
};







