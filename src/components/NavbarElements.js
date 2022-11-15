import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

// This file includes the style css of the nav bar at the top of html

export const Nav = styled.nav`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  color: white;
  background-color: #09122f;
  padding: .5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const NavLink = styled(Link)`
  margin: 0 2rem;
  display: inline;
  transition: all 0.25s ease-out;
  color: white;
  }
`;


export const NavMenu = styled.div`
  margin: 0;
  padding: 0 ;
  top-marigin: 2
  }
`;