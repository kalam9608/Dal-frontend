import { Stack, Typography, useTheme } from "@mui/material";
import React from "react";

function FooterLeft() {
  const theme = useTheme();
  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        backgroundColor: theme.palette.primary.whiteToZBlack,
        padding: "16px",
        border: theme.palette.mode === "dark" ? "1px solid" : "none",
        borderRadius: "8px",
        borderColor: theme.palette.primary.main,
      }}
    >
      <Typography
        color={theme.palette.primary.contrastText}
        fontWeight="400"
        sx={{ fontSize: { xs: "10px", md: "14px" } }}
      >
        &copy; copyright 2023
      </Typography>
      <Typography
        sx={{ fontSize: { xs: "10px", md: "14px" } }}
        fontWeight="400"
        color={theme.palette.primary.contrastText}
      >
        Trading As Profession Data Services{" "}
      </Typography>
    </Stack>
  );
}

export default FooterLeft;
