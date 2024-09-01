import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { GoGlobe } from "react-icons/go";
import { NavLink } from "react-router-dom";

const HeroHeader = () => {
  const socialLinks = [
    {
      href: "https://jayedulislam.vercel.app",
      icon: (
        <GoGlobe className="group-hover:scale-110 transition-all duration-150" />
      ),
    },
    {
      href: "https://www.linkedin.com/in/jayedulislam/",
      icon: (
        <FaLinkedinIn className="group-hover:scale-110 transition-all duration-150" />
      ),
    },
    {
      href: "https://github.com/jayed-islam",
      icon: (
        <IoLogoGithub className="group-hover:scale-110 transition-all duration-150" />
      ),
    },
  ];

  return (
    <div className="w-full bg-black py-2">
      <div className="flex items-center justify-center sm:justify-between px-5 sm:px-20 md:px-11 lg:px-5 xl:px-0 max-w-5xl mx-auto">
        <div className="sm:flex items-center gap-9 text-white h-full px-5 hidden">
          <div className="flex items-center gap-2 cursor-pointer text-sm md:text-[16px]">
            <div className="p-1 bg-sky-800 rounded">
              <MdOutlineMail />
            </div>
            <h2>fastbike@gmail.com</h2>
          </div>
          <div className="items-center gap-2 hidden sm:flex cursor-pointer">
            <div className="p-1 bg-sky-800 rounded">
              <IoCallOutline />
            </div>
            <h2>+8801954057920</h2>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          {socialLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.href}
              className="w-7 h-7 rounded hover:bg-sky-700 text-white flex items-center justify-center group"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
