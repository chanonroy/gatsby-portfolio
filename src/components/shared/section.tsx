import styled from 'styled-components';

const Section = styled.div`
  padding: 80px 0;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    padding: 40px;
  }
`;

export default Section;
