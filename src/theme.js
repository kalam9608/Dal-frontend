import { Poppins } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#00B4D8",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
});

export default theme;

const commonTheme = {
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
  palette: {
    error: {
      main: red.A400,
    },
  },
};

export const darkTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "#00B4D8",
      contrastText: "rgba(255, 255, 255, 0.9)",
      oppositeContrast: "#1d1d1d",
      whiteToZBlack: "#0A0A0A",
    },
    background: {
      default:
        "linear-gradient(110.88deg, #050A15 29.06%, #000925 58.81%, #010306 96.44%)",
      secondary: "#1B1B1B",
    },
    secondary: {
      main: "#19857b",
    },
    text: {
      primary: "#FFFFFF",
    },
    gradient: {
      main: "linear-gradient(110.88deg, #050A15 29.06%, #000925 58.81%, #010306 96.44%)",
    },
  },
});

export const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "light",
    primary: {
      main: "#00B4D8",
      contrastText: "rgba(27, 27, 27, 0.9)",
      oppositeContrast: "rgba(255, 255, 255, 0.9)",
      whiteToZBlack: "#FFF",
    },
    background: {
      default: "linear-gradient(112.38deg,#fff 18.06%,#e1e1fc 98.3%)",
      paper: "#fff",
      secondary: "#D5E9F0",
    },
    secondary: {
      main: "#19857b",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.5)",
    },
    gradient: {
      main: "linear-gradient(112.38deg,#fff 18.06%,#e1e1fc 98.3%)",
    },
  },
});

console.log({ lightTheme, darkTheme });
