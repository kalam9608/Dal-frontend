import { NavigateNext } from "@mui/icons-material";
import { Breadcrumbs, useTheme } from "@mui/material";
import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

function Breadcrumb({ links = [] }) {
  const theme = useTheme();
  return (
    <Breadcrumbs
      sx={{
        backgroundColor: { xs: "none", md: theme.palette.background.secondary },
        display: "inline-flex",
        padding: { xs: "0", md: "4px 8.5px" },
        borderRadius: "4px",
        fontWeight: "500",
        fontSize: { xs: "8px", sm: "10px", md: "12px" },
        "& .MuiBreadcrumbs-separator": {
          margin: { xs: "0", sm: "0 8px" },
        },

        "& svg": {
          height: { xs: "14px", md: "18px" },
        },
      }}
      separator={<NavigateNext />}
    >
      {links.map((item, index) => (
        <Link
          key={index}
          style={{
            color:
              index === links.length - 1
                ? theme.palette.primary.main
                : theme.palette.text.secondary,
            textDecoration: "none",
          }}
          href={item.href}
        >
          {item.name}
        </Link>
      ))}
    </Breadcrumbs>
  );
}

export default Breadcrumb;

Breadcrumb.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
};
