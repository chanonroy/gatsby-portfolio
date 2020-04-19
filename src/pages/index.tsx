import React from 'react';
import Jumbo from '../components/jumbo';
import Profile from '../components/profile';
import Layout from '../components/shared/layout';
import SEO from '../components/shared/seo';
import Skills from '../components/skills';
import Contact from '../components/contact';
import Projects from '../components/shared/projects';

const IndexPage = () => (
  <Layout>
    <SEO title="Chanon Roy (2.0)" />
    <Jumbo />
    <Profile />
    <Skills />
    <Contact />
    <Projects />
  </Layout>
);

export default IndexPage;
