import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Interests from './components/Interests'; 
import Education from './components/Education';
import Certifications from './components/Certifications';
import SplittingLoader from './components/SplittingLoader';
import Internships from './components/Internships';
import Languages from './components/Languages';
import Achievements from './components/Achievements';
import Softskills from './components/Softskills';

const App = () => {
  const [isLoading, setIsLoading] = useState(true); 


  useEffect(() => {
    
    setTimeout(() => {
      setIsLoading(false);  
    }, 3000); 
  }, []);

  return (
    <>
      {isLoading ? (
       <SplittingLoader/>

      ) : (
        <>
          <Header />
          <main>
            
            <section id="about" style={{ padding: '20px 20px', background: '#f9f9f9' }}>
              <About />
            </section>

            
            <section id="skills" style={{ padding: '20px 20px', background: '#ffffff' }}>
              <Skills />
            </section>

            
            <section id="education" style={{ padding: '20px 20px', background: '#ffffff' }}>
              <Education />
            </section>

           
            <section id="certifications" style={{ padding: '20px 20px', background: '#ffffff' }}>
              <Certifications />
            </section>

            <section id="internships" style={{ padding: '20px 20px', background: '#ffffff' }}>
              <Internships />
            </section>

            <section id="projects" style={{ padding: '20px 20px', background: '#ffffff' }}>
              <Projects />
            </section>

            <section id="my-essence" style={{ padding: '20px 20px', background: '#ffffff' }}>
              <Achievements />
              <Softskills />
              <Languages />
              <Interests />
            </section>
 
            <section id="contact" style={{ padding: '20px 20px', background: '#ffffff' }}>
              <Contact />
            </section>

            <Footer />
          </main>
        </>
      )}
    </>
  );
};

export default App;
