import React from 'react';


const About = () => {
  return (
    <div className="about-container">
      <h1>About LoveConnect</h1>
      <p>
        Welcome to <strong>LoveConnect</strong> – a modern dating platform designed to help people
        find meaningful connections. Whether you're looking for love, friendship, or companionship, 
        LoveConnect brings people together with advanced matching algorithms.
      </p>

      <h2>Why Choose LoveConnect?</h2>
      <ul>
        <li>🔍 **Smart Matching** – Our AI-powered algorithm finds the best matches based on your interests.</li>
        <li>💬 **Real Conversations** – Connect via secure chat & video calls to get to know your matches better.</li>
        <li>🔐 **Safe & Secure** – Verified profiles and privacy protection to ensure a trustworthy experience.</li>
        <li>🌎 **Global Reach** – Find matches from around the world or someone near you.</li>
        <li>🎯 **Personalized Experience** – Customizable profiles and filters to find your perfect match.</li>
      </ul>

      <h2>How It Works?</h2>
      <ol>
        <li>✨ **Create Your Profile** – Add photos, interests, and preferences.</li>
        <li>❤️ **Find Matches** – Use our AI-powered suggestions or browse profiles.</li>
        <li>💌 **Start Chatting** – Send messages or video chat to connect in real-time.</li>
        <li>🎉 **Meet in Real Life** – Plan a date and build meaningful connections.</li>
      </ol>

      <p>
        Join **LoveConnect** today and start your journey toward finding love and companionship.
      </p>

      <a href="/SignUp"><button className="signup-btn">Sign Up Now</button></a>
    </div>
  );
};

export default About;
