import React from "react";
import { List, ListItem } from "@mui/material";
import { useAppSelector } from "../../redux/hooks";
import { NavLink } from "react-router-dom";

interface RouteItem {
  text: string;
  icon: React.ReactNode;
  link: string;
  roles: string[];
}

interface SidebarProps {
  routes: RouteItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ routes }) => {
  const { user } = useAppSelector((state) => state.auth);
  console.log("user", user);
  return (
    // <Drawer
    //   variant="permanent"
    //   sx={{
    //     width: 240,
    //     flexShrink: 0,
    //     [`& .MuiDrawer-paper`]: {
    //       width: 240,
    //       boxSizing: "border-box",
    //     },
    //   }}
    // >
    //   <Box p={2}>
    //     <Typography variant="h6" gutterBottom>
    //       My Account
    //     </Typography>
    //     <List>
    //       {routes
    //         .filter((route) => route.roles.includes(user!.role!))
    //         .map((route, index) => (
    //           <ListItem button  component="a" href={route.link}>
    //             <ListItemIcon>{route.icon}</ListItemIcon>
    //             <ListItemText primary={route.text} />
    //           </ListItem>
    //         ))}
    //     </List>
    //   </Box>
    // </Drawer>
    <div className="md:w-[15rem] bg-white px-3">
      <h2 className="mt-3 text-xl font-bold mb-5">Dashboard</h2>
      <List className="flex flex-col gap-2">
        {routes
          .filter((route) => route.roles.includes(user ? user!.role! : ""))
          .map((route, index) => (
            <NavLink key={index} to={route.link}>
              <div className="border">
                <ListItem button>
                  <div className="flex items-center gap-3">
                    <h2>{route.icon}</h2>
                    <h2>{route.text}</h2>
                  </div>
                </ListItem>
              </div>
            </NavLink>
          ))}
      </List>
    </div>
  );
};

export default Sidebar;
