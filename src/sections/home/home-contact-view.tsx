import toast from "react-hot-toast";
import { FaLinkedinIn } from "react-icons/fa6";
import { GoGlobe } from "react-icons/go";
import { IoLogoGithub } from "react-icons/io5";
import { NavLink } from "react-router-dom";

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

const HomeContactView = () => {
  const handleSubmit = () => {
    toast.success("Thanks for your submission!!!");
  };
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="md:pr-8">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            We'd Love to Hear From You
          </h2>
          <p className="text-gray-600 mb-10">
            Whether you have questions, feedback, or just want to say hello,
            please fill out the form below and we'll get back to you as soon as
            possible.
          </p>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            <form
              // Add onSubmit handler if needed
              className="p-8 grid grid-cols-1 gap-8"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Your message"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src="https://via.placeholder.com/500x500" // Replace with your image URL
            alt="Contact Us"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeContactView;
