import styled from 'styled-components';

export const Container = styled.div`
`

// styled used for SubNav Books
export const SubNav = styled.nav`
  position: sticky;
  top: 0;
  background-color: #FFD8A7;
  color: #3E3A44;
  padding: 1rem 0;
  padding: 1rem calc((100vw - 600px) / 2);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 1;
  flex-direction: row;

  @media screen and (max-width: 800) {
    padding: 1 calc((100vw - 400px) / 2);
  }
`

export const NavMenu = styled.ul`
  margin: 0rem;
  display: grid;
  grid-template-columns: repeat(12,1fr);
  grid-template-rows: repeat(2,1fr);
  gap: 0.25rem;
  padding: 0;
`

// nav items in main nav bar
export const NavMenuItem = styled.li`
  text-align: center;
  font-size: 0;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  border: 0.0625rem solid transparent;
  list-style-type: none;

  &.even {
    background-color: #3E3A44;
  }

  &.odd {
    background-color: #414757;
  }

  &:hover {
    color: #3E3A44;
    font-size: 1rem;
    z-index: 99;
  }

  &.even:hover {
    background-color: white;
    border: 0.0625rem solid #3E3A44;
  }

  &.odd:hover {
    background-color: white;
    border: 0.0625rem solid #414757;
  }

  &.active {
    background-color: #FFBD68;
    font-size: 1rem;
    color: #3E3A44;
  }

  &.even.active {
    border: 0.0625rem solid #3E3A44;
  }

  &.odd.active {
    border: 0.0625rem solid #414757;
  }
`

// lines
export const NavMenuLine = styled.ul`
  display: grid;
  margin: 0;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0.25rem;
  padding: 0;
`

export const NavMenuItemLine = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  border: 0.0625rem solid transparent;
  width: 2.5rem;
  height: 1.5rem;
  list-style-type: none;

  &.even {
    background-color: #3E3A44;
  }

  &.odd {
    background-color: #414757;
  }

  &:hover {
    color: #3E3A44;
    font-size: 1rem;
    z-index: 99;
  }

  &.even:hover {
    background-color: white;
    border: 0.0625rem solid #3E3A44;
  }

  &.odd:hover {
    background-color: white;
    border: 0.0625rem solid #414757;
  }

  &.active {
    background-color: #FFBD68;
    color: #3E3A44;
  }

  &.even.active {
    border: 0.0625rem solid #3E3A44;
  }

  &.odd.active {
    border: 0.0625rem solid #414757;
  }
`

export const NavLinkBtn = styled.button`
  color: inherit;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #FFD8A7;
    color: #3E3A44;
    cursor: pointer;
  }

  &.active {
    background-color: red;
  }
`

export const MenuItems = ( props ) => {

  return (
    <NavMenuItem className={`${props.className}`} id={props.items} onClick={props.onClick}>
      {props.items}
    </NavMenuItem>
  );
 };

export const MenuItemsLines = ( props ) => {
  return (
    <NavMenuItemLine className={`${props.className}`} id={props.items} onClick={props.onClick}>
      {props.items.split('.')[1].split('-')[0]}
    </NavMenuItemLine>
  );
}