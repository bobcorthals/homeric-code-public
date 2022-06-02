import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const H1 = styled.h1`
  font-size: 1.4rem;
  font-weight: 400;
  padding: 0 0.8rem;

  @media screen and (max-width: 540px) {
    display: none;
}
`

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  background-color: #3E3A44;
  color: white;
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin-right: -24px;
  height: 100%;

  @media screen and (max-width: 910px) {
    display: none;
  }
`

// nav items in main nav bar
export const NavMenuItem = styled.li`
  position: relative;
  font-size: 1rem;
  height: 100%;
  display: flex;
  align-items: center;
`

export const NavMenuDrop = styled.ul`
  background-color: #3E3A44;
  border: 0.0625rem solid #B26B78;
  position: absolute;
  right: 0;
  left: auto;
  font-size: 0.875rem;
  z-index: 9999;
  min-width: 10rem;
  padding: 0.5rem;
  list-style: none;
  top: 2.5rem;
  display: none;
  margin-right: 0.75rem;

  box-shadow: 0 10px 15px -3px rgba(46, 41, 51, 0.08),
    0 4px 6px -2px rgba(71, 63, 79, 0.16);

  &.show {
    display: block;
  }
`

export const NavLink = styled(Link)`
  color: inherit;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 2rem;
  cursor: pointer;
  margin-right: 0.75rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #FFD8A7;
    color: #3E3A44;
  }

  &.active {
    background: #FFBD68;
    color: #3E3A44;
  }
`
export const NavLinkLogo = styled(NavLink)`
  padding: 0;
  margin-left: 1rem;
  height: 3rem;

  &:hover {
    background-color: inherit;
    color: inherit;
  }

  &.active {
    background-color: inherit;
    color: inherit;
  }
`

export const NavLinkLogIn = styled(NavLink)`
  background-color: #B397AE;
  color: #FFF;

  &:hover {
    background: #FFF;
    color: #3E3A44;
  }

  &.active {
    background-color: #FFBD68;
    color: #3E3A44;
  }
`

export const NavLinkBtn = styled.button`
  color: inherit;
  font-size: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 100%;
  height: 2rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #FFD8A7;
    color: #3E3A44;
  }

  &.active {
    background-color: red;
  }
`

export const NavLinkDrop = styled(Link)`
  color: inherit;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem;
  height: 100%;
  width: 100%;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #FFD8A7;
    color: #3E3A44;
  }
  
  &.active {
    background-color: #FFBD68;
    color: #3E3A44;
  }
`
