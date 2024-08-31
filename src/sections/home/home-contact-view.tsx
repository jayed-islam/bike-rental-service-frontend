import { Box, TextField } from "@mui/material";
import CustomButton from "../../components/common-button";

const HomeContactView = () => {
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
