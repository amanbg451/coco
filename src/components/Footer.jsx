import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import privacypdf from "../pdf/privacy.pdf";
const Footer = () => {
  return (
    <>
      <footer className="bg-transparent rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} className="h-10" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Swetoh
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link to="about" className="hover:underline me-4 md:me-6 cursor-pointer">
                  About
                </Link>
              </li>
              <li>
                <a href={privacypdf} target="_blank" className="hover:underline me-4 md:me-6 cursor-pointer">
                  Privacy Policy
                </a>
              </li>
              <li>
                <Link to="contact" className="hover:underline cursor-pointer">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="/" className="hover:underline">
              Swetoh
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
