import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { bikeBrands, bikeModels } from "../../constants";
import { paths } from "../../layouts/paths";

const HomeHeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const navigate = useNavigate();

  const modelsForSelectedBrand = selectedBrand ? bikeModels[selectedBrand] : [];

  const handleSearch = () => {
    // Construct query parameters
    const query = new URLSearchParams();
    if (searchQuery) query.append("query", searchQuery);
    if (selectedBrand) query.append("brand", selectedBrand);
    if (selectedModel) query.append("model", selectedModel);

    // Navigate to the bikes page with query parameters
    navigate(`${paths.allBike}?${query.toString()}`);
  };

  return (
    <Box className="w-full h-[81vh] overflow-hidden relative">
      <video
        className="w-full h-full object-cover"
        src="/assets/videos/banner.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <Box className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
        <Box className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-11 items-end justify-between w-full px-5 xl:px-0">
          <Box className="flex items-start flex-col p-5 bg-black bg-opacity-40 w-full md:w-[25rem]">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Find Your Perfect Bike
            </h2>

            {/* Search Bar */}
            <input
              placeholder="Search for a bike..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="outline-none px-5 py-3 bg-black bg-opacity-45 text-gray-400 w-full mt-5"
            />

            <Box
              display="flex"
              gap={2}
              mt={2}
              sx={{
                width: 1,
              }}
            >
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel
                  sx={{
                    color: "white",
                    fontSize: "0.8rem",
                  }}
                >
                  Choose Brand
                </InputLabel>
                <Select
                  size="small"
                  fullWidth
                  label="Choose Brand"
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="outline-none bg-black bg-opacity-45 text-gray-400 w-full"
                  sx={{
                    color: "white",
                    ".MuiSelect-icon": {
                      color: "white",
                    },
                    fontSize: "0.8rem",
                  }}
                  inputProps={{
                    style: {
                      color: "white",
                      fontSize: "0.8rem",
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    <em>None</em>
                  </MenuItem>
                  {bikeBrands.map((item) => (
                    <MenuItem value={item.value}>{item.label}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel
                  sx={{
                    color: "white",
                    fontSize: "0.8rem",
                  }}
                >
                  Choose Model
                </InputLabel>
                <Select
                  size="small"
                  fullWidth
                  label="Choose Model"
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="outline-none bg-black bg-opacity-45 text-gray-400 w-full"
                  sx={{
                    color: "white",
                    ".MuiSelect-icon": {
                      color: "white",
                    },
                    fontSize: "0.8rem",
                  }}
                  inputProps={{
                    style: {
                      color: "white",
                      fontSize: "0.8rem",
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    <em>None</em>
                  </MenuItem>
                  {modelsForSelectedBrand?.map((item) => (
                    <MenuItem value={item.value}>{item.label}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            {/* Call to Action Button */}
            <button
              onClick={handleSearch}
              className="bg-sky-800 px-5 py-2 w-full mt-5 text-white hover:bg-sky-900 transition-all duration-500 text-sm font-semibold"
            >
              Search Bike
            </button>
          </Box>
          <Box className="flex items-start flex-col p-5 bg-black bg-opacity-40 w-full md:w-[21rem]">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Compaire Bike
            </h2>

            <Link to={paths.compaire} className="w-full">
              <button className="bg-sky-800 px-5 py-2 w-full mt-5 text-white hover:bg-sky-900 transition-all duration-500 text-sm font-semibold">
                Go to Compaire
              </button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeHeroSection;
