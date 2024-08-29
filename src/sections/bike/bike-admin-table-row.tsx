import { IconButton, TableCell, TableRow } from "@mui/material";
import { IBike } from "../../types/bike";
import { Delete, Edit } from "@mui/icons-material";
import UpdateBikeDialog from "./bike-update-dialog";
import useBoolean from "../../hooks/use-boolean";
import ConfirmationDialog from "../../components/confirmation-dialog";
import { useDeleteBikeMutation } from "../../redux/reducers/bike/bikeApi";
import toast from "react-hot-toast";

interface Props {
  bike: IBike;
}

const BikeAdminListTableRow = ({ bike }: Props) => {
  const updateBikeDialog = useBoolean();
  const deleteBikeDialog = useBoolean();

  const [deleteBike, { isLoading }] = useDeleteBikeMutation();

  const handleDelete = async () => {
    try {
      const res = await deleteBike(bike._id as string).unwrap();
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };
  return (
    <>
      <TableRow>
        <TableCell>{bike.name}</TableCell>
        <TableCell>
          <div className="w-20 h-11">
            <img
              src={bike.images[0]}
              alt=""
              className="object-contain h-full w-full"
            />
          </div>
        </TableCell>
        <TableCell>{bike.brand}</TableCell>
        <TableCell>{bike.model}</TableCell>
        <TableCell>
          <div className="flex gap-2">
            <IconButton onClick={updateBikeDialog.setTrue}>
              <Edit />
            </IconButton>
            <IconButton onClick={deleteBikeDialog.setTrue}>
              <Delete />
            </IconButton>
          </div>
        </TableCell>
      </TableRow>
      <UpdateBikeDialog dialog={updateBikeDialog} initialValues={bike} />
      <ConfirmationDialog
        dialog={deleteBikeDialog}
        onConfirm={handleDelete}
        isLoading={isLoading}
      />
    </>
  );
};

export default BikeAdminListTableRow;
