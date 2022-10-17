import React from 'react';
import logoStarWars from '../../assets/img/logo_StarWars.png'
import { HeaderWrapper, Login } from './Header.styles';

const Header = (props) => (
  <HeaderWrapper>
    <img src={logoStarWars} alt="Logo de Star Wars" />
    <Login>
      <button>LOG IN</button>
      <button>SIGN UP</button>
    </Login>
  </HeaderWrapper>
);

export default Header;
