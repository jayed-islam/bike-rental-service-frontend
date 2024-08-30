import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { paths } from "../paths";
import { IBike } from "../../types/bike";
import { formatToBDT } from "../../utils/utils";

interface Props {
  bike: IBike;
}

const BikeCard: React.FC<Props> = ({ bike }) => {
  const { name, _id, brand, images, pricePerHour } = bike;
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className="group relative block overflow-hidden border shadow-sm bg-white hover:scale-105 transition-all duration-300 hover:shadow-xl">
      <div className="h-56 sm:h-72 flex items-center justify-center transition-all duration-500">
        <img
          src={selectedImage}
          alt={name}
          className="transition duration-700 group-hover:scale-105"
        />
      </div>

      {/* Thumbnail images */}
      <div className="flex justify-center space-x-2 py-3">
        {images.map((image, index) => (
          <div
            key={index}
            className={`h-[3rem] w-16 border flex items-center justify-center cursor-pointer ${
              selectedImage === image ? "border-sky-800" : "border-gray-300"
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>

      <div className="relative border border-gray-100 bg-white p-6">
        <div className="flex items-center justify-between">
          <div className="whitespace-nowrap bg-sky-800 px-3 py-1.5 text-xs font-medium text-white">
            {brand}
          </div>
          <p className="text-lg text-gray-700 font-bold">
            PPH: {formatToBDT(pricePerHour)}
          </p>
        </div>
        <h3 className="line-clamp-1 overflow-ellipsis mt-4 text-lg font-medium text-gray-900">
          {name}
        </h3>

        <div className="mt-4">
          <NavLink to={`${paths.bike.root}/${_id}`}>
            <button className="block w-full border border-sky-800 hover:bg-sky-800 p-4 text-sm font-semibold transition hover:scale-105 hover:text-white ">
              View Details
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BikeCard;
