import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import { useAppSelector } from "../../redux/hooks";
import { NavLink, useLocation } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { BooleanState } from "../../types/utils";

interface RouteItem {
  text: string;
  icon: React.ReactNode;
  link: string;
  roles: string[];
}

interface SidebarProps {
  routes: RouteItem[];
  state: BooleanState;
  className: string;
}

const Sidebar: React.FC<SidebarProps> = ({ routes, state, className }) => {
  const { user } = useAppSelector((state) => state.auth);
  const location = useLocation(); // Get the current route location

  return (
    <div className={`${className}`}>
      {/* Drawer for mobile view */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={state.value}
        onClose={state.toggle}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        <Box p={2}>
          <IconButton onClick={state.toggle} sx={{ mb: 2 }}>
            <CloseIcon />
          </IconButton>
          <h3 className="dark:text-white">Dashboard</h3>
          <List className="flex flex-col gap-2">
            {routes
              .filter((route) => route.roles.includes(user ? user.role! : ""))
              .map((route, index) => (
                <div
                  key={index}
                  className={`border ${
                    location.pathname === route.link ? "bg-gray-100" : ""
                  }`}
                  onClick={state.setFalse}
                >
                  <NavLink to={route.link}>
                    <ListItem button>
                      <ListItemIcon>{route.icon}</ListItemIcon>
                      <ListItemText primary={route.text} />
                    </ListItem>
                  </NavLink>
                </div>
              ))}
          </List>
        </Box>
      </Drawer>

      {/* Sidebar for large screens */}
      <div className="hidden lg:block w-[241px] flex-shrink-0 bg-white dark:bg-gray-800">
        <Box p={2}>
          <Typography variant="h6" gutterBottom>
            Dashboard
          </Typography>
          <List className="flex flex-col gap-2">
            {routes
              .filter((route) => route.roles.includes(user ? user.role! : ""))
              .map((route, index) => (
                <div
                  key={index}
                  className={`border ${
                    location.pathname === route.link ? "bg-gray-100" : ""
                  }`}
                  onClick={state.setFalse}
                >
                  <NavLink key={index} to={route.link}>
                    <ListItem button>
                      <ListItemIcon>{route.icon}</ListItemIcon>
                      <ListItemText primary={route.text} />
                    </ListItem>
                  </NavLink>
                </div>
              ))}
          </List>
        </Box>
      </div>
    </div>
  );
};

export default Sidebar;
