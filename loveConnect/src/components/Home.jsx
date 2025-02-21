import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero">
        <h1>Find Your Perfect Match ❤️</h1>
        <p>Join LoveConnect and start your journey towards meaningful connections.</p>
        <Link to="/signup" className="btn-primary">Get Started</Link>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose LoveConnect?</h2>
        <div className="feature-list">
          <div className="feature">
            <h3>🔍 Smart Matching</h3>
            <p>AI-powered matchmaking to connect you with the best matches.</p>
          </div>
          <div className="feature">
            <h3>💬 Real Conversations</h3>
            <p>Chat and video call securely to know your match better.</p>
          </div>
          <div className="feature">
            <h3>🔐 Safe & Secure</h3>
            <p>We prioritize your privacy with profile verification and security features.</p>
          </div>
          <div className="feature">
            <h3>🌎 Global Reach</h3>
            <p>Connect with singles from your city or anywhere in the world.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          <p>“I found my soulmate on LoveConnect! The matching system is amazing.”</p>
          <h4>- Priya, 27</h4>
        </div>
        <div className="testimonial">
          <p>“Safe, secure, and easy to use. Highly recommended for singles!”</p>
          <h4>- Rahul, 30</h4>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Start Your Love Story Today!</h2>
        <Link to="/signup" className="btn-primary">Join Now</Link>
      </section>
    </div>
  );
};

export default Home;
