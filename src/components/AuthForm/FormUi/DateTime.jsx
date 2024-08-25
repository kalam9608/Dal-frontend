import React from "react";
import PropTypes from "prop-types";
import { FormControl, TextField, Typography } from "@mui/material";
import { useField } from "formik";

function DateTime({ name, title, ...otherProps }) {
  const [field, meta] = useField(name);
  const dateConfig = {
    ...field,
    ...otherProps,
    type: "date",
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
  };
  if (meta && meta.touched && meta.error) {
    dateConfig.error = true;
    dateConfig.helperText = meta.error;
  }
  return (
    <FormControl fullWidth>
      <Typography sx={{ fontSize: "14px" }} fontWeight="500" mb={0.5}>
        {title}
      </Typography>
      <TextField
        sx={{
          "& .mui-style-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
            padding: { xs: "10px", lg: "11px" },
            fontSize: { xs: "12px", lg: "14px" },
            fontWeight: "400",
            border: "1px solid #5F5F5F",
            borderRadius: "6px",
          },
        }}
        {...dateConfig}
      />
    </FormControl>
  );
}

export default DateTime;

DateTime.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  otherProps: PropTypes.object,
};
