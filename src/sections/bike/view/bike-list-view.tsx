import React, { useState } from "react";
import { useGetAllBikesQuery } from "../../../redux/reducers/bike/bikeApi";
import {
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  SelectChangeEvent,
} from "@mui/material";
import ShimmerCard from "../../../layouts/common/product-shimmer-card";
import BikeSmallCard from "../../../layouts/common/bike-small-card";
import { bikeBrands, bikeModels } from "../../../constants";

const BikeListView: React.FC = () => {
  const [filters, setFilters] = useState({
    available: false,
    brand: "",
    model: "",
    name: "",
  });

  const { data, isFetching } = useGetAllBikesQuery(filters);

  const modelsForSelectedBrand = filters.brand ? bikeModels[filters.brand] : [];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      available: e.target.checked,
    }));
  };

  const handleClearAllFilters = () => {
    setFilters({
      available: false,
      brand: "",
      model: "",
      name: "",
    });
  };

  return (
    <div>
      {/* Filter Section */}
      <div className="bg-white p-3 mb-11">
        <div className="flex items-center gap-5">
          <TextField
            fullWidth
            name="name"
            value={filters.name}
            onChange={handleInputChange}
            variant="outlined"
            placeholder="Search bike by name..."
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={filters.available}
                onChange={handleCheckboxChange}
                name="available"
                color="primary"
              />
            }
            label="Available"
          />
        </div>

        <div className="flex items-center gap-3 mt-3">
          <FormControl fullWidth variant="outlined">
            <InputLabel>Brand</InputLabel>
            <Select
              name="brand"
              value={filters.brand}
              onChange={handleSelectChange}
              label="Brand"
            >
              {bikeBrands.map((item) => (
                <MenuItem value={item.value}>{item.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Model</InputLabel>
            <Select
              name="model"
              value={filters.model}
              onChange={handleSelectChange}
              label="Model"
              disabled={!filters.brand}
            >
              {modelsForSelectedBrand?.map((item) => (
                <MenuItem value={item.value}>{item.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <button
            onClick={handleClearAllFilters}
            className="px-11 py-3 text-white bg-sky-800 hover:bg-sky-900"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Bike List Section */}
      <Grid container spacing={2}>
        {isFetching ? (
          // Show shimmer cards while loading
          Array.from(new Array(6)).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ShimmerCard />
            </Grid>
          ))
        ) : data && data.data.length > 0 ? (
          // Show bike cards after loading
          data?.data?.map((bike) => (
            <Grid item xs={12} sm={6} md={4} key={bike._id}>
              <BikeSmallCard bike={bike} />
            </Grid>
          ))
        ) : (
          // Show no bikes available message
          <Grid item xs={12}>
            <Typography variant="h6" textAlign="center">
              No bikes available.
            </Typography>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default BikeListView;
