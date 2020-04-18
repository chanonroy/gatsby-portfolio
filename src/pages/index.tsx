import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import Jumbo from '../components/jumbo';
import Profile from '../components/profile';

// const Square = styled.div`
//   background-color: ${({ theme }) => theme.colors.primary};
//   height: 50px;
//   width: 50px;
// `;

const IndexPage = () => (
  <Layout>
    <SEO title="Chanon Roy" />
    <Jumbo />
    <Profile />
  </Layout>
);

export default IndexPage;
