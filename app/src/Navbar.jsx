import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "./Styled";

const Navbar = () => {
  return (
    <Nav>

   <Link style={{color: 'white'}} to ={'/search'}>
    Search
   </Link>

    </Nav>

  )
};

export default Navbar;