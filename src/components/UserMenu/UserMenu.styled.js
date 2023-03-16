import styled from 'styled-components';

export const Text = styled.p`
  padding: ${p => p.theme.spacing(4)};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
  color: ${p => p.theme.colors.primaryText};
  outline: none;
`;

export const Button = styled.button`
  height: 40px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accentColor};
  padding-top: ${p => p.theme.spacing(3)};
  padding-bottom: ${p => p.theme.spacing(3)};
  padding-left: ${p => p.theme.spacing(5)};
  padding-right: ${p => p.theme.spacing(5)};
  border-radius: ${p => p.theme.radius.normal};
  border: none;
  cursor: pointer;
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.hoverColor};
  }
`;

export const StyledUserMenu = styled.div`
  display: flex;
  align-items: center;
`;
