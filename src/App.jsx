import React, { Suspense, useEffect, useState } from 'react';
import Header from './Header';
import './index.css';
import { motion, useAnimation } from "framer-motion";
import useScreenSize from './hooks/useScreenSize';

// Lazy loading components
const Hero = React.lazy(() => import('./Hero'));
const AboutMe = React.lazy(() => import('./AboutMe'));
const Education = React.lazy(() => import('./Education'));
const Skills = React.lazy(() => import('./Skills'));
const Projects = React.lazy(() => import('./Projects'));
const Certificates = React.lazy(() => import('./Certificates'));
const Contact = React.lazy(() => import('./Contact'));
const Footer = React.lazy(() => import('./Footer'));

const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0
  }
};

export default function App() {
  // State: Viewport and Animation
  const [currentView, setCurrentView] = useState('parentHero');
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [animationValues, setAnimationValues] = useState({
    viewport: {},
    initial: ''
  });

  const controls = useAnimation();
  // Custom hook to check screen size
  const isLargeScreen = useScreenSize();

  // Function: Update current view when component is in viewport
  function handleViewportUpdate(e) {
    setCurrentView(e.target.id);
  }

  // Effect: Start animation when hero is loaded
  useEffect(() => {
    if (heroLoaded && isLargeScreen) {
      controls.start('visible');
      console.log('initial Animation started');
    }
  }, [heroLoaded]);

  // Effect: Update animation values when screen size changes
  useEffect(() => {
    setAnimationValues({
      viewport: isLargeScreen ? { once: false, rootMargin: "-50px 0px" } : { once: true },
      initial: isLargeScreen ? 'hidden' : 'visible'
    });

    setAnimationKey(prevKey => prevKey + 1); // Reset animation

  }, [isLargeScreen]);

  return (
    <>
      <Header highlight={currentView} />
      <main>
        <motion.section className='lg:bg-background-alt p-0 lg:p-10 min-h-[100vh]'
          id='parentHero'
          // parent div animation
          key={animationKey}
          variants={parentVariants}
          animate={controls}
          initial={animationValues.initial}
          whileInView='visible'
          viewport={animationValues.viewport}

          //to set currentview for header
          onViewportEnter={handleViewportUpdate}

          //for parent hero components loading
          onLoad={() => setHeroLoaded((prevHeroLoaded) => !prevHeroLoaded)}
        >
          <Suspense fallback={
            <div className='w-full h-40vh lg:h-[100vh] flex items-center justify-center'>
              <div className='h-16 w-16 border-4 border-accent border-t-primary rounded-full mx-auto animate-spin'></div>
            </div>
          }>
            <div className='flex flex-col mt-[4rem] lg:flex-row lg:gap-7'>
              <div className='lg:flex lg:flex-col lg:gap-7 lg:w-[60%]'>
                <motion.div id='aboutme1' variants={childVariants}>
                  <Hero className={`lg:pt-10 lg:rounded-2xl lg:h-full lg:shadow-lg lg:border lg:border-background-alt lg:bg-background`} />
                </motion.div>
                <div className='lg:flex lg:flex-row lg:gap-7'>
                  <motion.div className='lg:w-1/2' id='aboutme2' variants={childVariants}>
                    <AboutMe className={`lg:rounded-2xl lg:h-full lg:shadow-lg lg:border lg:border-background-alt lg:bg-background`} />
                  </motion.div>
                  <motion.div className='lg:w-1/2' id='education' variants={childVariants}>
                    <Education className={`lg:rounded-2xl lg:h-full lg:shadow-lg lg:border lg:border-background-alt lg:bg-background`} />
                  </motion.div>
                </div>
              </div>
              <motion.div className='lg:w-[40%]' id='skills' variants={childVariants}>
                <Skills className={`lg:rounded-2xl lg:h-full lg:shadow-lg lg:border lg:border-background-alt lg:bg-background`} />
              </motion.div>
            </div>
          </Suspense>
        </motion.section>
        <Suspense fallback={
          <div className='w-full h-40vh lg:h-[100vh] flex items-center justify-center'>
            <div className='h-16 w-16 border-4 border-accent border-t-primary rounded-full mx-auto animate-spin'></div>
          </div>
        }>
          <motion.div id="projects"
            onViewportEnter={handleViewportUpdate}
            viewport={{ once: false, amount: 0.5 }}
          >
            <Projects />
          </motion.div>
        </Suspense>
        <Suspense fallback={
          <div className='w-full h-40vh lg:h-[100vh] flex items-center justify-center'>
            <div className='h-16 w-16 border-4 border-accent border-t-primary rounded-full mx-auto animate-spin'></div>
          </div>
        }>
          <motion.div id="certificates"
            onViewportEnter={handleViewportUpdate}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Certificates />
          </motion.div>
        </Suspense>
        <Suspense fallback={
          <div className='w-full h-40vh lg:h-[100vh] flex items-center justify-center'>
            <div className='h-16 w-16 border-4 border-accent border-t-primary rounded-full mx-auto animate-spin'></div>
          </div>
        }>
          <motion.div id="contact"
            onViewportEnter={handleViewportUpdate}
            viewport={{ once: false, amount: 0.05 }}
          >
            <Contact />
          </motion.div>
        </Suspense>
        <motion.div id="footer">
          <Footer />
        </motion.div>
      </main>
    </>
  );
}
