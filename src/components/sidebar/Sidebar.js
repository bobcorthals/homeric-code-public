import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { VscThreeBars } from 'react-icons/vsc';
import { menuItems } from '../menuItems';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { Nav, NavIcon, SidebarNav, SidebarWrap } from './sidebarElements';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    return (
    setSidebar(!sidebar)
    )
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <VscThreeBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#' onClick={showSidebar} >
              <AiOutlineClose />
            </NavIcon>
            {menuItems.map((item, index) => {
              return <SubMenu item={item} key={index} showSidebar={showSidebar} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
