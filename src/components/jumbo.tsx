import {
  faGithub,
  faLinkedin,
  faDribbble,
  faCodepen,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import styled from 'styled-components';

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
  margin-bottom: 44px;
  svg {
		# this is gross
    opacity: 0.8 !important;
    &:hover {
      transition: ${({ theme }) => theme.transition.normal};
      opacity: 1 !important;
    }
  }
`;

const SubTitle = styled.h3`
  font-size: 1.5em;
`;

const LinkIcon = styled(FontAwesomeIcon)`
  margin-right: 24px;
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
    href: 'https://codepen.io/chanonroy/',
    icon: faCodepen,
  },
  {
    href: 'https://dribbble.com/chanonroy/buckets',
    icon: faDribbble,
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
    </GradientBG>
  );
};

export default Jumbo;
