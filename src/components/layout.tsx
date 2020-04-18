import PropTypes from "prop-types";
import React, { FC, ReactNode } from "react";
import { createGlobalStyle } from "styled-components";

interface LayoutProps {
  children: ReactNode;
}

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => (props.theme === "purple" ? "purple" : "white")};
  }
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
