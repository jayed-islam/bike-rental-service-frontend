import { useState } from "react";
import { useGetAllBikesQuery } from "../../../redux/reducers/bike/bikeApi";
import {
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
import { bikeBrands, bikeModels } from "../../../constants";

const BikeAdminListView = () => {
  const createBikeDialog = useBoolean();
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
    <div className="overflow-hidden w-ful">
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

          <div className="flex gap-3">
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

        <div className="flex items-center flex-col lg:flex-row gap-3 mt-3">
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
            className="whitespace-nowrap px-11 py-3 text-white bg-sky-800 hover:bg-sky-900"
          >
            Clear Filter
          </button>
        </div>
      </div>

      <div className="w-full bg-white overflow-hidden">
        {isFetching ? (
          <CircularProgress />
        ) : data && data.data.length === 0 ? (
          <NoDataFound message="no bikes are available." />
        ) : (
          <div>
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
          </div>
        )}
      </div>
      <CreateBikeDialog dialog={createBikeDialog} />
    </div>
  );
};

export default BikeAdminListView;
