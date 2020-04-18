import React, { ReactNode } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../styles/theme';

interface LayoutProps {
  children: ReactNode;
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    color: $color-font;
    line-height: 1.5em;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    a {
     color: inherit;
     text-decoration: none;
    }
  }
`;

const Layout = ({ children }: LayoutProps) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <main>{children}</main>
    </ThemeProvider>
  </>
);

export default Layout;
