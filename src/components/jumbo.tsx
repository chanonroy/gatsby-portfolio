import {
  faGithub,
  faLinkedin,
  faCodepen,
  faMedium,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import styled from 'styled-components';
import building from '../images/ottawa.svg';

const GradientBG = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #1e5799 9%, #2989d8 69%, #65ade6 100%);
  height: 100vh;
  max-height: 1200px;
  color: white;
`;

const Title = styled.h2`
  font-size: 2em;
  margin: 0;
`;

const IconContainer = styled.div`
  margin-bottom: 36px;
  svg {
		# this is gross
    opacity: 0.8 !important;
    &:hover {
      transition: ${({ theme }) => theme.transition.normal};
      opacity: 1 !important;
    }
  }
`;

const BuildingContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  height: 300px;
`;

const SubTitle = styled.h3`
  font-size: 1.3em;
`;

const LinkIcon = styled(FontAwesomeIcon)`
  margin: 0 14px;
  opacity: 0.8;
`;

const socialLinks = [
  {
    href: 'https://linkedin.com/in/chanonroy',
    icon: faLinkedin,
  },
  {
    href: 'https://github.com/chanonroy',
    icon: faGithub,
  },
  {
    href: 'https://www.instagram.com/chanonroy/',
    icon: faInstagram,
  },
  {
    href: 'https://codepen.io/chanonroy/',
    icon: faCodepen,
  },
  {
    href: 'https://medium.com/@chanonroy',
    icon: faMedium,
  },
];

const Jumbo: FC = () => {
  return (
    <GradientBG>
      <IconContainer>
        {socialLinks.map((link, i) => {
          return (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkIcon icon={link.icon} size="3x" />
            </a>
          );
        })}
      </IconContainer>
      <Title> Hello, my name is Chanon </Title>
      <SubTitle> I&#39;m a software developer from Canada </SubTitle>

      <BuildingContainer>
        <img src={building} alt="building" />
      </BuildingContainer>
    </GradientBG>
  );
};

export default Jumbo;
