import { Typography, Box, useTheme, Stack, Button } from "@mui/material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { AccessTime, CalendarMonth } from "@mui/icons-material";

function PreOpen() {
  const theme = useTheme();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = format(currentDate, "d MMM yyyy EEE");
  const formattedTime = format(currentTime, "h:mm:ss a");

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        borderRadius: "8px",
        color: theme.palette.common.white,
        padding: "12px 16px",
      }}
    >
      <Stack
        flexDirection="row"
        sx={{ display: { xs: "none", lg: "flex", alignItems: "center" } }}
      >
        <AccessTime />
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            marginLeft: "10px",
            textTransform: "uppercase",
            paddingTop: "2px",
          }}
        >
          {formattedTime}
        </Typography>
      </Stack>

      <Stack flexDirection="row" marginTop="10px" alignItems="center">
        <CalendarMonth />
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            marginLeft: "10px",
            marginTop: "2px",
          }}
        >
          {formattedDate}
        </Typography>
      </Stack>

      <div style={{ marginTop: "16px" }}>
        <Typography sx={{ fontSize: "10px" }}>Market status -</Typography>
        <Stack flexDirection="row" alignItems="center">
          <Button
            component="span"
            startIcon={<RadioButtonCheckedIcon sx={{ color: "#FFAA00" }} />}
            sx={{
              color: theme.palette.common.black,
              fontSize: { xs: "12px", lg: "16px" },
              fontWeight: "500",
              marginTop: "2px",
              background: "white",
              textTransform: "capitalize",
              cursor: "default",
              "&:hover": {
                background: "white",
              },
            }}
          >
            Pre-Open
          </Button>
          <Typography
            component="span"
            sx={{
              marginLeft: "16px",
            }}
          >
            Happy New Year
          </Typography>
        </Stack>
      </div>
    </Box>
  );
}

export default PreOpen;
