import { IconButton, TableCell, TableRow } from "@mui/material";

import { ICoupon } from "../../types/coupon";
import { Edit } from "@mui/icons-material";
import useBoolean from "../../hooks/use-boolean";
import UpdateCouponDialog from "./coupon-edit-dialog";

interface Props {
  coupon: ICoupon;
}

const CouponRow = ({ coupon }: Props) => {
  const dialog = useBoolean();
  return (
    <>
      <TableRow>
        <TableCell>{coupon.code}</TableCell>
        <TableCell>{coupon.discountAmount}%</TableCell>
        <TableCell>{coupon.discountType}</TableCell>
        <TableCell>
          {new Date(coupon.expirationDate).toLocaleDateString()}
        </TableCell>
        <TableCell>{coupon.isActive ? "Active" : "Inactive"}</TableCell>
        <TableCell>
          <IconButton onClick={dialog.setTrue}>
            <Edit />
          </IconButton>
        </TableCell>
      </TableRow>
      <UpdateCouponDialog dialog={dialog} coupon={coupon} />
    </>
  );
};

export default CouponRow;
