import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';


export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <header className="flex justify-between items-center bg-primary shadow-md p-5 px-10 fixed w-full z-50 top-0 max-h-20">
      {/* desktop */}
      <a href='https://neonstack.github.io'><h1 className="text-text text-xl font-bold flex justify-center items-center">
        <span className='text-accent'>Neon</span>Stack</h1></a>
      <ul className="hidden gap-6 [&>*]:font-semibold lg:flex">
        <li><a href="#aboutme1" className="px-2 py-1 parent-triangle-container">About Me</a></li>
        <li><a href="#projects" className="px-2 py-1 parent-triangle-container">Projects</a></li>
        <li><a href="#certificates" className="px-2 py-1 parent-triangle-container">Certificates</a></li>
        <li><a href="#contact" className="px-2 py-1 parent-triangle-container">Contact</a></li>
      </ul>

      {/* mobile closed menu*/}
      <FaBars size={24} className='lg:hidden text-text' onClick={toggleMenu} />

      {/* mobile opened menu*/}
      <div className={`flex bg-primary shadow-md absolute w-[100%] h-[100vh] justify-center items-center z-50 top-0 lg:hidden ease-in-out duration-200 ${showMenu ? 'right-[0%]' : 'right-[-110%]'}`}>
        {/* close btn */}
        <IoMdClose className="absolute right-10 top-10 text-4xl cursor-pointer text-text" onClick={toggleMenu} />
        <ul className="text-2xl flex flex-col gap-3 text-center font-semibold [&>*]:rounded-lg [&>*]:transition-colors [&>*]:duration-300 hover:[&>*]:bg-background">
          <li className="h-fit"><a href="#aboutme1" className="p-2 block" onClick={toggleMenu}>Home</a></li>
          <li className="h-fit"><a href="#aboutme2" className="p-2 block" onClick={toggleMenu}>About Me</a></li>
          <li className="h-fit"><a href="#contact" className="p-2 block" onClick={toggleMenu}>Education</a></li>
          <li className="h-fit"><a href="#contact" className="p-2 block" onClick={toggleMenu}>Skills</a></li>
          <li className="h-fit"><a href="#projects" className="p-2 block" onClick={toggleMenu}>Projects</a></li>
          <li className="h-fit"><a href="#certificates" className="p-2 block" onClick={toggleMenu}>Certificates</a></li>
          <li className="h-fit"><a href="#contact" className="p-2 block" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
    </header>
  );
}
