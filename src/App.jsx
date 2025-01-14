import React, { useState, useEffect } from 'react'; 
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
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true); 


  useEffect(() => {
    
    setTimeout(() => {
      setIsLoading(false);  
    }, 3000); 
  }, []);




  useEffect(() => {
    const sprinkleDots = (x, y) => {
      for (let i = 0; i < 5; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        document.body.appendChild(dot);

        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;

        const dx = (Math.random() - 0.5) * 50;
        const dy = (Math.random() - 0.5) * 50;
        dot.style.setProperty("--dx", `${dx}px`);
        dot.style.setProperty("--dy", `${dy}px`);

        dot.style.left = `${x + scrollX}px`;
        dot.style.top = `${y + scrollY}px`;
        
        
        setTimeout(() => {
          dot.remove();
        }, 600);
      }
    };

    const handleMouseMove = (event) => {
      sprinkleDots(event.clientX, event.clientY);
    };

    
    document.body.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {isLoading ? (
       <SplittingLoader/>

      ) : (
        <>
          <Header />
          <main>

            <section
              id="about"
              style={{ padding: '20px 20px' }}
            >
              <About />
            </section>

            
            <section id="skills" style={{ padding: '20px 20px' }}>
              <Skills />
            </section>

            <section id="internships" style={{ padding: '20px 20px'}}>
              <Internships />
            </section>

            <section id="projects" style={{ padding: '20px 20px' }}>
              <Projects />
            </section>

            
            <section id="education" style={{ padding: '20px 20px' }}>
              <Education />
            </section>
           
            <section id="certifications" style={{ padding: '20px 20px' }}>
              <Certifications />
            </section>

            

            

            <section id="my-essence"  style={{ padding: '20px 20px' }}>
              <Achievements />
              <Softskills />
              <Languages />
              <Interests />
            </section>
 
            <section id="contact" style={{ padding: '20px 20px'}}>
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
