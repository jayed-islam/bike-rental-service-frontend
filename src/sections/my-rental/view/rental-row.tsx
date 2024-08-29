import { Button, Chip, TableCell, TableRow } from "@mui/material";

import { IBooking } from "../../../types/rental";
import useBoolean from "../../../hooks/use-boolean";
import RentalReturnedDialog from "../rental-return-dialog";

const getStatusChipColor = (status: string) => {
  switch (status) {
    case "paid":
      return { color: "#4CAF50", backgroundColor: "#E8F5E9" };
    case "unpaid":
      return { color: "#F44336", backgroundColor: "#FFEBEE" };
    default:
      return { color: "#9E9E9E", backgroundColor: "#F5F5F5" };
  }
};

interface Props {
  rental: IBooking;
}

const RentalRow = ({ rental }: Props) => {
  const dialog = useBoolean();

  //   const [deleteUser, { isLoading }] = useDeleteUserMutation();

  //   const handleDelete = async () => {
  //     try {
  //       const res = await deleteUser(user.email as string).unwrap();
  //       if (res.success) {
  //         toast.success(res.message);
  //         deleteUserDialog.setFalse();
  //       } else {
  //         toast.error(res.message);
  //       }
  //       // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //     } catch (error: any) {
  //       toast.error(error.data.message);
  //     }
  //   };
  return (
    <>
      <TableRow>
        <TableCell>{rental.bikeId.name}</TableCell>
        <TableCell> {new Date(rental.startTime).toLocaleString()}</TableCell>
        <TableCell>
          {rental.returnTime
            ? new Date(rental.returnTime).toLocaleString()
            : "N/A"}
        </TableCell>
        <TableCell>
          {rental.totalCost === 0 ? "N/A" : rental.totalCost}
        </TableCell>
        <TableCell>
          <Chip
            label={rental.status}
            style={getStatusChipColor(rental.status)}
          />
        </TableCell>
        <TableCell align="right">
          <Button size="small" variant="outlined" onClick={dialog.setTrue}>
            Calculate
          </Button>
        </TableCell>
      </TableRow>
      <RentalReturnedDialog dialog={dialog} id={rental._id} />
    </>
  );
};

export default RentalRow;
