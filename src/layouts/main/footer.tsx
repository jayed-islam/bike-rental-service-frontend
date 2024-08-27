import logo from "../../assets/logo.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { GoGlobe } from "react-icons/go";
import { IoLogoGithub } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { navConfig, quickLinks } from "./config-navigation";
import { paths } from "../paths";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://jayedulislam.vercel.app",
      icon: <GoGlobe />,
    },
    {
      href: "https://www.linkedin.com/in/jayedulislam/",
      icon: <FaLinkedinIn />,
    },
    {
      href: "https://github.com/jayed-islam",
      icon: <IoLogoGithub />,
    },
  ];
  return (
    <footer className="bg-gray-800">
      <div className="max-w-5xl px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight  xl:text-2xl text-white">
              Subscribe our newsletter to get update.
            </h1>

            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2  border rounded-md bg-gray-900 text-gray-300 border-gray-600 focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
              />

              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-sky-800 rounded-lg hover:bg-sky-900 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">Quick Link</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              {quickLinks.map((item, index) => (
                <NavLink
                  key={index}
                  className="transition-colors duration-300 text-gray-300  hover:underline hover:text-blue-500"
                  to={item.path}
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">Industries</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              {navConfig.map((item, index) => (
                <NavLink
                  key={index}
                  className=" transition-colors duration-300 text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                  to={item.path}
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        <hr className="my-6  md:my-8 border-gray-700" />

        <div className="flex items-center justify-between">
          <NavLink to={paths.root} className="bg-white px-2 py-1 ">
            <img className="w-auto h-7" src={logo} alt="" />
          </NavLink>

          <div className="flex -mx-2">
            {socialLinks.map((item, index) => (
              <NavLink
                key={index}
                to={item.href}
                target="_blank"
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              >
                {item.icon}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
