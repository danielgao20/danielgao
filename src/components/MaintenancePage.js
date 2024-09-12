import React from 'react';
import '../style.css'; // Import the existing styles
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';

const MaintenancePage = () => {
  return (
    <div className="App">
       <div className="coming-soon">
         <h1 className="title">Daniel Gao</h1>
         <h2 className="subheading">Making updates, new site coming soon!</h2>

         <div className="social-links">
          <a href="https://github.com/danielgao20" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/danielgao20/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
        </div>
       </div>
     </div>
  );
}

export default MaintenancePage;
