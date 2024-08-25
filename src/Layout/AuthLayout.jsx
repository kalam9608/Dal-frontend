import React from "react";
import Image from "next/image";
import { Box, Stack } from "@mui/material";
import PropTypes from "prop-types";

function AuthLayout({ children }) {
  return (
    <Stack
      sx={{
        background: "linear-gradient(123.37deg, #FFFFFF 23.2%, #E1E1FC 92.21%)",
      }}
    >
      {/* logo */}
      <Box
        width="50%"
        sx={{
          background: {
            xs: "none",
            md: "rgba(63, 128, 149, 0.2)",
            height: "65px",
          },
        }}
      >
        <Image
          src="/navbar/logoLight.svg"
          width="189"
          height="84"
          alt="logo"
          style={{ marginLeft: "30px ", marginTop: "8px" }}
        />
      </Box>

      {/* content */}
      <Stack
        sx={{
          flexDirection: "row",
          minHeight: "100vh",
          justifyContent: { xs: "center", sm: "start" },
        }}
      >
        {/* image box */}
        <Box
          width="50%"
          paddingTop={5}
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            background: "rgba(63, 128, 149, 0.2)",
          }}
        >
          <Image
            src="/navbar/register.png"
            width="500"
            height="300"
            alt="logo"
            style={{
              maxWidth: "500px",
              height: "auto",
            }}
          />
          <Image
            src="/navbar/textlogo.png"
            width="400"
            height="100"
            alt="logo"
            style={{
              maxWidth: "450px",
              height: "auto",
            }}
          />
        </Box>

        <Box sx={{ flex: "1" }}> {children}</Box>
      </Stack>
    </Stack>
  );
}

export default AuthLayout;
AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
