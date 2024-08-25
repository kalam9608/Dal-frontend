import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectTheme } from "@/store/slices/theme";

function StaticBar({ title, value, styles, dropdown, dropDownMargin }) {
  const dropdownValue =
    dropdown && dropdown.length > 0 ? dropdown[0].value : "";
  const [selectedValue, setSelectedValue] = useState(dropdownValue);
  const mode = useSelector(selectTheme);
  const theme = useTheme();

  return (
    <Box
      sx={{
        textTransform: "capitalize",
        alignItems: "center",
        color: theme.palette.primary.contrastText,
        width: "100%",
        padding: { xs: "4px", sm: "0" },
        display: "flex",
        borderColor: "rgba(0,0,0,0.3) !important",
        ...styles,
        justifyContent: "center",
      }}
    >
      {title && (
        <Typography
          sx={{
            fontSize: {
              xs: "10px",
              sm: "12px",
              lg: "13px",
              color: theme.palette.primary.contrastText,
            },
          }}
          fontWeight="500"
          pr="12px"
          component="span"
        >
          {title}
        </Typography>
      )}

      {value && (
        <Typography
          component="span"
          fontWeight="500"
          sx={{ fontSize: { xs: "10px", lg: "14px" } }}
          color={mode === "light" ? "rgba(27, 27, 27, 0.5)" : "#8A8A8A"}
        >
          {value}
        </Typography>
      )}

      {dropdown && (
        <FormControl
          variant="standard"
          sx={{ marginTop: dropDownMargin || "3px" }}
        >
          <Select
            value={selectedValue}
            sx={{
              fontSize: { xs: "10px", lg: "12px" },
              color: mode === "light" ? "rgba(27, 27, 27, 0.5)" : "#8A8A8A",
              fontWeight: "400",
              "& .MuiSelect-select": { p: "0" },
            }}
            label="time"
          >
            {dropdown.map((item, index) => {
              return (
                <MenuItem
                  sx={{
                    fontSize: {
                      xs: "10px",
                      lg: "12px",
                      py: "0",
                    },
                    textAlign: "center",
                    "& .MuiMenuItem": { p: "0" },
                  }}
                  key={index}
                  value={item.value}
                  onClick={() => {
                    setSelectedValue(item.value);
                  }}
                >
                  {item.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      )}
    </Box>
  );
}

export default StaticBar;

StaticBar.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  dropdown: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ),
  dropDownMargin: PropTypes.string,
  styles: PropTypes.object,
};
