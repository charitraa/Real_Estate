import React from 'react';
import './Login.css'; // You'll create this file for styling

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <img src="path/to/logo.png" alt="Logo" />{' '}
          {/* Replace with the actual path to your logo */}
          <span>fasthome</span>
        </div>
        <input type="email" placeholder="E-mail" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <a href="#" className="forgot-password">
          I forgot my password
        </a>
        <button className="login-button">LOGIN</button>
        <div className="or-container">
          <span className="line"></span>
          <span className="or-text">or</span>
          <span className="line"></span>
        </div>
        <button className="google-button">
          <img src="path/to/google-icon.png" alt="Google Icon" />{' '}
          {/* Replace with the actual path to your Google icon */}
          Connect with Google
        </button>
        <p className="signup-text">
          Still not a member? <a href="#">Sign Up Now!</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
