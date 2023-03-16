import { HeaderLink, HeaderList } from './Navigation.styled';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderList>
      <HeaderLink to="/">Home</HeaderLink>
      {isLoggedIn && <HeaderLink to="contacts">Contacts</HeaderLink>}
      {isLoggedIn && <HeaderLink to="add-contact">Add contact</HeaderLink>}
    </HeaderList>
  );
};
