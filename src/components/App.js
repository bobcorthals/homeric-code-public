import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import SubNavbar from "./subnavbar/Subnavbar";
import { menuItems, routeMapping } from "./menuItems";
import styled from 'styled-components';

import ScrollToTop from "./scroll/ScrollToTop";
import { goToTopAuto } from "./scroll/scrollElements";

// https://blog.logrocket.com/creating-multilevel-dropdown-menu-react/
// https://blog.logrocket.com/detect-click-outside-react-component-how-to/

// https://colorate.azurewebsites.net/Color/FFBD68
// #FFD8A7,#FFBD68,#FFA128

// scroll to top: https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
// better chance... hopefully: https://www.freecodecamp.org/news/scroll-to-top-bottom-and-particular-section-with-react/

const DivElem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #3E3A44;
  flex-direction: column;
`

const Elem = ({ title }) => {

  goToTopAuto()

  if (title === 'Browse') {
    return (
      <>
        <SubNavbar />
        <ScrollToTop />
      </>

      ) 
  }

  return (
    <DivElem>
      <h1>{title}</h1>
      <p>Ipsum Lorem</p>
    </DivElem>
    )
}

let RoutesMenuItems = [{
  title: 'Log In',
  path: 'log-in',
  id: 0
}]

const App = () => {

  RoutesMenuItems = routeMapping(RoutesMenuItems, menuItems)

  return (
    <Router>
      <Navbar />
      <Routes>
        {RoutesMenuItems.map((items) => {
          return (
          <Route key={items.id} path={items.path} element={<Elem title={items.title} />} />
          )
        })}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;