import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accentColor};
  padding-top: ${p => p.theme.spacing(1)};
  padding-bottom: ${p => p.theme.spacing(1)};
  padding-left: ${p => p.theme.spacing(2)};
  padding-right: ${p => p.theme.spacing(2)};
  border-radius: ${p => p.theme.radius.normal};
  border: none;
  cursor: pointer;

  :nth-child(odd) {
    margin-right: ${p => p.theme.spacing(2)};
  }

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.hoverColor};
  }
`;

export const ContactForm = styled.div`
  margin-right: auto;
  margin-left: auto;
`;

export const ContactInfo = styled.div`
  display: flex;
`;

export const ContactInfoText = styled.p`
  :nth-child(odd) {
    margin-right: ${p => p.theme.spacing(3)};
  }
`;
