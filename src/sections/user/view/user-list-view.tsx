import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from "@mui/material";
import { useGetAllUserQuery } from "../../../redux/reducers/user/userApi";
import NoDataFound from "../../../components/no-data/no-data-found";
import UserTableRow from "../user-table-row";

const UserListView: React.FC = () => {
  const { data, isFetching } = useGetAllUserQuery();

  return (
    <div>
      <h2 className="text-lg font-semibold pb-5">All Users</h2>
      {isFetching ? (
        <CircularProgress />
      ) : data && data.data.length === 0 ? (
        <NoDataFound />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.data.map((user, index) => (
                <UserTableRow user={user} key={index} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default UserListView;
