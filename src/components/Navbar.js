import React, { useContext } from 'react';
import styled from 'styled-components';
import ai5 from '../assets/abstractIcon5.svg';
import ai4 from '../assets/abstractIcon4.svg';
import { ThemesContext } from './ThemesProvider';
import Search from './Search';
import { withRouter } from 'react-router-dom';

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 10vh;
`;

const IMG = styled.img`
  width: 4vw;
  margin: 0 1rem 0 0;
`;

export const Navbar = withRouter(({ history }) => {
  const themesContext = useContext(ThemesContext);

  return (
    <NavbarContainer>
      <Search />

      <IMG
        src={ai4}
        alt={'logout'}
        onClick={(e) => {
          e.preventDefault();
          themesContext.toggleTheme();
        }}
      />
      <IMG
        src={ai5}
        alt={'logout'}
        onClick={(e) => {
          e.preventDefault();
          localStorage.removeItem('token');
          history.push('/');
        }}
      />
    </NavbarContainer>
  );
});
