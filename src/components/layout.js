import React from "react";
import PropTypes from "prop-types";

import { createGlobalStyle } from "styled-components";
import NavBar from "../components/globals/navbar";
import Footer from "../components/globals/Footer";
// import { StaticQuery, graphql } from "gatsby"

// import "./layout.css";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <NavBar />
      {children}
      <Footer />
    </React.Fragment>
  );
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
