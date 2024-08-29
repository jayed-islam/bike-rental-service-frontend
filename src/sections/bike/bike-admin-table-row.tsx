import { IconButton, TableCell, TableRow } from "@mui/material";
import { IBike } from "../../types/bike";
import { Delete, Edit } from "@mui/icons-material";
import UpdateBikeDialog from "./bike-update-dialog";
import useBoolean from "../../hooks/use-boolean";

interface Props {
  bike: IBike;
}

const BikeAdminListTableRow = ({ bike }: Props) => {
  const updateBikeDialog = useBoolean();
  const deleteBikeDialog = useBoolean();
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
            <IconButton>
              <Delete />
            </IconButton>
          </div>
        </TableCell>
      </TableRow>
      <UpdateBikeDialog dialog={updateBikeDialog} initialValues={bike} />
    </>
  );
};

export default BikeAdminListTableRow;
