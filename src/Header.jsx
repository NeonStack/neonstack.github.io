import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="flex justify-between bg-background-light shadow-md p-5 px-10 fixed w-full z-50">
      {/* desktop */}
      <h1 className="text-text-dark text-xl font-bold">JL PORTFOLIO</h1>
      <ul className="hidden gap-5 md:flex">
        <li><a href="#" className="px-2 py-1">Home</a></li>
        <li><a href="#" className="px-2 py-1">About Me</a></li>
        <li><a href="#" className="px-2 py-1">Projects</a></li>
        <li><a href="#" className="px-2 py-1">Blog</a></li>
        <li><a href="#" className="px-2 py-1">Contact</a></li>
      </ul>

      {/* mobile closed */}
      <FaBars size={24} color="#333" className='md:hidden' onClick={toggleMenu} />

      <div className={`flex bg-gradient-to-br from-background-light to-background-dark shadow-md absolute w-[100%] h-[100vh] justify-center items-center z-50 top-0 md:hidden ease-in-out duration-500 ${showMenu ? 'left-[0%]' : 'left-[-110%]'}`}>

          {/* mobile opened */}
          <IoMdClose className="absolute right-10 top-10 text-4xl cursor-pointer" onClick={toggleMenu} />
          <ul className="text-2xl flex flex-col gap-5 text-center font-semibold">
            <li className="h-fit"><a href="#" className="p-2">Home</a></li>
            <li className="h-fit"><a href="#" className="p-2">About Me</a></li>
            <li className="h-fit"><a href="#" className="p-2">Projects</a></li>
            <li className="h-fit"><a href="#" className="p-2">Blog</a></li>
            <li className="h-fit"><a href="#" className="p-2">Contact</a></li>
          </ul>
        </div>
    </header>
  );
}
