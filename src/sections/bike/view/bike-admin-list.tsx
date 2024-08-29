import { useState } from "react";
import { useGetAllBikesQuery } from "../../../redux/reducers/bike/bikeApi";
import {
  Box,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import NoDataFound from "../../../components/no-data/no-data-found";
import BikeAdminListTableRow from "../bike-admin-table-row";
import useBoolean from "../../../hooks/use-boolean";
import CreateBikeDialog from "../bike-create-dailog";

const BikeAdminListView = () => {
  const createBikeDialog = useBoolean();
  const [filters, setFilters] = useState({
    available: false,
    brand: "",
    model: "",
    name: "",
  });

  const { data, isFetching } = useGetAllBikesQuery(filters);

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
    <>
      <div className="bg-white p-3 mb-7">
        <div className="flex items-center flex-col md:flex-row gap-5">
          <TextField
            fullWidth
            name="name"
            value={filters.name}
            onChange={handleInputChange}
            variant="outlined"
            placeholder="Search bike by name..."
          />

          <div className="flex flex-col lg:flex-row gap-3">
            <div className="border py-1.5 px-3">
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
            <button
              onClick={createBikeDialog.setTrue}
              className="whitespace-nowrap px-11 py-3 text-white bg-sky-800 hover:bg-sky-900"
            >
              New Bike
            </button>
          </div>
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
              <MenuItem value="">All</MenuItem>
              <MenuItem value="BrandA">Brand A</MenuItem>
              <MenuItem value="BrandB">Brand B</MenuItem>
              <MenuItem value="BrandC">Brand C</MenuItem>
            </Select>
          </FormControl>
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
            </Select>
          </FormControl>
          <button
            onClick={handleClearAllFilters}
            className="whitespace-nowrap px-11 py-3 text-white bg-sky-800 hover:bg-sky-900"
          >
            Clear Filter
          </button>
        </div>
      </div>

      <Box sx={{ marginTop: 0, bgcolor: "#fff" }}>
        {isFetching ? (
          <CircularProgress />
        ) : data && data.data.length === 0 ? (
          <NoDataFound />
        ) : (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Bike Name</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Brand</TableCell>
                  <TableCell>Model</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.data.map((bike, index) => (
                  <BikeAdminListTableRow bike={bike} key={index} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
      <CreateBikeDialog dialog={createBikeDialog} />
    </>
  );
};

export default BikeAdminListView;
