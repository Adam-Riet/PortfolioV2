import React from 'react';
import githubLogo from '../styles/github.png';
import linkedinLogo from '../styles/linkedin.png'; 


function Footer() {
  return (
    <nav>
      <ul>
       
          <a href="https://github.com/Adam-Riet" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub Logo" width="50" height="50"/>
          </a>
          <a href="https://linkedin.com/in/adam-riet" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn Logo" width="50" height="50"/>
          </a>
        
      </ul>
    </nav>
  );
}

export default Footer;
