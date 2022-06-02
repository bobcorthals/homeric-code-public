import React, { useState } from 'react';
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import './sidebar.css';
import { VscThreeBars } from 'react-icons/vsc';

import { menuItems } from '../components/menuItems';

function Sidebar() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <Link to="#" className="side-menu-bars">
        <VscThreeBars onClick={showSidebar} height="2em" width="2em"/>
      </Link>
      <nav className={sidebar ? 'side-nav-menu active': 'side-nav-menu'} onClick={showSidebar}>
        <ul className="side-nav-menu-ul">
          <li key={'testingstuff'}>
            <Link to="#" className="side-menu-bars" id="inside-menu">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={'url' in item ? item.url : `/${item.title.toLowerCase().replace(/\s+/g, '-')}`} className={'side-nav-text'}>
                    <span>{item.title}</span>
                  </Link>
                </li> )})
                }
        </ul>
      </nav>
      </IconContext.Provider>
    </>
  )
}

export default Sidebar;

// return (
//   <>
//   <IconContext.Provider value={{color: '#fff'}}>
//     <Link to="#" className="side-menu-bars">
//       <VscThreeBars onClick={showSidebar} height="2em" width="2em"/>
//     </Link>
//     <nav className={sidebar ? 'side-nav-menu active': 'side-nav-menu'} onClick={showSidebar}>
//       <ul className="side-nav-menu-ul">
//         <li>
//           <Link to="#" className="side-menu-bars" id="inside-menu">
//             <AiIcons.AiOutlineClose />
//           </Link>
//         </li>
//         {menuItems.map((item, index) =>
//           { 
//             if ('submenu' in item) {
//               return (
//                 <>
//                   <li key={index}>
//                     <Link to={'url' in item ? item.url : `/${item.title.toLowerCase().replace(/\s+/g, '-')}`} className={'side-nav-text'}>
//                       <span>{item.title}</span>
//                     </Link>
//                   </li>
//                   {item.submenu.map((subitem) => {
//                     return (
//                     <li key={subitem.key}>
//                       <Link to={'url' in subitem ? subitem.url : `/${subitem.title.toLowerCase().replace(/\s+/g, '-')}`} className={'side-nav-sub-menu'}>
//                         <span>{subitem.title}</span>
//                       </Link>
//                     </li>
//                   )})}
//                 </>
//               )
//             } else {
//               return (
//                 <>
//                   <li key={index}>
//                     <Link to={'url' in item ? item.url : `/${item.title.toLowerCase().replace(/\s+/g, '-')}`} className={'side-nav-text'}>
//                       <span>{item.title}</span>
//                     </Link>
//                   </li>
//                 </>
//               )
//             }

//           }
//         )}
//       </ul>
//     </nav>
//     </IconContext.Provider>
//   </>
// )