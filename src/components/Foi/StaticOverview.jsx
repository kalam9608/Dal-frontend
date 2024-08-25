import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import formatCurrency from "@/utils/formatCurrency";

function StaticOverview({ title1, value1, title2, value2 }) {
  const InnerStack = styled("div")({
    width: "100%",
    gap: "8px",
    color: "#fff",
    borderRadius: "2px",
    flex: "1",
    alignItems: "center",
    flexDirection: "row",
    display: "flex",
  });

  const TextWrap = styled("div")({
    flex: "1",
    padding: "5px 6px",
    backgroundColor: "rgba(252, 252, 254, 0.2)",
    borderRadius: "2px",
    fontSize: "12px",
    p: "5px 6px",
    fontWeight: "400",
    minWidth: "128px",
  });
  return (
    <Box
      sx={{
        bgcolor: "#00B4D8",
        width: "100%",
        padding: "14px 13px",
        borderRadius: "2px",
      }}
    >
      <InnerStack>
        <TextWrap>{title1}</TextWrap>
        <TextWrap style={{ textAlign: "right" }}>
          {formatCurrency({
            value: value1,
          })}
        </TextWrap>
      </InnerStack>

      <InnerStack style={{ marginTop: "14px" }}>
        <TextWrap>{title2}</TextWrap>
        <TextWrap style={{ textAlign: "right" }}>
          {formatCurrency({
            value: value2,
          })}
        </TextWrap>
      </InnerStack>
    </Box>
  );
}

export default StaticOverview;

StaticOverview.propTypes = {
  title1: PropTypes.string.isRequired,
  value1: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title2: PropTypes.string.isRequired,
  value2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
