import { Outlet } from 'react-router-dom';
import { Container, HeaderStyles, MainStyles } from './Layout.styled';
import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <Container>
      <HeaderStyles>
        <AppBar />
      </HeaderStyles>
      <MainStyles>
        <Suspense fallback={<p>LOADING</p>}>
          <Outlet />
        </Suspense>
      </MainStyles>
    </Container>
  );
};
