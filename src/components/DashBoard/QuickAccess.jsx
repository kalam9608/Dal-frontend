import PropTypes from "prop-types";
import { Typography, Stack, Box, useTheme } from "@mui/material";
import { Chain, Future, Option, Trend } from "@/asset/AppIcons";

export default function QuickAccess() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        borderRadius: "8px",
        border: { xs: "none", md: "1px solid" },
        borderColor: `${theme.palette.primary.main} !important`,
        backgroundColor: {
          xs: "none",
          md: theme.palette.primary.whiteToZBlack,
        },
        padding: { md: "8px 12px" },
      }}
    >
      <Typography
        color={theme.palette.primary.contrastText}
        fontSize="16px"
        marginBottom="4px"
      >
        Quick Access
      </Typography>

      <Stack
        sx={{
          flexDirection: {
            sm: "row",
            md: "column",
          },
          gap: { xs: "8px", md: "none" },
        }}
      >
        <Stack
          sx={{ gap: "8px", marginBottom: { md: "8px" }, flexDirection: "row" }}
        >
          <CardItem
            cardName="Future Interest"
            cardIcon={<Future />}
            cardDesc="Lorem ipsum dolor sit amet, consect"
          />
          <CardItem
            cardName="Option Interest"
            cardIcon={<Option />}
            cardDesc="Lorem ipsum dolor sit amet, consect"
          />
        </Stack>
        <Stack flexDirection="row" sx={{ gap: "8px" }}>
          <CardItem
            cardName="Trend Guide"
            cardIcon={<Trend />}
            cardDesc="Lorem ipsum dolor sit amet, consect"
          />
          <CardItem
            cardName="Option Chain"
            cardIcon={<Chain />}
            cardDesc="Lorem ipsum dolor sit amet, consect"
          />
        </Stack>
      </Stack>
    </Box>
  );
}

function CardItem({ cardName, cardIcon, cardDesc }) {
  return (
    <Box
      backgroundColor={(theme) => theme.palette.primary.main}
      padding="16px 16px 12px"
      sx={{ borderRadius: "8px", width: "100%" }}
    >
      <Stack flexDirection="row" sx={{ gap: "8px", width: "inherit" }}>
        <Box>{cardIcon}</Box>
        <Typography
          sx={{
            fontSize: "14px",
            maxWidth: "1.5rem",
            color: (theme) => theme.palette.common.white,
            fontWeight: "500",
            marginLeft: "0.5rem",
          }}
        >
          {cardName}
        </Typography>
      </Stack>
      <Typography
        sx={{
          fontSize: "10px",
          color: (theme) => theme.palette.common.white,
          marginTop: "8px",
          display: { xs: "none", sm: "block" },
        }}
      >
        {cardDesc}
      </Typography>
    </Box>
  );
}

CardItem.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardIcon: PropTypes.element.isRequired,
  cardDesc: PropTypes.string.isRequired,
};
