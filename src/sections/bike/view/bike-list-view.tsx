import React, { useState } from "react";
import { useGetAllBikesQuery } from "../../../redux/reducers/bike/bikeApi";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  SelectChangeEvent,
} from "@mui/material";
import BikeCard from "./BikeCard"; // Component to display bike info
import ShimmerCard from "./ShimmerCard"; // Component to show shimmer effect for loading state

const BikeListView: React.FC = () => {
  const [filters, setFilters] = useState({
    available: false,
    brand: "",
    model: "",
    name: "",
  });

  const { data, isLoading } = useGetAllBikesQuery(filters);

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
      [name as string]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      available: e.target.checked,
    }));
  };

  return (
    <div>
      {/* Filter Section */}
      <Grid container spacing={2} sx={{ marginBottom: 2 }}>
        {/* Brand Filter */}
        <Grid item xs={12} sm={3}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Brand</InputLabel>
            <Select
              name="brand"
              value={filters.brand}
              onChange={handleSelectChange}
              label="Brand"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="BrandA">Brand A</MenuItem>
              <MenuItem value="BrandB">Brand B</MenuItem>
              <MenuItem value="BrandC">Brand C</MenuItem>
              {/* Add more brands as needed */}
            </Select>
          </FormControl>
        </Grid>

        {/* Model Filter */}
        <Grid item xs={12} sm={3}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Model</InputLabel>
            <Select
              name="model"
              value={filters.model}
              onChange={handleSelectChange}
              label="Model"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="ModelX">Model X</MenuItem>
              <MenuItem value="ModelY">Model Y</MenuItem>
              <MenuItem value="ModelZ">Model Z</MenuItem>
              {/* Add more models as needed */}
            </Select>
          </FormControl>
        </Grid>

        {/* Name Filter */}
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={filters.name}
            onChange={handleInputChange}
            variant="outlined"
          />
        </Grid>

        {/* Availability Filter */}
        <Grid item xs={12} sm={3}>
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
        </Grid>
      </Grid>

      {/* Bike List Section */}
      <Grid container spacing={2}>
        {isLoading ? (
          // Show shimmer cards while loading
          Array.from(new Array(6)).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ShimmerCard />
            </Grid>
          ))
        ) : data && data.length > 0 ? (
          // Show bike cards after loading
          data.map((bike) => (
            <Grid item xs={12} sm={6} md={4} key={bike._id}>
              <BikeCard bike={bike} />
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
