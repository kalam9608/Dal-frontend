import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { TableData } from "@/data/foi";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectTheme } from "@/store/slices/theme";
import InferenceButton from "../InferenceButton";

function FoiMobileData() {
  const mode = useSelector(selectTheme);
  const StyledBox = styled(Stack)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `;

  return TableData.map((item, index) => {
    return (
      <Box
        key={index}
        sx={{
          padding: "8px",
          border: "1px solid #0AB2EA",
          borderRadius: "6px",
          background: mode === "light" ? "#fff" : "rgba(0, 150, 199, 0.06);",
          marginBottom: "10px",
        }}
      >
        <StyledBox>
          <Text mode={mode} title="Time" value={item.time} />
          <Text
            mode={mode}
            textCenter
            value={
              <InferenceButton
                text={item.inference}
                type={item.inference.toLowerCase().split(" ").join("-")}
              />
            }
          />
          <Text mode={mode} title="Oi Imp" value={item.OiImpact} textEnd />
        </StyledBox>

        <StyledBox
          sx={{
            margin: "14px 0",
          }}
        >
          <Text mode={mode} title="LTP Chg" value={item.ChangeInLtp} />
          <Text
            mode={mode}
            title="Open Int"
            value={item.OpenInterese}
            textCenter
          />
          <Text mode={mode} title="LTP" value={item.LTP} textEnd />
        </StyledBox>

        <StyledBox>
          <Text mode={mode} title="C-OI" value={item.CommulativeOi} />
          <Text mode={mode} title="Vol" value={item.Volume} textCenter />
          <Text mode={mode} title="Lvl Brk" value={item.LevelBreak} textEnd />
        </StyledBox>
      </Box>
    );
  });
}

export default FoiMobileData;

function Text({ title, value, styles, textEnd, textCenter, mode }) {
  return (
    <Box
      sx={{
        flex: "1",
        ...styles,
        display: textEnd && "flex",
        justifyContent: "flex-end",
        textAlign: textCenter && "center",
      }}
      variant="body1"
    >
      {title && (
        <Typography
          variant="body1"
          fontSize="12px"
          fontWeight="500"
          color="#0489B5"
          component="span"
        >
          {title}:
        </Typography>
      )}
      <Typography
        variant="body1"
        fontSize="12px"
        fontWeight="500"
        color={mode === "light" ? "#1B1B1BCC" : "rgba(255, 255, 255, 0.8)"}
        component="span"
        sx={{ ml: "6px" }}
      >
        {value}
      </Typography>
    </Box>
  );
}

Text.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]).isRequired,
  styles: PropTypes.object,
  textEnd: PropTypes.bool,
  textCenter: PropTypes.bool,
};
