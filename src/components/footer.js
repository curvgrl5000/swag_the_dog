import React from 'react';
import logo from '../logo.svg';

function Footer() {
  
  return (
    <div>
      <footer className="curve_detail flex-grid-halves">
        <div className="col">
          <img src={logo} className="wag-logo" alt="logo" />
          <h4 className="info">© 2020 curve</h4>
        </div>
        
        <div className="col">
          <div className="social">
            <ul className="social_bottom">
              <li className="social-icons"><a href="https://github.com/curvgrl5000/swag_the_dog"><span><i className="fab fa-github-square" rel="noopener noreferrer" target="_blank"></i></span></a></li> 
              <li className="social-icons"><a href="https://www.linkedin.com/in/annamendoza/" rel="noopener noreferrer" target="_blank"><span><i className="fab fa-linkedin"></i></span></a></li>         
              <li className="social-icons"><a href="mailto:annamendoza.curve@gmail.com"><span><i className="fab fas fa-envelope-square"target="_blank"></i></span></a></li>         
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
