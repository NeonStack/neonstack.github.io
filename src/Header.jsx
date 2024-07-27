import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';


export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(prevShowMenu => !prevShowMenu);
  };

  return (
    <header className="flex justify-between items-center bg-primary shadow-md p-5 px-10 fixed w-full z-50 top-0 max-h-20">
      {/* desktop */}
      <a href='https://neonstack.github.io'><h1 className="text-text text-xl font-bold"> <span className='text-accent'>Neon</span>Stack</h1></a>
      <ul className="hidden gap-6 [&>*]:font-semibold md:flex">
        <li><a href="#" className="px-2 py-1 parent-triangle-container">Home</a></li>
        <li><a href="#" className="px-2 py-1 parent-triangle-container">About Me</a></li>
        <li><a href="#" className="px-2 py-1 parent-triangle-container">Projects</a></li>
        <li><a href="#" className="px-2 py-1 parent-triangle-container">Certificates</a></li>
        <li><a href="#" className="px-2 py-1 parent-triangle-container">Contact</a></li>
      </ul>

      {/* mobile closed menu*/}
      <FaBars size={24} className='md:hidden text-text' onClick={toggleMenu} />

      {/* mobile opened menu*/}
      <div className={`flex bg-primary shadow-md absolute w-[100%] h-[100vh] justify-center items-center z-50 top-0 md:hidden ease-in-out duration-300 ${showMenu ? 'right-[0%]' : 'right-[-110%]'}`}>
        {/* close btn */}
        <IoMdClose className="absolute right-10 top-10 text-4xl cursor-pointer text-text" onClick={toggleMenu} />
        <ul className="text-2xl flex flex-col gap-5 text-center font-semibold [&>*]:rounded-lg [&>*]:transition-colors [&>*]:duration-300 hover:[&>*]:bg-background">
          <li className="h-fit"><a href="#" className="p-2 block">Home</a></li>
          <li className="h-fit"><a href="#" className="p-2 block">About Me</a></li>
          <li className="h-fit"><a href="#" className="p-2 block">Projects</a></li>
          <li className="h-fit"><a href="#" className="p-2 block">Certificates</a></li>
          <li className="h-fit"><a href="#" className="p-2 block">Contact</a></li>
        </ul>
      </div>
    </header>
  );
}
