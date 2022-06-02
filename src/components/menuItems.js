import Dropdown from "./navbar/Dropdown";
import { useState, useEffect, useRef } from "react";
import { NavLink, NavLinkBtn, NavMenuItem } from "./navbar/navbarElements";
import { AiFillCaretDown } from 'react-icons/ai'

export const menuItems = [
  {
    title: "Home",
    url: "/"
  },
  {
    title: "Browse"
  },
  {
    title: "Search"
  },
  {
    title: "Emendations"
  },
  {
    title: "Extra",
    submenu: [
    {
      title: "Tutorial"
    },
    {
      title: "Dashboards"
    },
    {
      title: "About",
    },
    {
      title: "Contact Us"
    }
    ]
  }
];

export const routeMapping = (arr_start, arr_input) => {
  
  let counter = 1;

  arr_input.forEach(
    (item) => {
      let title = `${item.title}`;
      arr_start.push({ 
        title: title,
        path: ('url' in item)? '' : `/${title.toLowerCase().replace(/\s+/g, '-')}`,
        id: counter });
      counter += 1;
      if (item.submenu) {
        item.submenu.forEach((subitem) => {
          let subtitle = `${subitem.title}`
          arr_start.push({ 
            title: subtitle,
            path: ('url' in subitem)? '' : `/${title}/${subtitle}`.toLowerCase().replace(/\s+/g, '-'),
            id: counter })
          counter += 1;
        })
      }
    }
  )
  return arr_start;
}

const MenuItems = ({ items }) => {
  
  const [dropdown, setDropdown] = useState(false);

  // changed from 960
  const onMouseEnter = () => {
    window.innerWidth > 768 && setDropdown(true);
  };
    
  const onMouseLeave = () => {
    window.innerWidth > 768 && setDropdown(false);
  };

  let ref = useRef();

  useEffect(() => {

    const handler = (event) => {
    
    if (dropdown && ref.current && !ref.current.contains(event.target)) {
      setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    
    return () => {
     // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const handleOnClick = () => {
    setDropdown((prev) => !prev);
  }

  return (
    <NavMenuItem ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
      {items.submenu ? (
        <>
          <NavLink to={items.url ? items.url : `/${items.title.toLowerCase().replace(/\s+/g, '-')}`} style={{padding: '0'}}>
            <NavLinkBtn type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"}
            onClick={handleOnClick}>
              {items.title}&nbsp;{<AiFillCaretDown />}
            </NavLinkBtn>
          </NavLink>
          <Dropdown handleOnClick={handleOnClick} parentUrl={items.url ? items.url : `/${items.title.toLowerCase().replace(/\s+/g, '-')}`} submenus={items.submenu} dropdown={dropdown}/>
        </>
      ) : (
        <NavLink to={items.url ? items.url : `/${items.title.toLowerCase().replace(/\s+/g, '-')}`}>{items.title}</NavLink>
      )}
    </NavMenuItem>
  );
 };
 
 export default MenuItems;