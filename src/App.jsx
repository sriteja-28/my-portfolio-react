<<<<<<< HEAD
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
=======
import React, { useState, useEffect } from 'react'; 
>>>>>>> gh-pages
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
<<<<<<< HEAD
=======
import './App.css';
>>>>>>> gh-pages

const App = () => {
  const [isLoading, setIsLoading] = useState(true); 


  useEffect(() => {
    
    setTimeout(() => {
      setIsLoading(false);  
    }, 3000); 
  }, []);

<<<<<<< HEAD
=======



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

>>>>>>> gh-pages
  return (
    <>
      {isLoading ? (
       <SplittingLoader/>

      ) : (
        <>
          <Header />
          <main>
<<<<<<< HEAD
            
            <section id="about" style={{ padding: '20px 20px', background: '#f9f9f9' }}>
=======

            <section
              id="about"
              style={{ padding: '20px 20px' }}
            >
>>>>>>> gh-pages
              <About />
            </section>

            
<<<<<<< HEAD
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
=======
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
>>>>>>> gh-pages
              <Achievements />
              <Softskills />
              <Languages />
              <Interests />
            </section>
 
<<<<<<< HEAD
            <section id="contact" style={{ padding: '20px 20px', background: '#ffffff' }}>
=======
            <section id="contact" style={{ padding: '20px 20px'}}>
>>>>>>> gh-pages
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
