import React from 'react';
import '../style.css'; // Import CSS

function Profile() {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img
          src={`${process.env.PUBLIC_URL}/assets/dglogo.png`}
          alt="Daniel Gao profile"
          style={{
            borderRadius: '50%',
            width: '300px',
            height: '300px',
            border: '2px solid black',
          }}
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Daniel Gao</h1>
        <p className="section__text__p2">Software Developer</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={() => window.open(`${process.env.PUBLIC_URL}/assets/dgaoresume.pdf`)}>
            Resume
          </button>
          <button className="btn btn-color-1" onClick={() => window.location.href = '/#contact'}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
            <img src={`${process.env.PUBLIC_URL}/assets/linkedin.png`} alt="my LinkedIn profile" className="icon" onClick={() => window.location.href = 'https://www.linkedin.com/in/danielgao20'} />
            <img src={`${process.env.PUBLIC_URL}/assets/github.png`} alt="my Github profile" className="icon" onClick={() => window.location.href = 'https://github.com/danielgao20'} />
        </div>
      </div>
    </section>
  );
}

export default Profile;
