import React from 'react'
import './Footer.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-top'> 
        <h2>Join TMDB Community</h2>
        <button className='signup-btn'>Sign Up</button>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h4>The Basics</h4>
          <ul>
            <li>About TMDB</li>
            <li>Contact Us</li>
            <li>Support Forums</li>
            <li>API</li>
            <li>System Status</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Get Involved</h4>
          <ul>
            <li>Contribution Bible</li>
            <li>Add New Movie</li>
            <li>Add New TV Show</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Community</h4>
          <ul>
            <li>Guidelines</li>
            <li>Discussions</li>
            <li>Leaderboard</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li>Terms of Use</li>
            <li>API Terms</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 TMDB Clone. All rights reserved.</p>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </footer>
  )
}

export default Footer
