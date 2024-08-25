import Navbar from "@/components/Navbar";
import React from "react";
import PropTypes from "prop-types";
import { Stack, Box } from "@mui/material";
import SideBar from "@/components/ProfileSetting/SideBar";

const SettingLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Stack flexDirection="row" minHeight="100vh">
        <Box
          flex="15"
          sx={{
            position: { xs: "fixed", md: "relative" },
            bottom: "0",
            left: "0",
            borderRight: "2px solid red",
            width: "100%",
          }}
        >
          <SideBar />
        </Box>
        <Box flex="80 ">{children}</Box>
      </Stack>
    </>
  );
};

export default SettingLayout;

SettingLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

// border="2px solid blue"
// position="fixed"
// bottom="0"
// left="0"
// transition="0.9s"
