import React, { useState } from 'react';
import './Signup.css';

const Signup: React.FC = () => {
  const [isIndividual, setIsIndividual] = useState(true);

  const handleTabClick = (individual: boolean) => {
    setIsIndividual(individual);
  };

  return (
    <div className="membership-container">
      <div className="membership-info">
        <div className="logo">
          <img src="path/to/logo.png" alt="Logo" />
          <span>fasthome</span>
        </div>
        <h2>Why should I Join Fasthome?</h2>
        <p>
          To have the experience of "property", "information" and "trust" in the
          real estate world all together...
        </p>
        <div className="features">
          <div className="feature">
            <img src="path/to/learn.png" alt="Learn about location" />{' '}
            {/* Replace with actual icon path */}
            <p>Learn about location.</p>
          </div>
          <div className="feature">
            <img src="path/to/value.png" alt="Find out the value" />{' '}
            {/* Replace with actual icon path */}
            <p>Find out the value of your house free of charge.</p>
          </div>
          <div className="feature">
            <img src="path/to/discover.png" alt="Discover houses" />{' '}
            {/* Replace with actual icon path */}
            <p>Discover houses that will improve your life quality.</p>
          </div>
          <div className="feature">
            <img src="path/to/projects.png" alt="New projects" />{' '}
            {/* Replace with actual icon path */}
            <p>Be aware of new projects.</p>
          </div>
        </div>
      </div>
      <div className="membership-form">
        <div className="membership-tabs">
          <div
            className={`membership-tab ${isIndividual ? 'active' : ''}`}
            onClick={() => handleTabClick(true)}
          >
            Individual Membership
          </div>
          <div
            className={`membership-tab ${!isIndividual ? 'active' : ''}`}
            onClick={() => handleTabClick(false)}
          >
            Corporate Membership
          </div>
        </div>
        <button className="google-button">
          <img src="path/to/google-icon.png" alt="Google Icon" />{' '}
          {/* Replace with the actual path to your Google icon */}
          Connect with Google
        </button>
        <div className="or-container">
          <span className="line"></span>
          <span className="or-text">or</span>
          <span className="line"></span>
        </div>
        <form>
          <input
            type="text"
            placeholder="Name and Surname"
            className="input-field"
          />
          <input type="email" placeholder="E-mail" className="input-field" />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password (Again)"
            className="input-field"
          />
          <div className="checkbox-container">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree to the <a href="#">Membership Terms</a>
            </label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="promotions" />
            <label htmlFor="promotions">
              I allow Fasthome to contact me via e-mail, SMS, etc for marketing
              and promotional purposes.
            </label>
          </div>
          <button type="submit" className="signup-button">
            SIGN UP
          </button>
        </form>
        <p className="login-text">
          Already a member? <a href="#">Login now!</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
