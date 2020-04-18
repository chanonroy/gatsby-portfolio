import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <ThemeProvider theme={theme}>
      <main>{children}</main>
    </ThemeProvider>
  </>
);

export default Layout;
