import React, { useState } from 'react';


const Settings = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    newPassword: '',
  });

  const [darkMode, setDarkMode] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Settings Updated Successfully!');
    setUserData({ ...userData, password: '', newPassword: '' }); // Clear password fields
  };

  return (
    <div className={`settings-container ${darkMode ? 'dark' : ''}`}>
      <h2>Settings</h2>

      {message && <p className="message">{message}</p>}

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Username:</label>
          <input type="text" name="username" value={userData.username} onChange={handleChange} />
        </div>

        <div className="input-group">
          <label>Email:</label>
          <input type="email" name="email" value={userData.email} onChange={handleChange} />
        </div>

        <div className="input-group">
          <label>Current Password:</label>
          <input type="password" name="password" value={userData.password} onChange={handleChange} />
        </div>

        <div className="input-group">
          <label>New Password:</label>
          <input type="password" name="newPassword" value={userData.newPassword} onChange={handleChange} />
        </div>

        <button type="submit">Update Settings</button>
      </form>

      <div className="toggle-container">
        <label>Dark Mode:</label>
        <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      </div>
    </div>
  );
};

export default Settings;
