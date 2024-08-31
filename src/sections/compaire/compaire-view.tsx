import React, { useState } from "react";
import BikeComparisonPage from "./bike -compaire-page";
import ComparisonDialog from "./comparison-dialog";
import CustomButton from "../../components/common-button";
import { IBike } from "../../types/bike";
import { useGetAllBikesQuery } from "../../redux/reducers/bike/bikeApi";

const CompaireView: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedBikes, setSelectedBikes] = useState<IBike[]>([]);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleCompare = (bikes: IBike[]) => {
    setSelectedBikes(bikes);
  };

  const handleReset = () => {
    setSelectedBikes([]);
    setDialogOpen(true);
  };

  const [filters] = useState({
    available: false,
    brand: "",
    model: "",
    name: "",
  });

  const { data } = useGetAllBikesQuery(filters);

  return (
    <div className="min-h-screen bg-gray-100 py-7">
      <div className="max-w-5xl mx-auto px-5 xl:px-0">
        <CustomButton
          title="Select Bikes to Compare"
          onClick={handleOpenDialog}
          className="mb-5"
        />

        {selectedBikes.length === 2 ? (
          <BikeComparisonPage
            selectedBikes={selectedBikes}
            onReset={handleReset}
          />
        ) : (
          <p className="text-lg font-semibold text-green-500">
            Select two bikes to compare.
          </p>
        )}

        {data && data.data && (
          <ComparisonDialog
            bikes={data?.data as IBike[]}
            open={dialogOpen}
            onClose={handleCloseDialog}
            onCompare={handleCompare}
          />
        )}
      </div>
    </div>
  );
};

export default CompaireView;
