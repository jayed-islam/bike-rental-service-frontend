// import BikeCard from "../../layouts/common/bike-card";
// import ShimmerCard from "../../layouts/common/product-shimmer-card";
// import { useGetAvailableBikesQuery } from "../../redux/reducers/bike/bikeApi";

// const HomeFeatureSection = () => {
//   const { data, isFetching } = useGetAvailableBikesQuery();
//   return (
//     <section className="py-12 bg-gray-100 dark:bg-[#060417]">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
//         <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
//           Featured Avalable Bikes
//         </h2>
//         <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
//           {isFetching
//             ? [1, 2, 3, 4, 5, 6, 7, 8].map((item) => <ShimmerCard key={item} />)
//             : data?.data?.map((bike) => (
//                 <BikeCard key={bike._id} bike={bike} />
//               ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeFeatureSection;
import BikeCard from "../../layouts/common/bike-card";
import ShimmerCard from "../../layouts/common/product-shimmer-card";
import { useGetAvailableBikesQuery } from "../../redux/reducers/bike/bikeApi";
import { Typography, Box, Container } from "@mui/material";

const HomeFeatureSection = () => {
  const { data, isFetching, isError } = useGetAvailableBikesQuery();

  return (
    <section className="py-12 bg-gray-100 dark:bg-[#060417]">
      <Container maxWidth="lg">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
          Featured Avalable Bikes
        </h2>

        {isFetching && (
          <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <ShimmerCard key={item} />
            ))}
          </div>
        )}

        {isError ? (
          <Box sx={{ textAlign: "center", py: 8 }}>
            <Typography variant="h5" color="error">
              Something went wrong. Please try again later.
            </Typography>
          </Box>
        ) : data?.data?.length === 0 ? (
          <Box sx={{ textAlign: "center", py: 8 }}>
            <Typography variant="h5" color="textSecondary">
              No bikes found. Please check back later.
            </Typography>
          </Box>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
            {data?.data?.map((bike) => (
              <BikeCard key={bike._id} bike={bike} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default HomeFeatureSection;
