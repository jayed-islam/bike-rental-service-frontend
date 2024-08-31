import React from "react";
import CustomButton from "../../components/common-button";
import { IBike } from "../../types/bike";

interface BikeComparisonPageProps {
  selectedBikes: IBike[];
  onReset: () => void;
}

const BikeComparisonPage: React.FC<BikeComparisonPageProps> = ({
  selectedBikes,
  onReset,
}) => {
  return (
    <div className=" bg-gray-100">
      <CustomButton
        title="Select new bike"
        onClick={onReset}
        className="mb-5"
      />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Feature</th>
              {selectedBikes.map((bike) => (
                <th key={bike._id} className="px-4 py-2">
                  {bike.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Image</td>
              {selectedBikes.map((bike) => (
                <td key={bike._id} className="border px-4 py-2">
                  <div className="flex items-center gap-3 lg:flex-row flex-col">
                    {bike.images.map((img) => (
                      <img src={img} className="w-28" />
                    ))}
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="border px-4 py-2">Price Per Hour</td>
              {selectedBikes.map((bike) => (
                <td key={bike._id} className="border px-4 py-2">
                  {bike.pricePerHour}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border px-4 py-2">Brand</td>
              {selectedBikes.map((bike) => (
                <td key={bike._id} className="border px-4 py-2">
                  {bike.brand}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border px-4 py-2">Model</td>
              {selectedBikes.map((bike) => (
                <td key={bike._id} className="border px-4 py-2">
                  {bike.model}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border px-4 py-2">Year</td>
              {selectedBikes.map((bike) => (
                <td key={bike._id} className="border px-4 py-2">
                  {bike.year}
                </td>
              ))}
            </tr>
            {/* Add more rows for more features */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BikeComparisonPage;
