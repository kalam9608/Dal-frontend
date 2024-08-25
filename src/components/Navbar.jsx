import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useMediaQuery from "@mui/material/useMediaQuery";
import PropTypes from "prop-types";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleTheme } from "@/store/slices/theme";

function Navbar() {
  const sm = useMediaQuery("(max-width:600px)");
  const [hamBurgerAnchor, setHamBurgetAnchor] = useState(null);
  const [profileAnchor, setProfileAnchor] = useState(null);
  const mode = useSelector(selectTheme);
  const theme = useTheme();

  const dispatch = useDispatch();

  const ProfileMenuStyles = {
    borderBottom: "1px solid #73CCE9",
    padding: "8px 20px 8px 12px",
    fontSize: "12px",
    fontWeight: "400",
  };

  const handleHamBurgerMenu = (e) => {
    setHamBurgetAnchor(e.target);
  };

  const handleProfileMenu = (e) => {
    setProfileAnchor(e.target);
  };

  const handleClose = () => {
    setHamBurgetAnchor(null);
    setProfileAnchor(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: theme.palette.gradient.main,
        boxShadow: "none",
        top: "0",
        zIndex: "999",
        borderBottom:
          mode === "light"
            ? "3px solid rgba(0, 163, 217, 0.07)"
            : "2px solid rgba(0, 163, 217, 0.1)",
      }}
    >
      <Toolbar sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link href="/">
            <Image
              priority
              src={
                mode === "light"
                  ? "/navbar/logoLight.svg"
                  : "/navbar/logoDark.svg"
              }
              className="logo"
              width={sm ? "100" : "179"}
              height={sm ? "40" : "60"}
              alt="Tapdata"
              style={{ height: "60px", maxWidth: "179px" }}
            />
          </Link>
          <Box
            sx={{
              display: "flex",
              pl: { xs: "0", md: "60px" },
              alignItems: "center",
              color: "#1e1e1e",
            }}
          >
            <Button
              onMouseEnter={handleHamBurgerMenu}
              onClick={handleHamBurgerMenu}
              sx={{
                color: "primary.contrastText",
                display: "flex",
                alignItems: "center",
              }}
            >
              <MenuIcon />
              <Typography
                variant="body1"
                paddingLeft="6px"
                fontWeight="500"
                fontSize="16px"
                textTransform="initial"
                sx={{ display: { xs: "none", md: "initial" } }}
              >
                Menu
                <ExpandMoreIcon style={{ verticalAlign: "middle" }} />
              </Typography>
            </Button>

            <Menu
              anchorEl={hamBurgerAnchor}
              open={Boolean(hamBurgerAnchor)}
              onClose={handleClose}
              onMouseLeave={handleClose}
              padding="0"
            >
              <CustomMenuItem
                mode={mode}
                onClick={handleClose}
                heading="Future"
                links={[
                  {
                    name: "Future Open Interest ",
                    link: "/foi",
                  },
                  { name: "Future End of the Day ", link: "/feod" },
                ]}
              />
              <CustomMenuItem
                mode={mode}
                onClick={handleClose}
                heading="Options"
                links={[
                  {
                    name: "Future Open Interest ",
                    link: "/foi",
                  },
                  { name: "Future End of the Day ", link: "/feod" },
                ]}
              />
              <CustomMenuItem
                mode={mode}
                onClick={handleClose}
                heading="Options"
                links={[
                  {
                    name: "Future Open Interest ",
                    link: "/foi",
                  },
                  { name: "Future End of the Day", link: "/feod" },
                ]}
              />
            </Menu>
          </Box>
        </Box>

        <Box>
          <IconButton
            sx={{
              color: "primary.contrastText",
              backgroundColor: mode === "light" ? "#FAFAFA" : "#252537",
              boxShadow:
                mode === "light"
                  ? ""
                  : "-6px -6px 12px rgba(0, 0, 0, 0.25), 6px 6px 12px rgba(0, 0, 0, 0.25), inset -6px -6px 12px rgba(0, 0, 0, 0.25), inset 6px 6px 12px rgba(0, 0, 0, 0.25)",
            }}
            onClick={() => dispatch(toggleTheme())}
          >
            <Image
              src={
                mode === "light"
                  ? "/navbar/todarkmode.svg"
                  : "/navbar/tolightmode.svg"
              }
              height={sm ? "16" : "24"}
              width={sm ? "16" : "24"}
              alt="Mode Switch Button"
            />
          </IconButton>

          <IconButton
            sx={{
              color: "primary.contrastText",
              mx: { xs: "8px", sm: "14px" },
              backgroundColor: mode === "light" ? "#FAFAFA" : "#252537",
              boxShadow:
                mode === "light"
                  ? ""
                  : "-6px -6px 12px rgba(0, 0, 0, 0.25), 6px 6px 12px rgba(0, 0, 0, 0.25), inset -6px -6px 12px rgba(0, 0, 0, 0.25), inset 6px 6px 12px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Image
              src="/navbar/notification.svg"
              height={sm ? "16" : "24"}
              width={sm ? "16" : "24"}
              alt="notification"
              style={{ filter: mode === "light" ? "blur(0)" : "invert(100%)" }}
            />
          </IconButton>

          <Button
            onClick={handleProfileMenu}
            sx={{
              padding: "5px",
              backgroundColor:
                mode === "light" ? { xs: "", sm: "#FAFAFA" } : "#252537",
              justifyContent: "flex-start",
              borderRadius: "30px",
              boxShadow:
                mode === "light"
                  ? ""
                  : "-6px -6px 12px rgba(0, 0, 0, 0.25), 6px 6px 12px rgba(0, 0, 0, 0.25), inset -6px -6px 12px rgba(0, 0, 0, 0.25), inset 6px 6px 12px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Avatar
              src="/navbar/profileImg.svg"
              alt="profile"
              sx={{
                height: { xs: "24px", md: "34px" },
                width: { xs: "24px", md: "34px" },
              }}
            />
            <Typography
              variant="body2"
              sx={{ display: { xs: "none", sm: "initial" }, ml: "5px" }}
              textTransform="initial"
              fontSize="12px"
              fontWeight="400"
              color={theme.palette.primary.contrastText}
            >
              {" "}
              My Profile
            </Typography>
            <ExpandMoreIcon
              style={{ color: theme.palette.primary.contrastText }}
            />
          </Button>

          <Menu
            anchorEl={profileAnchor}
            open={Boolean(profileAnchor)}
            onClose={handleClose}
            onMouseLeave={handleClose}
            sx={{ borderRadius: "0px" }}
          >
            <MenuItem sx={{ ...ProfileMenuStyles, marginTop: "-5px" }}>
              My Profile
            </MenuItem>
            <MenuItem sx={ProfileMenuStyles}>Quick Search</MenuItem>
            <MenuItem sx={ProfileMenuStyles}>Settings</MenuItem>
            <MenuItem
              sx={{
                color: "#E80909",
                marginBottom: "-5px",
                fontSize: "12px",
              }}
            >
              Log out
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

function CustomMenuItem({ heading, links, onClick, mode }) {
  return (
    <Box sx={{ margin: "14px auto", padding: "0 22px" }} onClick={onClick}>
      <Typography
        variant="h3"
        sx={{
          borderBottom: "3px solid rgba(0, 163, 217, 1)",
          display: "inline-block",
          marginBottom: "10px",
        }}
        fontSize="18px"
        fontWeight="500"
        color={(theme) => theme.palette.primary.contrastText}
      >
        {heading}
      </Typography>
      <Stack>
        {links.map((item, index) => {
          return (
            <StyledLink
              style={{
                color:
                  mode === "light"
                    ? "rgba(27, 27, 27, 0.7)"
                    : "rgba(255, 255, 255, 0.9",
              }}
              key={index}
              href={item.link}
            >
              {item.name}
            </StyledLink>
          );
        })}
      </Stack>
    </Box>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;

  :hover {
    color: #0ab2ea !important;
  }

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

CustomMenuItem.propTypes = {
  onClick: PropTypes.func,
  heading: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};
