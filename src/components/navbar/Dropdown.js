import { NavLinkDrop, NavMenuDrop, NavMenuItem } from './navbarElements';

const Dropdown = ({ submenus, dropdown, handleOnClick, parentUrl }) => {

  return (
    <NavMenuDrop className={`dropdown ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <NavMenuItem key={index}>
          <NavLinkDrop onClick={handleOnClick} to={submenu.url ? submenu.url : `${parentUrl}/${submenu.title.toLowerCase().replace(/\s+/g, '-')}`}>{submenu.title}</NavLinkDrop>
        </NavMenuItem>
      ))}
    </NavMenuDrop>
  );
 };
 
 export default Dropdown;