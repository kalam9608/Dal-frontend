import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { MenuOpen } from "@mui/icons-material";
import { CalendarEventData } from "@/data/dashboard";
import PropTypes from "prop-types";
import Breadcrumb from "../common/Breadcrumb";
import MarketIndex from "./MarketIndex";
import DashboardTable from "./DashboardTable";
import QuickAccess from "./QuickAccess";
import PreOpen from "./PreOpen";
import CalendarEvents from "./CalendarEvents";
import SocialMediaCard from "./SocialMediaCard";
import CourseDetial from "./CourseCard";
import FooterLeft from "./FooterLeft";
import MobileGreeting from "./MobileGreeting";

function Dashboard() {
  const theme = useTheme();
  const [isDrawerOpen, SetIsDrawerOpen] = useState(false);
  function toggleDrawer() {
    SetIsDrawerOpen(!isDrawerOpen);
  }
  const breakPointLg = useMediaQuery("(max-width:1320px)");

  return (
    <Box
      sx={{
        padding: "12px",
        background: theme.palette.gradient.main,
      }}
    >
      <Stack
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
      >
        <Breadcrumb
          links={[
            { name: "Home", href: "/home" },
            { name: "Dashboard", href: "/" },
          ]}
        />
        {breakPointLg && (
          <Box
            onClick={() => toggleDrawer()}
            sx={{
              color: theme.palette.primary.contrastText,
            }}
          >
            <MenuOpen />
          </Box>
        )}
      </Stack>
      {/* MOBILE SCREEN GREETINGS */}
      <MobileGreeting userName="Gunjan Arora" />
      <Stack
        flexDirection="row"
        sx={{
          display: { xs: "block", lg: "flex", gap: "16px", marginTop: "30px" },
        }}
      >
        {/* DASHBOARD LEFT SIDE */}

        <DashboardLeft theme={theme} />

        {/* DIVDER OF DASHBOARD */}
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderRight: "2px solid #E1E1EC",
            display: { xs: "none", lg: "block" },
          }}
        />

        {/* RIGHT SIDE OF DASHBOARD */}

        {breakPointLg ? (
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={() => toggleDrawer()}
            sx={{
              "&>div": {
                padding: "16px",
              },
            }}
          >
            <DashboardRight theme={theme} />
          </Drawer>
        ) : (
          <DashboardRight theme={theme} />
        )}
      </Stack>
    </Box>
  );
}

export default Dashboard;

function DashboardRight({ theme = {} }) {
  return (
    <Stack
      sx={{
        margin: "0 auto",
        flex: "30 1",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          border: "1px solid",
          borderRadius: "8px",
          padding: "12px",
          background: theme.palette.primary.whiteToZBlack,
          borderColor: theme.palette.primary.main,
        }}
      >
        <Typography
          color={theme.palette.primary.contrastText}
          sx={{ fontSize: { xs: "20px", xl: "32px" } }}
        >
          Hello! <b>Gunjan</b>
        </Typography>
        <Typography
          color={theme.palette.primary.contrastText}
          sx={{ opacity: "0.7", fontSize: { xs: "13px", lg: "16px" } }}
        >
          to Trading As Profession Data Services
        </Typography>
      </Box>

      <Box marginTop="16px">
        <PreOpen />
      </Box>

      <Box marginTop="16px">
        <Typography
          marginBottom="8px"
          fontSize="16px"
          paddingLeft="12px"
          fontWeight="500"
          color={theme.palette.primary.contrastText}
        >
          Calendar Events
        </Typography>
        <Box my="8px">
          <CalendarEvents country="US" eventInfo={CalendarEventData} />
        </Box>
        <CalendarEvents country="INDIA" eventInfo={CalendarEventData} />
        <Box marginTop="12px">
          <SocialMediaCard />
        </Box>
      </Box>
    </Stack>
  );
}

function DashboardLeft({ theme = {} }) {
  return (
    <Stack
      sx={{
        flex: "70 1",
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: { xs: "-16px", sm: "-24px" },
        }}
      >
        <Typography
          color={theme.palette.primary.contrastText}
          fontWeight={theme.typography.fontWeightMedium}
          fontSize="14px"
        >
          Stocks & Index
        </Typography>

        <Button
          sx={{
            color: theme.palette.primary.main,
            textAlign: "right",
            fontSize: "12px",
            padding: 0,
            textTransform: "capitalize",
          }}
        >
          Edit Instruments
        </Button>
      </Stack>
      {/* LEFT SIDE UPPERSECTION FOR MARKETINDEX */}
      <Box
        sx={{
          overflowX: { xs: "scroll", sm: "auto" },
          paddingBottom: { xs: "10px", sm: "0" },
          paddingLeft: { xs: "6px", sm: "0" },
        }}
      >
        <MarketIndex />
      </Box>

      {/* LEFT SIDE MIDDLE SECTION FOR TABLE AND QUICK ACCESS */}

      <Stack
        sx={{
          flexDirection: {
            xs: "column-reverse",
            sm: "column",
            md: "row",
          },
          gap: "12px",
          marginTop: "16px",
        }}
      >
        <DashboardTable />
        <QuickAccess />
      </Stack>

      {/* ONLY VISIBLE IN MOBILE  */}
      <Box sx={{ display: { sm: "none" } }}>
        <Box my="8px">
          <CalendarEvents country="US" eventInfo={CalendarEventData} />
        </Box>
        <CalendarEvents country="INDIA" eventInfo={CalendarEventData} />
      </Box>

      {/* LEFT SIDE LOWERMIDDLE SECTION FOR COURSES */}

      <Box marginTop="16px">
        <Typography
          marginBottom="4px"
          fontWeight="500"
          fontSize="16px"
          color={theme.palette.primary.contrastText}
        >
          Made For You!
        </Typography>
        <CourseDetial />
      </Box>
      {/* LEFT SIDE FOTTER SECTION */}

      <Box margin="16px 0">
        <FooterLeft />
      </Box>
    </Stack>
  );
}

DashboardLeft.propTypes = {
  theme: PropTypes.object.isRequired,
};
DashboardRight.propTypes = {
  theme: PropTypes.object.isRequired,
};
