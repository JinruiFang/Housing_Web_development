import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './style.css';
import { Nav, NavLink, NavMenu } from "./components/NavbarElements";
import housingdata from './data/housingData.json'; //the data to display
import 'whatwg-fetch';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App housedata={housingdata} />
  </React.StrictMode>
);


const Navbar = () => {
  return (
    <Nav>
      <NavMenu>
        <NavLink to="/Home" activeStyle>
          Home
        </NavLink>
        <NavLink to="/Maps" activeStyle>
          Map
        </NavLink>
        <NavLink to="/Sell" activeStyle>
          Sell
        </NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;

