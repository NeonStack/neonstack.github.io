import Header from './Header';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Certificates from './Certificates';
import Contact from './Contact';
import './index.css';

export default function App() {
  return (
    <>
      <Header />
      <div className='flex flex-col mt-[5rem] lg:flex-row lg:gap-12 lg:bg-background-alt lg:p-10'>
        <div className='lg:flex lg:flex-col lg:gap-12 lg:w-[60%]'>
          <div>
            <Hero className={`lg:pt-4 cardSection`} />
          </div>
          <div className='lg:flex lg:flex-row lg:gap-12'>
            <div className='lg:w-1/2'>
              <AboutMe className={`cardSection`} />
            </div>
            <div className='lg:w-1/2'>
              <Education className={`cardSection`} />
            </div>
          </div>
        </div>
        <div className='lg:w-[40%]'>
          <Skills className={`cardSection`} />
        </div>
      </div>
      <Projects />
      <Certificates />
      <Contact />
    </>
  );
}