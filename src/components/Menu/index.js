import React from 'react';
import Logo from '../../assets/logo.png';
import './Menu.css';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button/index';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={Logo} alt="logo" className="Logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;