import { menuItems } from "../menuItems";
import MenuItems from "../menuItems";
import Sidebar from '../sidebar/Sidebar';

import { Nav, NavMenu, NavLinkLogo, NavLinkLogIn, H1 } from "./navbarElements";

import { ReactComponent as Logo } from '../../images/minoan-singer.svg';

const Navbar = () => {
  return (
    <Nav>
      <NavLinkLogo to="/" exact='true'>
        <Logo alt="logo" style={{width: "3rem", height: "3rem"}} />
        <H1>Homeric Code</H1>
      </NavLinkLogo>
      <NavMenu>
        {menuItems.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })}
      </NavMenu>
        <NavLinkLogIn to="/log-in">Log In</NavLinkLogIn>
      <Sidebar />
    </Nav>
  );
 };
 
export default Navbar;