import React from 'react';
import Container from './shared/container';
import styled from 'styled-components';

const ProfileCard = styled.div`
  padding: 24px 0;
  background-color: #e5e5e5;
`;

const ProfileContainer = styled(Container)`
  display: flex;
`;

const Section = styled.div`
  width: 50%;
`;

const Profile = () => {
  return (
    <ProfileCard>
      <ProfileContainer>
        <Section>Image</Section>
        <Section>
          <h1> Good evening! </h1>
        </Section>
      </ProfileContainer>
    </ProfileCard>
  );
};

export default Profile;
