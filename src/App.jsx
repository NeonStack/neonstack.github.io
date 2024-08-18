import React, { Suspense } from 'react';
import Header from './Header';
import './index.css';

// Lazy loading components
const Hero = React.lazy(() => import('./Hero'));
const AboutMe = React.lazy(() => import('./AboutMe'));
const Education = React.lazy(() => import('./Education'));
const Skills = React.lazy(() => import('./Skills'));
const Projects = React.lazy(() => import('./Projects'));
const Certificates = React.lazy(() => import('./Certificates'));
const Contact = React.lazy(() => import('./Contact'));
const Footer = React.lazy(() => import('./Footer'));

export default function App() {

  return (
    <>
      <Header />
      <div className='flex flex-col mt-[4rem] lg:flex-row lg:gap-7 lg:bg-background-alt lg:p-10 min-h-[100vh]'>
        <Suspense fallback={<div>Loading...</div>}>
          <div className='lg:flex lg:flex-col lg:gap-7 lg:w-[60%]'>
            <div id='aboutme1'>
              <Hero className={`lg:pt-10 lg:rounded-2xl lg:h-full lg:shadow-lg lg:border lg:border-background-alt lg:bg-background`} />
            </div>
            <div className='lg:flex lg:flex-row lg:gap-7'>
              <div className='lg:w-1/2' id='aboutme2'>
                <AboutMe className={`lg:rounded-2xl lg:h-full lg:shadow-lg lg:border lg:border-background-alt lg:bg-background`} />
              </div>
              <div className='lg:w-1/2' id='education'>
                <Education className={`lg:rounded-2xl lg:h-full lg:shadow-lg lg:border lg:border-background-alt lg:bg-background`} />
              </div>
            </div>
          </div>
          <div className='lg:w-[40%]' id='skills'>
            <Skills className={`lg:rounded-2xl lg:h-full lg:shadow-lg lg:border lg:border-background-alt lg:bg-background`} />
          </div>
        </Suspense>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </>
  );
}
