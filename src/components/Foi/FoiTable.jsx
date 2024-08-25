import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  useTheme,
} from "@mui/material";
import React from "react";
import formatCurrency from "@/utils/formatCurrency";
import { TableData } from "@/data/foi";
import InferenceButton from "../InferenceButton";

function FoiTable() {
  const theme = useTheme();
  const HeadCell = styled(TableCell)`
    color: white;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    min-width: 120px;
    padding: 15px 0;
  `;
  const BodyCell = styled(TableCell)`
    color: ${theme.palette.primary.contrastText};
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    min-width: 120px;
    padding: 10px 0;
  `;

  return (
    <TableContainer
      sx={{
        border: "1px solid ",
        borderColor: theme.palette.primary.main,
        borderRadius: "4px",
        height: "460px",
        "&::-webkit-scrollbar": {
          width: "8px",
          height: "8px",
          backgroundColor: "#d2d2d2",
        },
        // Other browsers
        scrollbarWidth: "thin",
        scrollbarColor: "transparent",
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: " rgba(132, 132, 132, 0.6)",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#505050",
        },
      }}
    >
      <Table
        sx={{
          "& th": {
            color: theme.palette.primary.oppositeContrast,
          },
        }}
        // stickyHeader
      >
        <TableHead
          sx={{
            backgroundColor: theme.palette.primary.main,
            position: "sticky",
            top: "0",
            boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.5)",
            marginBottom: "10px",
          }}
        >
          <TableRow sx={{ textAlign: "center" }}>
            <HeadCell>Time</HeadCell>
            <HeadCell>Inference</HeadCell>
            <HeadCell>Oi Impact</HeadCell>
            <HeadCell>Change in LTP</HeadCell>
            <HeadCell>LTP</HeadCell>
            <HeadCell>Open Interest</HeadCell>
            <HeadCell>Commulative Oi</HeadCell>
            <HeadCell>Volume</HeadCell>
            <HeadCell>Level Break</HeadCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ paddingTop: "10px" }}>
          {TableData.map((item, index) => {
            return (
              <TableRow
                key={index}
                sx={{
                  textAlign: "center",
                  padding: "10px 0",
                  backgroundColor:
                    index % 2 === 0 ? "rgba(0, 150, 199, 0.06)" : "transparent",
                  ":hover": { bgcolor: "rgba(0, 150, 199, 0.3)" },
                }}
              >
                <BodyCell>{item.time}</BodyCell>
                <BodyCell>
                  {" "}
                  <InferenceButton
                    text={item.inference}
                    type={item.inference.toLowerCase().split(" ").join("-")}
                  />{" "}
                </BodyCell>
                <BodyCell>
                  {formatCurrency({
                    value: item.OiImpact,
                  })}
                </BodyCell>
                <BodyCell>{item.ChangeInLtp}</BodyCell>
                <BodyCell>{item.LTP}</BodyCell>
                <BodyCell>
                  {formatCurrency({
                    value: item.OpenInterese,
                  })}
                </BodyCell>
                <BodyCell>
                  {formatCurrency({
                    value: item.CommulativeOi,
                  })}
                </BodyCell>
                <BodyCell>
                  {formatCurrency({
                    value: item.Volume,
                  })}
                </BodyCell>
                <BodyCell>{item.LevelBreak}</BodyCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default FoiTable;
