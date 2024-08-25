import React, { useState } from "react";
import Image from "next/image";
import { KeyboardArrowUpOutlined, Refresh } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Stack,
  Switch,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useSelector } from "react-redux";
import { selectTheme } from "@/store/slices/theme";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { StaticOverviewData } from "@/data/foi";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { styled } from "@mui/material/styles";
import DropDownBox from "../DropDownBox";
import FoiTable from "./FoiTable";
import StaticBar from "./StaticBar";
import FoiMobileData from "./FoiMobileData";
import StaticOverview from "./StaticOverview";
import Arrow from "../../../public/foi/ArrowRight.svg";
import Breadcrumb from "../common/Breadcrumb";

function Foi() {
  const mode = useSelector(selectTheme);
  const theme = useTheme();
  // TO ACCESS THE WIDTH OF WINDOW
  const md = useMediaQuery("(max-width:900px)");
  const minSm = useMediaQuery("(min-width:600px)");

  // Switch Between Live Data and Historical Data
  const [liveData, setLiveData] = useState(false);
  const [dateValue, setDateValue] = useState(new Date());

  // For Using Date Values

  // useEffect(() => {
  //   const date = dateValue.getDate();
  //   const month = dateValue.getMonth() + 1;
  //   const year = dateValue.getFullYear();
  // }, [dateValue]);

  const StyledSwitch = styled(Switch)({
    width: 34,
    height: 16,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px) ",
        "& + .MuiSwitch-track": {
          backgroundColor: "#ffaa00",
          opacity: 1,
        },
      },
    },
    "& .MuiSwitch-track": {
      borderRadius: "18px",
      backgroundColor: "#64bb78",
      opacity: 1,
    },
  });

  const [staticOverviewVisible, setStaticOverviewVisible] = useState(true);
  const [collapse, setCollapse] = useState(false);
  const [toolbarVisible, setToolbarVisible] = useState(true);

  // BREADCRUMBS (FOI SECONDARY NAVBAR) BUTTONS STYLES
  const ButtonStyles = {
    bgcolor: md ? "transparent" : theme.palette.primary.main,
    color: md ? theme.palette.primary.main : "white",
    textTransform: "initial",
    p: md ? "0" : "4px  28px",
    fontSize: { xs: "10px", lg: "12px" },
    lineHeight: "18x",
    fontWeight: "500",
    borderRadius: "4px",
    boxShadow: md ? "none" : "2px 2px 4px rgba(0, 0, 0, 0.25)",
    ":hover": { bgcolor: md ? "transparent" : theme.palette.primary.main },
  };

  return (
    <Box
      p="12px"
      m="0 auto"
      sx={{
        background: theme.palette.gradient.main,
        minHeight: "100vh",
      }}
    >
      {/* BREADCRUMB OR FOI NAVBAR */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <Breadcrumb
          links={[
            { name: "Dashboard", href: "/" },
            { name: "Future", href: "/future" },
            { name: "Future Open Intrest", href: "/foi" },
          ]}
        />

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            sx={{
              ...ButtonStyles,
              marginRight: "18px",
              display: {
                xs: "none",
                sm: "flex",
                lg: collapse ? "flex" : "none",
              },
            }}
            endIcon={
              collapse ? (
                <KeyboardArrowDownOutlinedIcon
                  style={{ color: md ? "black" : "white" }}
                />
              ) : (
                <KeyboardArrowUpOutlined
                  style={{
                    // eslint-disable-next-line no-nested-ternary
                    color: md
                      ? mode === "light"
                        ? "black"
                        : "white"
                      : "white",
                  }}
                />
              )
            }
            onClick={() => setCollapse(!collapse)}
          >
            {collapse ? "Expand" : "Collapse"}
          </Button>
          <Button
            sx={{
              ...ButtonStyles,
              display: { xs: "none", sm: "flex" },
            }}
            endIcon={
              <Refresh
                style={{
                  // eslint-disable-next-line no-nested-ternary
                  color: md ? (mode === "light" ? "black" : "white") : "white",
                }}
              />
            }
          >
            Refresh
          </Button>

          {/* SWITCH */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ml: { xs: "8px", sm: "22px", md: "33px" },
            }}
          >
            <Typography
              fontSize={{ xs: "8px", sm: "10px", md: "12px" }}
              lineHeight="14px"
              fontWeight="500"
              textAlign="right"
            >
              Live Data
            </Typography>
            <StyledSwitch
              sx={{
                mx: { xs: "8px", md: "14px" },
              }}
              label="switch"
              onChange={() => {
                setLiveData(!liveData);
              }}
              checked={!liveData}
              icon={
                <Box
                  sx={{
                    background: theme.palette.common.white,
                    p: "2px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    position: "relative",
                    left: "1px",
                    top: "-1.3px",
                  }}
                >
                  <Image
                    src={Arrow}
                    alt="arrow"
                    height={10}
                    width={10}
                    style={{
                      transform: "rotate(180deg)",
                    }}
                  />
                </Box>
              }
              checkedIcon={
                <Box
                  sx={{
                    background: theme.palette.common.white,
                    p: "2px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    position: "relative",
                    top: "-1.3px",
                  }}
                >
                  <Image src={Arrow} alt="arrow" height={10} width={10} />
                </Box>
              }
            />

            <Typography
              fontSize={{ xs: "8px", sm: "10px", md: "12px" }}
              fontWeight="500"
              lineHeight="14px"
            >
              Historical Data
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* DROPDOWN BOXS (4 DROPDOWN INSTRUMENTS) */}

      <Box sx={{ display: toolbarVisible ? "block" : "none" }}>
        <Box
          sx={{
            display: collapse ? "none" : "grid",
            gridTemplateColumns: {
              xs: "repeat(2,1fr)",
              sm: "repeat(4,1fr)",
              lg: "repeat(4,2.75fr) 1fr",
            },
            alignItems: "center",
            gap: "14px",
            justifyContent: "space-between",
            mb: "16px ",
          }}
        >
          <DropDownBox
            title="Name"
            options={[
              {
                name: "NIFTY",
                value: "NIFTY",
              },

              {
                name: "FUTURE",
                value: "FUTURE",
              },
              {
                name: "DUMMY",
                value: "DUMMY",
              },
              {
                name: "DUMMY2",
                value: "DUMMY2",
              },
            ]}
          />
          <DropDownBox
            title="Expiry"
            options={[
              {
                name: "Current Month",
                value: "Current Month",
              },
              {
                name: "Next Month",
                value: "Next Month",
              },
              {
                name: "Far Month",
                value: "Far Month",
              },
            ]}
          />

          <FormControl disabled={liveData}>
            <Typography
              sx={{
                fontSize: { xs: "10px", sm: "12px" },
                fontWeight: "500",
                color: theme.palette.primary.main,
              }}
            >
              Date:
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                disabled={liveData}
                value={dateValue}
                disableFuture
                maxDate={new Date()}
                format="E d MMM yyyy"
                onChange={(date) => setDateValue(date)}
                sx={{
                  width: "100%",
                  "& input": {
                    padding: "10px 18px",
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "palette.text.primary",
                  },
                  "& input::placeholder": {
                    color: "rgba(0, 0, 0, 0.6)",
                    opacity: "1",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "1.6px solid #5F5F5F",
                    borderRadius: "0",
                  },
                }}
              />
            </LocalizationProvider>
          </FormControl>

          <DropDownBox
            title="Refresh Rate"
            options={[
              {
                name: "10s",
                value: 10,
              },

              {
                name: "15s",
                value: 15,
              },
              {
                name: "30s",
                value: 30,
              },
              {
                name: "1m",
                value: 60,
              },
              {
                name: "2m",
                value: 120,
              },
              {
                name: "3m",
                value: 180,
              },
              {
                name: "1D",
                value: 86400,
              },
            ]}
          />

          <Button
            onClick={() => setCollapse(!collapse)}
            sx={{
              ...ButtonStyles,
              width: "100%",
              maxWidth: "110px",
              display: { xs: "none", lg: "flex" },
              marginTop: "15px",
            }}
            endIcon={<KeyboardArrowUpOutlined />}
          >
            Collapse
          </Button>
        </Box>
      </Box>

      {/* STATIC BAR (SPOT PRICE BAR) */}
      <Box
        sx={{
          mb: { xs: "4px", lg: "16px" },
          display: { xs: toolbarVisible ? "block" : "none", sm: "block" },
        }}
      >
        <Stack
          // Divider between elements (only for minSm or larger screens)
          divider={minSm ? <Divider orientation="vertical" flexItem /> : ""}
          // Styles
          direction="row"
          variant="text"
          sx={{
            display: { xs: "grid", sm: "flex" },
            gridTemplateColumns: "repeat(3,1fr)",
            backgroundColor: theme.palette.background.secondary,
            padding: "5px 6px",
            borderRadius: "2px",
            "& > div:nth-of-type(6) + hr": {
              display: { xs: "none", lg: "initial" },
            },
          }}
        >
          <StaticBar
            title="Spot Price"
            value="42371"
            styles={{
              borderRight: { xs: "1px solid", sm: "none" },
              borderBottom: { xs: "1px solid", sm: "none" },
            }}
          />
          <StaticBar
            title="Open"
            value="42171"
            styles={{
              borderRight: { xs: "1px solid", sm: "none" },
              borderBottom: { xs: "1px solid", sm: "none" },
            }}
          />
          <StaticBar
            title="Day High"
            value="42453"
            styles={{
              borderRight: { lg: "1px solid" },
              borderBottom: { xs: "1px solid", sm: "none" },
            }}
          />

          <StaticBar
            title="Day Low"
            value="42371"
            styles={{
              borderRight: { xs: "1px solid", sm: "none" },
            }}
          />
          <StaticBar
            title="Close"
            value="42371"
            styles={{
              borderRight: { xs: "1px solid", sm: "none" },
            }}
          />
          <StaticBar
            title={md ? "Prev. Close" : "Previous Close"}
            value="42082"
            styles={{ borderRight: { xs: "none", sm: "none", lg: "initial" } }}
          />

          <StaticBar
            title="Time Interval"
            dropdown={[
              {
                name: "1m",
                value: 60,
              },
              {
                name: "3m",
                value: 180,
              },
              {
                name: "5m",
                value: 300,
              },
              {
                name: "10m",
                value: 600,
              },
              {
                name: "15m",
                value: 900,
              },
            ]}
            styles={{
              display: {
                xs: "none",
                lg: "initial",
              },
              textAlign: "center",
            }}
          />
        </Stack>
      </Box>

      {/* STATIC DETIALS DROPDOWN FOR TABLET  */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex", lg: "none" },
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: "2px",

          "& button": {
            color: theme.palette.primary.main,
            fontSize: { xs: "10px", sm: "12px", lg: "12px" },
            fontWeight: "600",
            textTransform: "capitalize",
            lineHeight: "14px",
          },
          "& svg": {
            color: mode === "light" ? "black" : "white",
          },
        }}
      >
        <Box sx={{ flex: "1" }}>
          <Button
            onClick={() => {
              setStaticOverviewVisible(!staticOverviewVisible);
            }}
            variant="text"
            endIcon={
              staticOverviewVisible ? (
                <KeyboardArrowUpOutlined />
              ) : (
                <KeyboardArrowDownOutlinedIcon />
              )
            }
          >
            {staticOverviewVisible ? "Hide" : "Show"} Static Details{" "}
          </Button>
        </Box>
        <Box sx={{ flex: "1", display: "flex", justifyContent: "flex-end" }}>
          <StaticBar
            title="Time Interval"
            dropdown={[
              {
                name: "1m",
                value: 60,
              },
              {
                name: "3m",
                value: 180,
              },
              {
                name: "5m",
                value: 300,
              },
              {
                name: "10m",
                value: 600,
              },
              {
                name: "15m",
                value: 900,
              },
            ]}
            styles={{ width: "auto" }}
            dropDownMargin="-4px"
          />
        </Box>
      </Box>

      {/* STATIC OVERVIEW (BLUE BOXS) */}
      <Box
        sx={{
          maxWidth: "100%",
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            display: {
              xs: "none",
              sm: staticOverviewVisible ? "flex" : "none",
            },
            alignItems: "center",
            justifyContent: "space-between",
            gap: "22px",
            maxWidth: "100%",
            width: "100% ",
            minWidth: "900px",
            paddingBottom: "12px",
          }}
        >
          <StaticOverview
            title1="Current Inference"
            value1={StaticOverviewData["Current Inference"]}
            title2="Open Oi"
            value2={StaticOverviewData["Open Oi"]}
          />
          <StaticOverview
            title1="Oi Impact"
            value1={StaticOverviewData["Oi Impact"]}
            title2="Closing Oi"
            value2={StaticOverviewData["Closing Oi"]}
          />
          <StaticOverview
            title1="LTP Change"
            value1={StaticOverviewData["LTP Change"]}
            title2="Open Oi - Close Oi"
            value2={
              StaticOverviewData["Open Oi"] - StaticOverviewData["Closing Oi"]
            }
          />

          <StaticOverview
            title1="Last Traded Price"
            value1={StaticOverviewData["Last Traded Price"]}
            title2="Cummulative Oi"
            value2={StaticOverviewData["Cummulative Oi"]}
          />
        </Box>
      </Box>

      {/* TOOLBAR DROPDOWN FOR MOBILE SCREEN */}
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: "4px",
        }}
      >
        <Box sx={{ flex: "1" }}>
          <Button
            onClick={() => {
              setToolbarVisible(!toolbarVisible);
            }}
            variant="text"
            sx={{
              color: theme.palette.primary.main,
              fontSize: { xs: "10px", lg: "12px" },
              fontWeight: "600",
              textTransform: "capitalize",
              lineHeight: "14px",

              "& svg": {
                color: mode === "light" ? "black" : "white",
              },
            }}
            endIcon={
              toolbarVisible ? (
                <KeyboardArrowUpOutlined />
              ) : (
                <KeyboardArrowDownOutlinedIcon />
              )
            }
          >
            {toolbarVisible ? "Hide" : "Show"} Toolbar{" "}
          </Button>
        </Box>
        <Box sx={{ flex: "1", display: "flex", justifyContent: "flex-end" }}>
          <StaticBar
            title="Time Interval"
            dropdown={[
              {
                name: "1m",
                value: 60,
              },
              {
                name: "3m",
                value: 180,
              },
              {
                name: "5m",
                value: 300,
              },
              {
                name: "10m",
                value: 600,
              },
              {
                name: "15m",
                value: 900,
              },
            ]}
            dropDownMargin="-4px"
            styles={{ width: "auto" }}
          />
        </Box>
      </Box>
      {/* TABLE FOR DESKTOP AND TABLET */}

      <Box sx={{ mt: "10px", display: { xs: "none", sm: "block" } }}>
        <FoiTable />
      </Box>

      {/* TABLE DATA FOR MOBILE SCREEN */}
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <FoiMobileData />
      </Box>
    </Box>
  );
}

export default Foi;
