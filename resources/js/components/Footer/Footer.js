import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = props => {
  let links = (
    <React.Fragment>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </React.Fragment>
  );

  if(props.token !== null) {
    links = (
      <React.Fragment>
        <Link to="/">Home</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/logout">Logout</Link>
    </React.Fragment>
    )
  }
  
  return (
    <footer className="footer">
      <div className="footer-logo">
        <div className="footer-logo-img">
          <img src="./assets/logo-white.png" alt="Logo"/>
        </div>
        <p>help@schedule.com</p>
      </div>
      <div className="footer-navigation">
        {links}
      </div>
      <div className="footer-social">
        <div className="footer-social-icons">
          <h3>Follow us on social media</h3>
          <div className="footer-social-icons-container">
            <a href="https://www.instagram.com/" target="blank">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/" target="blank">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com/" target="blank">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/" target="blank">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="footer-copyright-container">
          <p>Copyright Schedule Web Application © - {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;