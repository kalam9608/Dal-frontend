import React from "react";
import { List, ListItem, Link } from "@mui/material";

const SideBar = () => {
  return (
    <List>
      <ListItem>
        <Link
          href="/settings/profile"
          underline="hover"
          sx={{ fontWeight: "600", fontSize: "12px", color: "black" }}
        >
          My Profile
        </Link>
      </ListItem>
    </List>
  );
};

export default SideBar;
