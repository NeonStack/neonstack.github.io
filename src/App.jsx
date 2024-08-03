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
import { easeIn, motion } from "framer-motion";

export default function App() {
  return (
    <>
      <Header />
      <div className='flex flex-col mt-[4rem] lg:flex-row lg:gap-12 lg:bg-background-alt lg:p-10'>
        <div className='lg:flex lg:flex-col lg:gap-12 lg:w-[60%]'>
          <motion.div id="aboutme1"
            initial={{ x: "-20%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "backOut", duration: 1.5, delay: 0.1 }}
            viewport={{ once: "true" }}
          >
            <Hero className={`lg:pt-10 cardSection`} />
          </motion.div>
          <div className='lg:flex lg:flex-row lg:gap-12'>
            <motion.div className='lg:w-1/2' id="aboutme2"
              initial={{ y: "20%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "backOut", duration: 1.5, delay: 0.2 }}
              viewport={{ once: "true" }}
            >
              <AboutMe className={`cardSection`} />
            </motion.div>
            <motion.div className='lg:w-1/2' id="education"
              initial={{ y: "20%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "backOut", duration: 1.5, delay: 0.3 }}
              viewport={{ once: "true" }}
            >
              <Education className={`cardSection`} />
            </motion.div>
          </div>
        </div>
        <motion.div className='lg:w-[40%]' id="skills"
          initial={{ x: "20%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "backOut", duration: 1.5, delay: 0.4 }}
          viewport={{ once: "true" }}
        >
          <Skills className={`cardSection`} />
        </motion.div>
      </div>
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