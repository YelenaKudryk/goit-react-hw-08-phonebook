import { HeaderLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <HeaderLink to="/register">Register</HeaderLink>
      <HeaderLink to="/login">Log In</HeaderLink>
    </div>
  );
};
