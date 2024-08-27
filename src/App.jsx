import React, { Suspense, useState } from 'react';
import Header from './Header';
import './index.css';
import useScreenSize from './hooks/useScreenSize';

// Lazy loading components
const Hero = React.lazy(() => import('./Hero'));
const AboutMe = React.lazy(() => import('./AboutMe'));
const Education = React.lazy(() => import('./Education'));
const Skills = React.lazy(() => import('./Skills'));
const Projects = React.lazy(() => import('./Projects'));
const Trainings = React.lazy(() => import('./Trainings'));
const Contact = React.lazy(() => import('./Contact'));
const Footer = React.lazy(() => import('./Footer'));

export default function App() {
  // State: Current View
  const [currentView, setCurrentView] = useState('parentHero');

  // Custom hook to check screen size
  const isLargeScreen = useScreenSize();

  // Function: Update current view when component is in viewport
  function handleViewportUpdate(e) {
    setCurrentView(e.target.id);
  }

  return (
    <>
      <Header highlight={currentView} />
      <main>
        <section
          className='lg:bg-background-alt p-0 lg:p-10 min-h-[100vh] overflow-hidden'
          id='parentHero'
          onViewportEnter={handleViewportUpdate}
        >
          <Suspense
            fallback={
              <div className='w-full h-40vh lg:h-[100vh] flex items-center justify-center'>
                <div className='h-16 w-16 border-4 border-accent border-t-primary rounded-full mx-auto animate-spin'></div>
              </div>
            }
          >
            <div className='flex flex-col mt-[4rem] lg:flex-row lg:gap-7'>
              <div className='lg:flex lg:flex-col lg:gap-7 lg:w-[60%]'>
                <div id='aboutme1'>
                  <Hero className={`lg:pt-10 lg:rounded-2xl lg:h-full lg:shadow-lg lg:border lg:border-background-alt lg:bg-background ${isLargeScreen ? "component1" : ""}`} />
                </div>
                <div className='lg:flex lg:flex-row lg:gap-7'>
                  <div className='lg:w-1/2' id='aboutme2'>
                    <AboutMe className={`lg:rounded-2xl lg:h-full lg:shadow-lg lg:border lg:border-background-alt lg:bg-background ${isLargeScreen ? "component2" : ""}`} />
                  </div>
                  <div className='lg:w-1/2' id='education'>
                    <Education className={`lg:rounded-2xl lg:h-full lg:shadow-lg lg:border lg:border-background-alt lg:bg-background ${isLargeScreen ? "component3" : ""}`} />
                  </div>
                </div>
              </div>
              <div className='lg:w-[40%]' id='skills'>
                <Skills className={`lg:rounded-2xl lg:h-full lg:shadow-lg lg:border lg:border-background-alt lg:bg-background ${isLargeScreen ? "component4" : ""}`} />
              </div>
            </div>
          </Suspense>
        </section>
        <Suspense
          fallback={
            <div className='w-full h-40vh lg:h-[100vh] flex items-center justify-center'>
              <div className='h-16 w-16 border-4 border-accent border-t-primary rounded-full mx-auto animate-spin'></div>
            </div>
          }
        >
          <div id="projects" onViewportEnter={handleViewportUpdate}>
            <Projects />
          </div>
        </Suspense>
        <Suspense
          fallback={
            <div className='w-full h-40vh lg:h-[100vh] flex items-center justify-center'>
              <div className='h-16 w-16 border-4 border-accent border-t-primary rounded-full mx-auto animate-spin'></div>
            </div>
          }
        >
          <div id="trainings" onViewportEnter={handleViewportUpdate}>
            <Trainings />
          </div>
        </Suspense>
        <Suspense
          fallback={
            <div className='w-full h-40vh lg:h-[100vh] flex items-center justify-center'>
              <div className='h-16 w-16 border-4 border-accent border-t-primary rounded-full mx-auto animate-spin'></div>
            </div>
          }
        >
          <div id="contact" onViewportEnter={handleViewportUpdate}>
            <Contact />
          </div>
        </Suspense>
        <div id="footer">
          <Footer />
        </div>
      </main>
    </>
  );
}
