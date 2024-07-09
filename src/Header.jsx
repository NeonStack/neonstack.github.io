import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="flex justify-between bg-background shadow-md p-5 px-10 fixed w-full z-50">
      {/* desktop */}
      <h1 className="text-text-dark text-xl font-bold">NeonStack <span className='text-accent'>|</span> PORTFOLIO</h1>
      <ul className="hidden gap-5 [&>*]:font-semibold md:flex">
        <li><a href="#" className="px-2 py-1 parent-triangle-container">Home</a></li>
        <li><a href="#" className="px-2 py-1 parent-triangle-container">About Me</a></li>
        <li><a href="#" className="px-2 py-1 parent-triangle-container">Projects</a></li>
        <li><a href="#" className="px-2 py-1 parent-triangle-container">Blog</a></li>
        <li><a href="#" className="px-2 py-1 parent-triangle-container">Contact</a></li>
      </ul>

      {/* mobile closed menu*/}
      <FaBars size={24} color="#333" className='md:hidden' onClick={toggleMenu} />

      {/* mobile opened menu*/}
      <div className={`flex bg-background shadow-md absolute w-[100%] h-[100vh] justify-center items-center z-50 top-0 md:hidden ease-in-out duration-500 ${showMenu ? 'left-[0%]' : 'left-[-110%]'}`}>
        <IoMdClose className="absolute right-10 top-10 text-4xl cursor-pointer" onClick={toggleMenu} /> {/* close btn */}
        <ul className="text-2xl flex flex-col gap-5 text-center font-semibold [&>*]:rounded-lg [&>*]:transition-colors [&>*]:duration-300 hover:[&>*]:bg-gray-200">
          <li className="h-fit"><a href="#" className="p-2 block">Home</a></li>
          <li className="h-fit"><a href="#" className="p-2 block">About Me</a></li>
          <li className="h-fit"><a href="#" className="p-2 block">Projects</a></li>
          <li className="h-fit"><a href="#" className="p-2 block">Blog</a></li>
          <li className="h-fit"><a href="#" className="p-2 block">Contact</a></li>
        </ul>
      </div>
    </header>
  );
}
