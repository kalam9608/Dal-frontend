import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { format } from "date-fns";

function MobileGreeting({ userName }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = format(currentDate, "d MMM yyyy EEE");

  return (
    <Stack
      sx={{
        flexDirection: "row",
        display: { xs: "flex", sm: "none" },
        justifyContent: "space-between",
      }}
    >
      <Typography
        sx={{
          fontSize: "16px",
          color: (theme) => theme.palette.primary.contrastText,
        }}
      >
        Hello <br />
        <b>{userName}</b>
      </Typography>
      <Box textAlign="right">
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            color: (theme) => theme.palette.primary.contrastText,
          }}
        >
          {formattedDate}
        </Typography>
        <Button
          startIcon={<RadioButtonCheckedIcon sx={{ color: "#FFAA00" }} />}
          sx={{
            color: (theme) => theme.palette.common.black,
            backgroundColor: (theme) => theme.palette.common.white,
            fontSize: "12px",
            fontWeight: "500",
            marginTop: "2px",
            textTransform: "capitalize",
          }}
        >
          Pre-Open
        </Button>
      </Box>
    </Stack>
  );
}

export default MobileGreeting;
MobileGreeting.propTypes = {
  userName: PropTypes.string.isRequired,
};
