import React from "react";
import { useField } from "formik";
import { TextField, FormControl ,Typography } from "@mui/material";

const Inputfiled = ({ name,title, ...otherProps }) => {
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
    <FormControl sx={{ marginTop: 2 }} fullWidth >
      <Typography sx={{ fontSize: "14px" }} fontWeight="500" mb={0.5}>
        {title}
      </Typography>
      <TextField
        size="small"
        variant="outlined"
        {...configText}
        {...field}
        fullWidth
        // sx={{ "& input": { border: "1px solid black", borderRadius: 1 } }}
      />
    </FormControl>
  );
};

export default Inputfiled;
