import { Button, Typography, Box, Stack } from "@mui/material";
import PropTypes from "prop-types";

const cardDetail = [
  {
    cardHeading: "Academy",
    cardDesc: "Learn how to be a pro trader & use this software",
    cardPath: "/",
    btnText: "Coming Soon !",
  },
  {
    cardHeading: "Sprint Trade",
    cardDesc: "Trade like a sprinter & earn like a legende",
    cardPath: "/",
    btnText: "Coming Soon !",
  },
  {
    cardHeading: "Foreign Market",
    cardDesc: "Now you can explore, US market & crypto.",
    cardPath: "/",
    btnText: "Coming Soon !",
  },
];

export default function CourseDetial() {
  return (
    <Stack sx={{ flexDirection: { sm: "row", gap: "8px" } }}>
      {cardDetail.map((val, index) => {
        return (
          <CardItem
            key={index}
            cardHeading={val.cardHeading}
            cardSubHeading={val.cardDesc}
            path={val.cardPath}
            btnText={val.btnText}
          />
        );
      })}
    </Stack>
  );
}

function CardItem({ cardHeading, cardSubHeading, btnText }) {
  return (
    <Stack
      sx={{
        padding: { xs: "8px 10px", md: "16px 20px" },
        backgroundColor: (theme) => theme.palette.primary.whiteToZBlack,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: (theme) => theme.palette.primary.main,
        flexDirection: { xs: "row", sm: "column" },
        alignItems: { xs: "center", sm: "initial" },
        justifyContent: "space-between",
        gap: "8px",
        height: "inherit",
        flex: 1,
      }}
    >
      <Box sx={{ flex: "1" }}>
        <Typography
          sx={{
            color: (theme) => theme.palette.primary.contrastText,
            fontSize: { xs: "16px", md: "26px" },
            fontWeight: "600",
          }}
        >
          {cardHeading}
        </Typography>
        <Typography
          sx={{
            color: (theme) => theme.palette.text.secondary,
            fontSize: { xs: "12px", md: "16px" },
            fontWeight: "500",
            marginTop: "6px",
          }}
        >
          {cardSubHeading}
        </Typography>
      </Box>

      <Box sx={{ flex: "1", textAlign: "right !important" }}>
        <Button
          sx={{
            backgroundColor: (theme) => theme.palette.background.secondary,
            borderRadius: "20px",
            fontSize: { xs: "10px", md: "12px" },
            padding: { xs: "4px 8px", md: "8px 12px" },
            color: (theme) => theme.palette.primary.contrastText,
            textTransform: "capitalize",
            fontWeight: "600",
          }}
        >
          {btnText}
        </Button>
      </Box>
    </Stack>
  );
}

CardItem.propTypes = {
  cardHeading: PropTypes.string.isRequired,
  cardSubHeading: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};
