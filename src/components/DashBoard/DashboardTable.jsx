import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "@/store/slices/theme";
import { TableBodyData } from "@/data/dashboard";
import SortIcon from "../../../public/tableSortIcons.svg";
import ChangePill from "./ChangePill";

const HeadCell = styled(TableCell)`
  font-weight: 500;
  text-transform: uppercase;
  padding: 12px 16px;
`;
const BodyCell = styled(TableCell)`
  font-weight: 400;
  text-transform: uppercase;
  padding: 12px 16px;
  border: none;
  color: ${(props) => props.theme.palette.primary.contrastText};
`;

const headData = ["symbol", "Ltp", "change", "volume"];

function DashboardTable() {
  const theme = useTheme();
  const mode = useSelector(selectTheme);
  return (
    <TableContainer
      sx={{
        border: "1px solid",
        borderColor: theme.palette.primary.main,
        borderRadius: "8px",
        width: "100%",
      }}
    >
      <Table
        sx={{
          backgroundColor:
            mode === "light"
              ? theme.palette.primary.oppositeContrast
              : "#0A0A0A",
        }}
      >
        <TableHead>
          <TableRow>
            {headData.map((item, index) => {
              return (
                <HeadCell
                  sx={{
                    color: theme.palette.primary.contrastText,
                    fontSize: { xs: "12px", md: "16px" },
                  }}
                  key={index}
                >
                  <Box sx={{ display: "flex" }}>
                    {item}
                    <Button
                      sx={{
                        padding: "0",
                      }}
                    >
                      <Image
                        src={SortIcon}
                        height={24}
                        width={24}
                        style={{
                          filter: mode === "light" ? "blur(0)" : "invert(1)",
                        }}
                      />
                    </Button>
                  </Box>
                </HeadCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {TableBodyData.map((item, index) => {
            return (
              <>
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor:
                      mode === "light"
                        ? "rgba(230, 230, 230, 0.3)"
                        : "rgba(27, 27, 27, 0.4)",
                  }}
                >
                  <BodyCell
                    sx={{
                      fontSize: { xs: "10px", md: "14px" },
                    }}
                  >
                    {item.symbol}
                  </BodyCell>
                  <BodyCell sx={{ fontSize: { xs: "10px", md: "14px" } }}>
                    {item.ltp}
                  </BodyCell>
                  <BodyCell sx={{ fontSize: { xs: "10px", md: "14px" } }}>
                    <ChangePill
                      percentSideWay
                      change={item.change.value}
                      percentValue={item.change.percentChange}
                    />
                  </BodyCell>
                  <BodyCell sx={{ fontSize: { xs: "10px", md: "14px" } }}>
                    {item.volume}
                  </BodyCell>
                </TableRow>

                <TableRow>
                  <TableCell
                    sx={{ height: "12px", padding: "0", borderBottom: "0" }}
                  />
                </TableRow>
              </>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DashboardTable;
