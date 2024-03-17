import React from 'react';
import '../style.css'; // Import CSS

function Projects() {
  return (
    <section id="projects">
      <p class="section__text__p1">Browse My Recent</p>
      <h1 class="title">Projects</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src="./assets/tripgenie.png"
                alt="Project 2"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">TripGenie</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.open('https://github.com/danielgao20/TripGenie', '_blank')}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.open('https://devpost.com/software/tripgenie-exy4j3', '_blank')}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src="./assets/pulse.png"
                alt="Project 3"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Pulse</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.open('https://github.com/danielgao20/Pulse', '_blank')}
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.open('https://devpost.com/software/pulse-uq9fzi', '_blank')}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src="./assets/amanda.png"
                alt="AI Medical Assistant"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">AI Medical Assistant</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.open('https://github.com/danielgao20/AMANDA', '_blank')}
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.open('https://www.youtube.com/watch?v=xCeraZ5wf88&list=PLbuomA3vEYEdN2wgdCYcsKU9wz3zWYWPQ&index=6&ab_channel=AICamp', '_blank')}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src="./assets/roadie.png"
                alt="Project 3"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Roadie</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.open('https://github.com/danielgao20/Roadie', '_blank')}
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.open('https://devpost.com/software/roadie-839avp', '_blank')}
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <img src={`${process.env.PUBLIC_URL}/assets/arrow.png`} alt="Arrow icon" className="icon arrow" onClick={() => window.location.href = '/#contact'} />
    </section>
  );
}

export default Projects;