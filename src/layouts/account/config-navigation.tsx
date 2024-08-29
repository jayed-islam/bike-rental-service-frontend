import {
  PersonOutlineOutlined,
  ListAltOutlined,
  BikeScooterOutlined,
} from "@mui/icons-material";
import { USER_ROLE } from "../../types/user";
import { paths } from "../paths";
import { FaUser } from "react-icons/fa6";

export const routes = [
  {
    text: "Profile",
    icon: <PersonOutlineOutlined />,
    link: paths.account.root,
    roles: [USER_ROLE.ADMIN, USER_ROLE.USER],
  },
  {
    text: "Bike List",
    icon: <ListAltOutlined />,
    link: paths.account.bikeList,
    roles: [USER_ROLE.USER],
  },
  {
    text: "Bike List",
    icon: <ListAltOutlined />,
    link: paths.account.bikeAdmin,
    roles: [USER_ROLE.ADMIN],
  },
  {
    text: "My Rentals",
    icon: <BikeScooterOutlined />,
    link: paths.account.myRentals,
    roles: [USER_ROLE.ADMIN, USER_ROLE.USER],
  },
  {
    text: "All Users",
    icon: <FaUser />,
    link: paths.account.users,
    roles: [USER_ROLE.ADMIN],
  },
];
