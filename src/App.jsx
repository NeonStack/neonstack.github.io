import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Certificates from './Certificates';
import Contact from './Contact';
import Footer from './Footer';
import './index.css';
import { motion } from "framer-motion";

export default function App() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const target = document.getElementById('animatedSection');
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  const getAnimationProps = (x = 0, y = 0, delay = 0) => ({
    initial: { opacity: 0, x, y },
    animate: inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y },
    transition: { ease: "backOut", duration: 1.5, delay }
  });

  return (
    <>
      <Header />
      <motion.div 
        id="animatedSection"
        className='flex flex-col mt-[4rem] lg:flex-row lg:gap-7 lg:bg-background-alt lg:p-10'
      >
        <div className='lg:flex lg:flex-col lg:gap-7 lg:w-[60%]'>
          <motion.div {...getAnimationProps(-20, 0, 0.1)}>
            <Hero className={`lg:pt-10 cardSection`} />
          </motion.div>
          <div className='lg:flex lg:flex-row lg:gap-7'>
            <motion.div className='lg:w-1/2' {...getAnimationProps(0, 20, 0.2)}>
              <AboutMe className={`cardSection`} />
            </motion.div>
            <motion.div className='lg:w-1/2' {...getAnimationProps(0, 20, 0.3)}>
              <Education className={`cardSection`} />
            </motion.div>
          </div>
        </div>
        <motion.div className='lg:w-[40%]' {...getAnimationProps(20, 0, 0.4)}>
          <Skills className={`cardSection`} />
        </motion.div>
      </motion.div>
      <div id="projects">
        <Projects />
      </div>
      <div id="certificates">
        <Certificates />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}