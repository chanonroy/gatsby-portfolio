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
  padding: ${({ theme }) => `${theme.spacing.xs}px`};
  background: linear-gradient(to bottom, #1e5799 9%, #2989d8 69%, #65ade6 100%);
  height: 100vh;
  max-height: 1200px;
  color: white;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin: 10px 0;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    font-size: 1.7em;
    text-align: center;
  }
`;

const IconContainer = styled.div`
  margin-bottom: 20px;
  svg {
    transition: ${({ theme }) => theme.transition.normal};
    opacity: 0.8 !important;
    &:hover {
      opacity: 1 !important;
    }
  }
  @media (max-width: ${({ theme }) => `${theme.breakpoints.xs}px`}) {
    svg {
      font-size: 2.5em;
    }
  }
`;

const BuildingContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;

  img {
    width: 500px;
  }

  @media (max-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    img {
      width: 300px;
    }
  }

  @media (max-height: 600px) {
    img {
      display: none;
    }
  }
`;

const SubTitle = styled.h3`
  font-size: 1.3em;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.xs}px`}) {
    font-size: 1em;
    text-align: center;
  }
`;

const LinkIcon = styled(FontAwesomeIcon)`
  margin: 0 14px;
  opacity: 0.8;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    margin: 0 8px;
  }
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
