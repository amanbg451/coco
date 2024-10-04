import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import sherLogo from "../assets/sherLogo.png";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
      <div
        className="max-w-[1300px] mx-auto  flex justify-between text-gray-200
        text-xl items-center px-12 h-20"
      >
        <a href="/">
          <img src={logo} alt="" className="h-16 w-16" />
        </a>

        <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
          <li className="cursor-pointer hover:text-orange-500">
            <Link to="about" smooth={true} offset={50} duration={500}>
              About Us
            </Link>
          </li>
          <li className="cursor-pointer hover:text-orange-500">
            <Link to="why" smooth={true} offset={50} duration={500}>
              Why Us
            </Link>
          </li>
          <li className="cursor-pointer hover:text-orange-500">
            <Link to="contact" smooth={true} offset={50} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        <div onClick={toggleNav} className="md:hidden z-50 text-black cursor-pointer">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed left-0 top-0 w-full min-h-screen bg-orange-400 z-40"
        >
          <ul className="font-semibold text-4xl space-y-8 mt-24 text-center">
            <li className="cursor-pointer hover:text-black">
              <Link
                to="/about"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
              >
                About Us
              </Link>
            </li>
            <li className="cursor-pointer hover:text-black">
              <Link
                to="/why"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
              >
                Why Us
              </Link>
            </li>
            <li className="cursor-pointer hover:text-black">
              <Link
                to="/contact"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
          <img src={sherLogo} alt="" className="w-44 h-44 ml-36 mt-28 rounded-3xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
