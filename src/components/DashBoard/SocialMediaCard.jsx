import React from "react";
import { Link, Stack, Typography, useTheme } from "@mui/material";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

function SocialMediaCard() {
  const theme = useTheme();
  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        backgroundColor: theme.palette.primary.whiteToZBlack,
        borderRadius: "8px",
        padding: "12px",
        border: theme.palette.mode === "dark" ? "1px solid" : "none",
        borderColor: theme.palette.primary.main,
      }}
    >
      <Typography
        fontSize="12px"
        fontWeight="400"
        color={theme.palette.primary.contrastText}
      >
        Connect with us-
      </Typography>
      <Stack
        flexDirection="row"
        gap="18px"
        fontSize="23px"
        color={theme.palette.primary.main}
      >
        <Link target="_blank" href="/">
          <FaTwitterSquare />
        </Link>
        <Link target="_blank" href="/">
          <FaFacebookSquare />
        </Link>
        <Link target="_blank" href="/">
          <FaWhatsappSquare />
        </Link>
        <Link target="_blank" href="/">
          <FaInstagramSquare />
        </Link>
      </Stack>
    </Stack>
  );
}

export default SocialMediaCard;
