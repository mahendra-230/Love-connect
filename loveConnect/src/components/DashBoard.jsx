import React from 'react';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert('Logged out successfully!');
    navigate('/login'); // Redirect to login
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/settings">Settings</a></li>
          <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
        </ul>
      </aside>

      <main className="main-content">
        <h1>Welcome, User!</h1>
        <div className="stats">
          <div className="card">
            <h3>Total Users</h3>
            <p>0</p>
          </div>
          <div className="card">
            <h3>Active Users</h3>
            <p>0</p>
          </div>
          <div className="card">
            <h3>New Signups</h3>
            <p>0</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
