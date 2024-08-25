import React from "react";
import PropTypes from "prop-types";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
} from "@mui/material";
import { useField } from "formik";

function RadioButtonGroup({ label, ...otherProps }) {
  const [filed] = useField(otherProps);

  return (
    <FormControl>
      <RadioGroup name="use-radio-group">
        <FormControlLabel
          sx={{ "& > span ": { fontSize: "14px" } }}
          {...filed}
          control={
            <Radio
              size="medium"
              sx={{
                color: "#00B4D8",
                "&.Mui-checked": {
                  color: "#00B4D8",
                },
              }}
            />
          }
          label={label}
        />
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtonGroup;

RadioButtonGroup.propTypes = {
  label: PropTypes.string,
  otherProps: PropTypes.object,
};
