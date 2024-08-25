import React from "react";
// import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PropTypes from "prop-types";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
