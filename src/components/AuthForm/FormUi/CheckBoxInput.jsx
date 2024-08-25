import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  FormGroup,
  Checkbox,
  FormControlLabel,
  styled,
} from "@mui/material";
import { ErrorMessage, useField, useFormikContext } from "formik";

export const ErrMessage = styled("p")`
  font-size: 12px;
  color: red;
  margin-left: 30px;
  line-height: 0px;
`;

function CheckBoxInput({ name, label, ...otherProps }) {
  const { setFieldValue } = useFormikContext();

  const [field, meta] = useField(name);

  const handleChange = (evt) => {
    const { checked } = evt.target;
    setFieldValue(name, checked);
  };
  const configCheckBox = {
    ...field,
    ...otherProps,
    onChange: handleChange,
  };

  const configFormControl = {};

  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
    configFormControl.helperText = meta.error;
  }
  return (
    <FormControl {...configFormControl}>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              size="medium"
              sx={{
                color: "#00B4D8",
                "&.Mui-checked": {
                  color: "#00B4D8",
                },
              }}
              {...configCheckBox}
            />
          }
          label={label}
          sx={{
            "& > span ": {
              fontSize: { xs: "10px", sm: "10px", lg: "12px" },
              lineHeight: { xs: "16px", sm: "16px", lg: "18px" },
            },
          }}
        />
      </FormGroup>
      <ErrorMessage name={name} component={ErrMessage} />
    </FormControl>
  );
}

export default CheckBoxInput;

CheckBoxInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  otherProps: PropTypes.object,
};
