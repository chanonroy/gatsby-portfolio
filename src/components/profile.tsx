import React from 'react';
import Container from './shared/container';
import styled from 'styled-components';
import timeGreeting from '../utils/time-greeting';

const ProfileCard = styled.div`
  padding: 80px 0;
  background-color: #e5e5e5;
`;

const ProfileContainer = styled(Container)`
  display: flex;
`;

const Section = styled.div`
  width: 50%;
`;

const MutedText = styled.p`
  color: grey;
`;

const Profile = () => {
  const greetingText = timeGreeting();
  return (
    <ProfileCard>
      <ProfileContainer>
        <Section></Section>
        <Section>
          <h1> {greetingText} </h1>
          <MutedText>
            Thank you for making my website an exciting stop on your current
            internet browsing journey. Get ready to learn a bit more about me
            and some of the exciting things that I have been working on.
          </MutedText>
        </Section>
      </ProfileContainer>
    </ProfileCard>
  );
};

export default Profile;
