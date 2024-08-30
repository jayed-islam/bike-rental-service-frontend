// // import toast from "react-hot-toast";
// // import { FaLinkedinIn } from "react-icons/fa6";
// // import { GoGlobe } from "react-icons/go";
// // import { IoLogoGithub } from "react-icons/io5";
// // import { NavLink } from "react-router-dom";

// // const socialLinks = [
// //   {
// //     href: "https://jayedulislam.vercel.app",
// //     icon: <GoGlobe />,
// //   },
// //   {
// //     href: "https://www.linkedin.com/in/jayedulislam/",
// //     icon: <FaLinkedinIn />,
// //   },
// //   {
// //     href: "https://github.com/jayed-islam",
// //     icon: <IoLogoGithub />,
// //   },
// // ];

// const HomeContactView = () => {
//   // const handleSubmit = () => {
//   //   toast.success("Thanks for your submission!!!");
//   // };
//   return (
//     <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         <div className="md:pr-8">
//           <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
//             We'd Love to Hear From You
//           </h2>
//           <p className="text-gray-600 mb-10">
//             Whether you have questions, feedback, or just want to say hello,
//             please fill out the form below and we'll get back to you as soon as
//             possible.
//           </p>
//           <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
//             <form
//               // Add onSubmit handler if needed
//               className="p-8 grid grid-cols-1 gap-8"
//             >
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-gray-700 font-medium mb-2"
//                 >
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   placeholder="Enter your name"
//                   className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-gray-700 font-medium mb-2"
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   placeholder="Enter your email"
//                   className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-gray-700 font-medium mb-2"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows={6}
//                   placeholder="Your message"
//                   className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//                 ></textarea>
//               </div>
//               <div className="flex justify-center">
//                 <button
//                   type="submit"
//                   className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//         <div className="hidden md:block">
//           <img
//             src="https://via.placeholder.com/500x500" // Replace with your image URL
//             alt="Contact Us"
//             className="w-full h-auto rounded-lg shadow-md"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeContactView;
import { Box, Typography, TextField, Button } from "@mui/material";
import CustomButton from "../../components/common-button";

const HomeContactView = () => {
  // const handleSubmit = () => {
  //   toast.success("Thanks for your submission!!!");
  // };

  return (
    <div className="py-7 bg-gray-100">
      <div className="max-w-5xl mx-auto px-5 xl:px-0">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            We'd Love to Hear From You
          </h2>
          <p className="text-gray-600 mb-8 sm:mb-10 md:mb-12 text-center max-w-lg mx-auto">
            Whether you have questions, feedback, or just want to say hello,
            please fill out the form below and we'll get back to you as soon as
            possible.
          </p>

          <div className="flex items-start gap-5 w-full flex-col-reverse lg:flex-row">
            <div className="p-5 bg-white flex flex-col gap-3 w-full">
              <TextField
                id="name"
                label="Full Name"
                variant="outlined"
                placeholder="Enter your name"
                fullWidth
                InputProps={{
                  sx: {
                    borderRadius: 1,
                    "&:focus": {
                      borderColor: "blue.500",
                      boxShadow: "0 0 0 2px rgba(66, 133, 244, 0.2)",
                    },
                  },
                }}
              />
              <TextField
                id="email"
                label="Email Address"
                variant="outlined"
                type="email"
                placeholder="Enter your email"
                fullWidth
                InputProps={{
                  sx: {
                    borderRadius: 1,
                    "&:focus": {
                      borderColor: "blue.500",
                      boxShadow: "0 0 0 2px rgba(66, 133, 244, 0.2)",
                    },
                  },
                }}
              />
              <TextField
                id="message"
                label="Message"
                variant="outlined"
                multiline
                rows={6}
                placeholder="Your message"
                fullWidth
                InputProps={{
                  sx: {
                    borderRadius: 1,
                    "&:focus": {
                      borderColor: "blue.500",
                      boxShadow: "0 0 0 2px rgba(66, 133, 244, 0.2)",
                    },
                  },
                }}
              />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CustomButton title="Send Message" />
              </Box>
            </div>
            <div className="hidden lg:block w-full">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZNFPnOxxs4-2WSMWyTpeAQ5f46VV15B6Vlw&s"
                alt="Contact Us"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContactView;
