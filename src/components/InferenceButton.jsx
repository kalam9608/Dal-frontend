import React from "react";
import { useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { selectTheme } from "@/store/slices/theme";

function convertToInitals(text) {
  const temp = text.split(" ");
  temp.length = 2;
  const initials = temp.map((w) => w.substring(0, 1)).join(".");
  return initials.toUpperCase();
}

function InferenceButton({ text, type }) {
  const mode = useSelector(selectTheme);
  const sm = useMediaQuery("(max-width:600px)");

  const buttonColors = {
    "short-covering": mode === "light" ? "#6389E3" : "#ABC4FF",
    "long-build-up": mode === "light" ? "#64BB78" : "#80ED99",
    "short-build-up": mode === "light" ? "#EC4545" : "#EC4545",
    "long-unwinding": mode === "light" ? "#F1B800" : "#FBEC3E",
  };

  const StyledTypography = styled("span")`
    color: white;
    font-weight: 600;
    text-transform: capitalize;
    border-radius: 6px;
    display: inline-block;
    text-align: center;
  `;

  return (
    <StyledTypography
      sx={{
        fontSize: { xs: "11px", sm: "12px" },
        p: { xs: "3px 10px", sm: "6px 4px" },
        minWidth: { sm: "116px" },
        backgroundColor: {
          xs: "rgba(0, 150, 199, 0.06)",
          sm: buttonColors[type],
        },
        color: {
          xs: buttonColors[type],
          sm: mode === "light" ? "#FFFFFF" : "#1B1B1B",
        },
      }}
      variant="body1"
      type={type}
    >
      {sm ? convertToInitals(text) : text}
    </StyledTypography>
  );
}

InferenceButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default InferenceButton;
