import React from "react";
import { FormControl, TextField, Typography } from "@mui/material";
import { useField } from "formik";
import PropTypes from "prop-types";

function Textfield({ name, title, ...otherProps }) {
  const [field, meta] = useField(name);

  const configText = {
    ...field,
    ...otherProps,
    fullWidth: true,
  };

  if (meta && meta.touched && meta.error) {
    configText.error = true;
    configText.helperText = meta.error;
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
            fontWeight: "500",
            border: "1px solid #5F5F5F",
            borderRadius: "5px",
          },
        }}
        {...configText}
      />
    </FormControl>
  );
}

export default Textfield;

Textfield.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  otherProps: PropTypes.object,
};
