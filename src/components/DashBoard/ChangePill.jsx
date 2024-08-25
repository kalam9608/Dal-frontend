import React from "react";
import { PlayArrow } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import PropTypes from "prop-types";

function ChangePill({ change, percentValue, percentSideWay }) {
  return (
    <Box color={change > 0 ? "#38B000 " : "#D62727"} sx={{ width: "content" }}>
      <Button
        component="div"
        sx={{
          alignItems: "center",
          cursor: "default",
          color: change > 0 ? "#38B000 " : "#D62727",
          padding: "0",
          gap: "2px",
          "&:hover": {
            background: "none",
          },
          "&:focus": {
            background: "none",
          },
        }}
        startIcon={
          <PlayArrow
            sx={{
              transform: change > 0 ? "rotate(270deg)" : "rotate(90deg)",
              position: "relative",
            }}
          />
        }
      >
        <Typography pr="2px" sx={{ fontSize: { xs: "14px", md: "16px" } }}>
          {change}
        </Typography>
        {percentSideWay && (
          <Typography sx={{ fontSize: "12px", pl: "8px" }}>
            ({percentValue}%)
          </Typography>
        )}
      </Button>
      {percentSideWay ? (
        ""
      ) : (
        <Typography sx={{ fontSize: "12px", pl: "8px" }}>
          ({percentValue}%)
        </Typography>
      )}
    </Box>
  );
}

export default ChangePill;
ChangePill.propTypes = {
  change: PropTypes.number.isRequired,
  percentValue: PropTypes.number.isRequired,
  percentSideWay: PropTypes.bool,
};
