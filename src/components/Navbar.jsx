import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom"; // ⬅ Import useLocation
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const location = useLocation(); // ⬅ Get current URL path
  const [active, setActive] = useState(location.pathname); // ⬅ Set active based on current URL
  const [toggle, setToggle] = useState(false);
  const navRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Update active state when URL changes
  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar relative z-50">
      <Link to="/">
        <img 
          src={logo} 
          alt="Tapsys" 
          className="w-[160px] h-[40px] drop-shadow-[0_0_4px_rgba(0,0,0,0.5)]"
        />
      </Link>

      {/* Desktop Nav */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.path}
            className={`font-poppins font-medium cursor-pointer text-[16px] ${
              active === nav.path ? "text-[#007fcc]" : "text-black"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.path)}
          >
            <Link to={nav.path}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center" ref={navRef}>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain text-[#007fcc]"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-[#007fcc] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.path}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.path ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => {
                  setActive(nav.path);
                  setToggle(false);
                }}
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
