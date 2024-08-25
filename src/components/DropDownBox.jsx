import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectTheme } from "@/store/slices/theme";
import { ArrowDropDown } from "@mui/icons-material";

function DropDownBox({ title, options }) {
  const mode = useSelector(selectTheme);

  const defaultValue = options.length > 0 ? options[0].value : "";
  const [value, setValue] = useState(defaultValue);

  return (
    <FormControl>
      <Typography
        sx={{
          fontSize: { xs: "10px", sm: "12px" },
          fontWeight: "500",
          color: "#0AB2EA",
          "& .MuiSelect-icon": {
            display: "flex",
            background: "red",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        {title}:
      </Typography>
      <Select
        IconComponent={ArrowDropDown}
        value={value}
        defaultValue={defaultValue}
        sx={{
          padding: "10px 18px",
          fontSize: "12px",
          width: "100%",
          fontWeight: "500",
          "& .MuiSelect-select": { padding: "0" },
          color: mode === "light" ? "rgba(0, 0, 0, 0.6)" : "#FFFFFF",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "1.6px solid #5F5F5F",
            borderRadius: "0",
          },
        }}
      >
        {options.map((item, index) => {
          return (
            <MenuItem
              onClick={() => {
                setValue(item.value);
              }}
              key={index}
              value={item.value}
              sx={{ fontSize: "10px" }}
            >
              {item.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default DropDownBox;

DropDownBox.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
};
