import React from 'react';
import '../style.css'; // Import the existing styles

const MaintenancePage = () => {
  return (
    <div className="App">
       <div className="coming-soon">
         <h1 className="title">Daniel Gao</h1>
         <h2 className="subheading">Making updates, new site coming soon!</h2>

         <div className="social-links">
          <a href="https://github.com/danielgao20" target="_blank" rel="noopener noreferrer">
            <img src={require('../assets/github.png')} alt="GitHub" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/danielgao20/" target="_blank" rel="noopener noreferrer">
            <img src={require('../assets/linkedin.png')} alt="LinkedIn" className="social-icon" />
          </a>
        </div>
       </div>
     </div>
  );
}

export default MaintenancePage;
