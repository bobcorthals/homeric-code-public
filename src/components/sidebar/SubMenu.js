import React, { useState } from 'react';
import { AiFillCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import { SidebarLink, SidebarLabel, DropdownLink } from './sidebarElements';

const SubMenu = ({ item, showSidebar }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  const parentUrl = item.url ? item.url : `/${item.title.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <>
      <SidebarLink to={parentUrl} onClick={!item.submenu? showSidebar: item.submenu && showSubnav}>
        <div>
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.submenu && subnav
            ? <AiOutlineCaretUp fill="inherit" />
            : item.submenu
            ? <AiFillCaretDown fill="inherit" />
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.submenu.map((item, index) => {
          return (
            <DropdownLink to={item.url ? item.url : `${parentUrl}/${item.title.toLowerCase().replace(/\s+/g, '-')}`} key={index} onClick={showSidebar}>
              {/* {item.icon} */}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
