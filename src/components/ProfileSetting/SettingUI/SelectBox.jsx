import React from "react";
import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { useField, useFormikContext } from "formik";

const SelectBox = ({ name, options, title, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (event) => {
    const { value } = event.target;
    setFieldValue(name, value);
  };
  const configText = {
    ...field,
    ...otherProps,
    fullWidth: true,
    onchange: handleChange,
    // variant:"filled"
  };

  if (meta && meta.touched && meta.error) {
    configText.error = true;
    configText.helperText = meta.error;
  }

  return (
    <FormControl sx={{ marginTop: 2 }} fullWidth>
      <Typography sx={{ fontSize: "14px" }} fontWeight="500" mb={0.5}>
        {title}
      </Typography>
      <Select
        IconComponent={ArrowDropDown}
        {...configText}
        size="small"
        fullWidth
      >
        {options.map((item, index) => (
          <MenuItem key={index} value={item.value} sx={{ fontSize: "10px" }}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectBox;
