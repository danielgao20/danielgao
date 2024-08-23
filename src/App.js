import React from 'react';
import './style.css'; // Import global styles
import './mediaqueries.css';  // Responsive styles
// import Header from './components/Header';
// import Profile from './components/Profile';
// import About from './components/About';
// import Experience from './components/Experience';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
import MaintenancePage from './components/MaintenancePage';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer /> */}
      <MaintenancePage />
    </div>
  );
}

export default App;
