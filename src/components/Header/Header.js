import React from 'react';
import logo from '/web developement/projects/amajon-practise/src/images/Logo.svg'
import '../Header.css'
const Header = () => {
  return (
    <div class='header'>
      <img src={logo} alt="" />
    </div>
  );
};

export default Header;