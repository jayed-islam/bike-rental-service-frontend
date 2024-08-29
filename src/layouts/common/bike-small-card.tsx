import React from "react";
import { NavLink } from "react-router-dom";
import { paths } from "../paths";
import { IBike } from "../../types/bike";
import { formatToBDT } from "../../utils/utils";

interface Props {
  bike: IBike;
}

const BikeSmallCard: React.FC<Props> = ({ bike }) => {
  const { name, _id, brand, images, pricePerHour, model } = bike;

  return (
    <div className="group relative block overflow-hidden border shadow-sm bg-white hover:border-sky-800 transition-all duration-300 hover:shadow-xl">
      <div className="h-44 sm:h-56 flex items-center justify-center transition-all duration-500">
        <img
          src={images[0]}
          alt={name}
          className="transition duration-700 group-hover:scale-105"
        />
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

        <h3 className="line-clamp-1 overflow-ellipsis mt-1 text-sm font-medium text-gray-900">
          <strong className="pr-2">Model:</strong>
          {model}
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

export default BikeSmallCard;
