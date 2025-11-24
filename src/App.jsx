import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const Projects = lazy(() => import('./components/Projects'));
const Certifications = lazy(() => import('./components/Certifications'));
const Resume = lazy(() => import('./components/Resume'));

function App() {
  return (
    <div className="App" id="top">
      <Navbar />
      <Header />
      <main>
        <About />
        <Skills />
        <Suspense fallback={<div className="section-loader">Loading projects...</div>}>
          <Projects />
        </Suspense>
        <Education />
        <Experience />
        <Suspense fallback={<div className="section-loader">Loading certifications...</div>}>
          <Certifications />
        </Suspense>
        <Suspense fallback={<div className="section-loader">Loading resume...</div>}>
          <Resume />
        </Suspense>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
