import React from "react";
import PropTypes from "prop-types";
import { Typography, Box, useTheme, Stack } from "@mui/material";

function CalendarEvents({ country, eventInfo }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        borderRadius: "8px",
        overflow: "hidden",
        border: "1px solid",
        borderColor:
          theme.palette.mode === "dark"
            ? theme.palette.primary.main
            : theme.palette.grey[300],
      }}
    >
      {/* HEADER FOR CALENDAR */}
      <Box
        sx={{
          backgroundColor: theme.palette.background.secondary,
          padding: "8px 16px",
        }}
      >
        <Typography color={theme.palette.primary.contrastText} fontSize="14px">
          {country} Economic Events
        </Typography>
      </Box>
      {/* EVENTS LIST GOES HERE */}
      <Stack
        sx={{
          background: theme.palette.primary.whiteToZBlack,
          padding: "16px",
          paddingBottom: "0",
        }}
      >
        {eventInfo.map((item, index) => {
          return (
            <Stack
              key={index}
              sx={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "12px",
              }}
            >
              <Typography
                color={theme.palette.text.secondary}
                fontSize="12px"
                fontWeight="500"
              >
                {item.eventName.length >= 16
                  ? `${item.eventName.slice(0, 16)}...`
                  : item.eventName}
              </Typography>
              <Stack flexDirection="row">
                <Typography fontSize="12px" fontWeight="400" mx="12px">
                  {item.eventTime}
                </Typography>
                <Typography
                  fontSize="12px"
                  fontWeight="600"
                  color={theme.palette.primary.contrastText}
                >
                  {item.eventDate}
                </Typography>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
}

export default CalendarEvents;
CalendarEvents.propTypes = {
  eventInfo: PropTypes.array.isRequired,
  country: PropTypes.string.isRequired,
};
