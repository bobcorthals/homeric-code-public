import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const Nav = styled.div`
  display: none;
  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
  background: none;
  flex-direction: column;

  @media screen and (max-width: 910px) {
    display: flex;
  }
`;

export const NavIcon = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #fff;
  height: 3.5rem;
  font-size: 2rem;
  padding-right: 1rem;
  border-bottom: 0.065rem solid #B26B78;
`;

export const SidebarNav = styled.nav`
  background: #3E3A44;
  width: 250px;
  height: 100vh;
  display: none;
  justify-content: center;
  position: fixed;
  top: 0;
  right: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  border-left: 0.065rem solid #B26B78;
  overflow-y: auto;

  @media screen and (max-width: 910px) {
    display: flex;
  }
`;

export const SidebarWrap = styled.div`
  width: 100%;
`;

export const SidebarLink = styled(NavLink)`
  display: flex;
  color: #fff;
  fill: #fff;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  height: 3.5rem;
  text-decoration: none;
  font-size: 18px;
  padding: 0.75rem 1rem;

  &:hover {
    background: #FFD8A7;
    color: #3E3A44;
    cursor: pointer;
    fill: #3E3A44;
  }

  &.active {
    background: #FFBD68;
    color: #3E3A44;
    fill: #3E3A44;
  }
`;

export const SidebarLabel = styled.span`
  display: flex;
  align-items: space-between;
`;

export const DropdownLink = styled(NavLink)`
  background: #414757;
  height: 3.5rem;
  padding: 0.75rem 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-size: 18px;

  &:hover {
    background: #FFD8A7;
    color: #3E3A44;
    cursor: pointer;
  }

  &.active {
    background: #FFBD68;
    color: #3E3A44;
    border-top: 0.065rem solid #B26B78;
    border-bottom: 0.065rem solid #B26B78;
  }
`;