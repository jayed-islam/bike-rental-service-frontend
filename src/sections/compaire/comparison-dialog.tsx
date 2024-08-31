/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
import { IBike } from "../../types/bike";

interface ComparisonDialogProps {
  bikes: IBike[];
  open: boolean;
  onClose: () => void;
  onCompare: any;
}

const ComparisonDialog: React.FC<ComparisonDialogProps> = ({
  bikes,
  open,
  onClose,
  onCompare,
}) => {
  const [selectedBikes, setSelectedBikes] = useState<IBike[]>([]);

  const handleSelectBike = (bike: IBike) => {
    if (selectedBikes.includes(bike)) {
      setSelectedBikes(selectedBikes.filter((b) => b._id !== bike._id));
    } else if (selectedBikes.length < 2) {
      setSelectedBikes([...selectedBikes, bike]);
    }
  };

  const handleCompare = () => {
    onCompare(selectedBikes);
    setSelectedBikes([]);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Select Two Bikes to Compare</DialogTitle>
      <DialogContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {bikes.map((bike) => (
            <div
              key={bike._id}
              onClick={() => handleSelectBike(bike)}
              className={`border p-4 cursor-pointer ${
                selectedBikes.includes(bike)
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
            >
              <div className="h-40 w-full">
                <img
                  src={bike.images[0]}
                  alt={bike.name}
                  className="w-full h-full object-contain mb-2"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {bike.name}
              </h3>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Button
            variant="contained"
            color="primary"
            onClick={handleCompare}
            disabled={selectedBikes.length !== 2}
            className="w-full"
          >
            Compare Selected Bikes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComparisonDialog;
