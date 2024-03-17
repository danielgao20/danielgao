import React from 'react';
import '../style.css'; // Import CSS

function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
            <img 
              src={`${process.env.PUBLIC_URL}/assets/dgaophoto.png`} 
              alt="Profile" 
              className="about-pic" 
              style={{
                width: '300px',
                height: '300px',
              }}
            />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={`${process.env.PUBLIC_URL}/assets/experience.png`} alt="Experience icon" className="icon" />
              <h3>Experience</h3>
              <p>2+ years <br />Software Development</p>
            </div>
            <div className="details-container">
                <img src={`${process.env.PUBLIC_URL}/assets/education.png`} alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p>USC<br />B.S. Computer Science and Business Administration</p>
            </div>
          </div>
          <div className="text-container">
            <p>A driven computer science and business administration student at USC, actively pursuing diverse experiences 
              through software engineering internships and entrepreneurial projects. Proficient in full-stack development 
              with languages such as Java, Python, JavaScript, and frameworks like React and Django. Passionate about 
              leveraging technology to solve real-world challenges and create positive impact, fueled by extensive travel 
              and exposure to varied cultural perspectives.</p>
          </div>
        </div>
      </div>
      <img src={`${process.env.PUBLIC_URL}/assets/arrow.png`} alt="Arrow icon" className="icon arrow" onClick={() => window.location.href = '/#experience'} />
    </section>
  );
}

export default About;
