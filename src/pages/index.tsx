import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";

const Square = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 50px;
  width: 50px;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Chanon Roy" />
    <h1>Hello people</h1>
    <Square />
  </Layout>
);

export default IndexPage;
