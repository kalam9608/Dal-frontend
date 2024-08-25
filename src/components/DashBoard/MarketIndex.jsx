import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import formatCurrency from "@/utils/formatCurrency";
import { NiftyCardData } from "@/data/dashboard";
import ChangePill from "./ChangePill";

function MarketIndex() {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        border: { xs: "none", md: "1px solid" },
        borderColor: `${theme.palette.primary.main} !important`,
        borderRadius: "8px",
        background: {
          sm: "none",
          md: theme.palette.primary.whiteToZBlack,
        },
        gap: { xs: "14px", md: "0" },
        justifyContent: { md: "space-evenly" },
        justifyItems: "stretch",
      }}
      flexDirection="row"
      divider={
        <Divider
          flexItem
          orientation="vertical"
          sx={{
            borderRight: "1px Solid gray",
            display: { xs: "none", md: "block" },
          }}
        />
      }
    >
      {NiftyCardData.map((item, index) => {
        return (
          <Stack
            key={index}
            sx={{
              background: {
                xs: theme.palette.primary.whiteToZBlack,
                md: "none",
              },
              border: { xs: "1px solid", md: "none" },
              flexDirection: { md: "row" },
              borderColor: `${theme.palette.primary.main} !important`,
              borderRadius: "8px",
              justifyContent: "space-between",
              width: "inherit",
              flex: "1 0",
              minWidth: "120px",
            }}
          >
            <Stack
              padding="12px"
              sx={{
                flexDirection: { xs: "column", sm: "row", md: "column" },
                textAlign: { xs: "center", sm: "initial" },
                justifyContent: { xs: "space-between" },
              }}
            >
              <Stack>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      md: "16px",
                      xl: "20px",
                    },
                  }}
                  fontWeight="500"
                  color={theme.palette.primary.contrastText}
                >
                  {item.name}
                </Typography>

                <Typography
                  marginTop="8px"
                  fontWeight="400"
                  sx={{ fontSize: { xs: "14px", md: "16px" } }}
                  color={theme.palette.text.secondary}
                >
                  {item.price}
                </Typography>
              </Stack>
              <ChangePill
                change={item.change}
                percentValue={item.percentValue}
              />
            </Stack>
            {/* DIVIDER */}
            <Box
              sx={{
                height: { xs: "1px", md: "70px" },
                width: { xs: "100%", md: "1px" },
                margin: "auto 0",
                background: "rgba(132, 132, 132, 0.3)",
                display: { xs: "none", sm: "flex" },
              }}
            />
            {/* POI COI */}
            <Stack
              padding="12px"
              sx={{
                display: { xs: "none", sm: "flex" },
                flexWrap: "wrap",
                flexDirection: { xs: "row", md: "column" },
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box mb="6px">
                <Typography color={theme.palette.primary.contrastText}>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: { xs: "10px", sm: "12px", md: "16px" },
                      color: "#38b000",
                    }}
                  >
                    COi
                  </Typography>

                  <Typography
                    component="span"
                    sx={{
                      fontSize: { xs: "10px", sm: "12px", md: "16px" },
                      marginLeft: "8px",
                    }}
                  >
                    {formatCurrency({ value: item.coi })}
                  </Typography>
                </Typography>

                <Typography
                  marginTop="8px"
                  color={theme.palette.primary.contrastText}
                >
                  <Typography
                    sx={{ fontSize: { xs: "10px", sm: "12px", md: "16px" } }}
                    component="span"
                    color={theme.palette.error.main}
                  >
                    POi
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "10px", sm: "12px", md: "16px" } }}
                    component="span"
                    marginLeft="8px"
                  >
                    {formatCurrency({ value: item.poi })}
                  </Typography>
                </Typography>
              </Box>

              <Button
                variant="contained"
                href={item.href}
                disableElevation
                sx={{
                  borderRadius: "20px",
                  background: theme.palette.background.secondary,
                  textTransform: "capitalize",
                  fontSize: { xs: "8px", md: "12px" },
                  marginTop: { xs: "0", md: "14px" },
                  padding: { xs: "4px 6px", md: "6px" },
                  minWidth: { xs: "auto", md: "117px" },

                  ":hover": {
                    color: "white",
                  },
                }}
              >
                Detialed View
              </Button>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
}

export default MarketIndex;

// function NiftyCard({
//   name,
//   coi,
//   poi,
//   href,
//   change,
//   price,
//   percentValue,
//   theme,
// }) {
//   return (

//   );
// }

// export { NiftyCard };

// NiftyCard.propTypes = {
//   name: PropTypes.string.isRequired,
//   coi: PropTypes.number.isRequired,
//   poi: PropTypes.number.isRequired,
//   href: PropTypes.string.isRequired,
//   change: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   percentValue: PropTypes.number.isRequired,
// };
