import { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CircularProgress,
} from "@mui/material";
import { useGetSingleBikeQuery } from "../../../redux/reducers/bike/bikeApi";
import useBoolean from "../../../hooks/use-boolean";
import BookNowDialog from "../../booking/book-now-dialog";
import { useAppSelector } from "../../../redux/hooks";
import { useNavigate, useLocation } from "react-router-dom";

interface Props {
  id: string;
}

const BikeDetailView = ({ id }: Props) => {
  const { data, isLoading, error } = useGetSingleBikeQuery(id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const dialog = useBoolean();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  const handleBookNow = () => {
    if (isAuthenticated) {
      dialog.setTrue();
    } else {
      // Redirect to login page with the return path
      navigate(`/login?redirect=${encodeURIComponent(location.pathname)}`);
    }
  };

  useEffect(() => {
    if (data && data?.data?.images?.length > 0) {
      setSelectedImage(data.data.images[0]);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-96">
        <Typography variant="h6" color="error">
          Failed to load bike details.
        </Typography>
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto px-5 max-w-5xl xl:px-0 py-11">
        <Grid container spacing={4}>
          {/* Bike Image and Thumbnails */}
          <Grid item xs={12} md={6}>
            <Card className="shadow-lg p-5">
              {selectedImage && (
                <CardMedia
                  className="h-72 md:h-96 bg-cover bg-center"
                  image={selectedImage}
                  title={data?.data?.name || "Bike Image"}
                />
              )}
              <div className="flex justify-center mt-4 gap-2">
                {data?.data?.images.map((image: string, index: number) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index}`}
                    className={`w-20 h-20 object-contain cursor-pointer border-2 ${
                      selectedImage === image
                        ? "border-sky-800"
                        : "border-gray-300"
                    }`}
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            </Card>
          </Grid>

          {/* Bike Details */}
          <Grid item xs={12} md={6}>
            <Card className="shadow-lg p-5">
              <CardContent>
                <Typography variant="h4" component="h1" className="font-bold">
                  {data?.data?.name}
                </Typography>
                <Typography variant="body1" className="my-4 text-gray-700">
                  {data?.data?.description}
                </Typography>

                <div className="space-y-2">
                  <Typography variant="h6" className="font-semibold">
                    Price per hour:{" "}
                    <span className="font-normal">
                      {data?.data?.pricePerHour}
                    </span>
                  </Typography>
                  <Typography variant="h6" className="font-semibold">
                    CC: <span className="font-normal">{data?.data?.cc}</span>
                  </Typography>
                  <Typography variant="h6" className="font-semibold">
                    Year:{" "}
                    <span className="font-normal">{data?.data?.year}</span>
                  </Typography>
                  <Typography variant="h6" className="font-semibold">
                    Brand:{" "}
                    <span className="font-normal">{data?.data?.brand}</span>
                  </Typography>
                  <Typography variant="h6" className="font-semibold">
                    Availability:{" "}
                    <span
                      className={`font-normal ${
                        data?.data?.isAvailable
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {data?.data?.isAvailable ? "Available" : "Not Available"}
                    </span>
                  </Typography>
                </div>
              </CardContent>

              <CardActions>
                <button
                  className="bg-sky-800 hover:bg-sky-900 text-white font-bold py-2 px-4 rounded"
                  onClick={handleBookNow}
                  disabled={!data?.data?.isAvailable}
                >
                  Book Now
                </button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
      {data?.data && (
        <BookNowDialog dialog={dialog} bikeId={data?.data._id as string} />
      )}
    </>
  );
};

export default BikeDetailView;
