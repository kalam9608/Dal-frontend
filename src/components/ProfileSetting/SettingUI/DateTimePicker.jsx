import React from "react";
import { TextField } from "@mui/material";

const DateTimePicker = () => {
  const dateConfig = {
    type: "date",
    variant: "outlined",
    fullwidth: "true",
    InputLabelProps: {
      shrink: true,
    },
  };

  return <TextField {...dateConfig} />;
};

export default DateTimePicker;
