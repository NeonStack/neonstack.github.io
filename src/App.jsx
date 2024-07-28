import Header from './Header';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Certificates from './Certificates';
import Contact from './Contact';

export default function App() {
  return (
    <>
      <Header />
      <div className='flex flex-col mt-[5rem] lg:flex-row lg:gap-8 lg:bg-background-alt lg:p-10'>
        <div className='lg:flex lg:flex-col lg:gap-8 lg:w-[60%]'>
          <div>
            <Hero className={'lg:bg-background lg:rounded-2xl lg:h-full'} />
          </div>
          <div className='lg:flex lg:flex-row lg:gap-8'>
            <div className='lg:w-1/2'>
              <AboutMe className={'lg:bg-background lg:rounded-2xl lg:h-full'} />
            </div>
            <div className='lg:w-1/2'>
              <Education className={'lg:bg-background lg:rounded-2xl lg:h-full'} />
            </div>
          </div>
        </div>
        <div className='lg:w-[40%]'>
          <Skills className={'lg:bg-background lg:rounded-2xl lg:h-full'} />
        </div>
      </div>
      <Projects />
      <Certificates />
      <Contact />
    </>
  );
}