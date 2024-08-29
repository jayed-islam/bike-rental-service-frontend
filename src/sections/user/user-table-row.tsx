import { IconButton, TableCell, TableRow } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

import { IUser } from "../../types/user";
import useBoolean from "../../hooks/use-boolean";
import { useDeleteUserMutation } from "../../redux/reducers/user/userApi";
import toast from "react-hot-toast";
import ConfirmationDialog from "../../components/confirmation-dialog";
import UpdateUserRoleDialog from "./update-user-role-dialog";

interface Props {
  user: IUser;
}

const UserTableRow = ({ user }: Props) => {
  const updateUserRoleDialog = useBoolean();
  const deleteUserDialog = useBoolean();

  const [deleteUser, { isLoading }] = useDeleteUserMutation();

  const handleDelete = async () => {
    try {
      const res = await deleteUser(user.email as string).unwrap();
      if (res.success) {
        toast.success(res.message);
        deleteUserDialog.setFalse();
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
      <TableRow key={user._id}>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>{user.role}</TableCell>
        <TableCell align="right">
          <IconButton onClick={updateUserRoleDialog.setTrue}>
            <Edit />
          </IconButton>
          <IconButton color="error" onClick={deleteUserDialog.setTrue}>
            <Delete />
          </IconButton>
        </TableCell>
      </TableRow>

      <ConfirmationDialog
        dialog={deleteUserDialog}
        onConfirm={handleDelete}
        isLoading={isLoading}
        message="Are you sure want to delete the user ?"
      />
      <UpdateUserRoleDialog dialog={updateUserRoleDialog} user={user} />
    </>
  );
};

export default UserTableRow;
