import React from "react";
import mockbuster from "../assets/mockbuster.PNG"
import { NavLink, Link } from "react-router-dom"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


function Header() {
    return (
      
        <nav className="navHeader">
          <NavLink to="/home"><img style={{ width: 175, height: 100 }} src={mockbuster} alt="mockbuster"/></NavLink>
            <Link className="navRight" to="/signin"><Button>Login</Button></Link>
            <Link className="navRight"><Button>MY CART</Button></Link>
            <Link className="navRight"><Button>BLOG</Button></Link>
            <Link className="navLeft"><Button>ABOUT</Button></Link>
            <Link className="navLeft"><Button>CONTACT</Button></Link> 
        </nav>
    )
}

export default Header

// process.env.PUBLIC_URL + "/mockbuster.jpeg"