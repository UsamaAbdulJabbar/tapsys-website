import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
    <Link to="/">
    <img 
  src={logo} 
  alt="Tapsys" 
  className="w-[160px] h-[40px] drop-shadow-[0_0_4px_rgba(0,0,0,0.5)]"
/>
    </Link>


      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
  {navLinks.map((nav, index) => (
    <li
      key={nav.path} // Use path instead of id
      className={`font-poppins font-medium cursor-pointer text-[16px] ${
        active === nav.title ? "text-[#007fcc]" : "text-black"
      } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`} 
      onClick={() => setActive(nav.title)}
    >
      <Link to={nav.path}>{nav.title}</Link>  {/* Use nav.path instead of nav.id */}
    </li>
  ))}
</ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-[#007fcc] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-black"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link to={nav.path}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
