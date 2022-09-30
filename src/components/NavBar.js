import React from "react";
import mockbuster from "../assets/mockbuster.jpeg"
import { NavLink, Link } from "react-router-dom"
import Button from '@mui/material/Button';


function Header() {
    return (
        <nav className="navHeader">
          <NavLink to="/home"><img style={{ width: 175, height: 100 }} src={mockbuster} alt="mockbuster"/></NavLink>
          <span>
            <Link className="navRight" to="/SignIn"><Button>Login</Button></Link>
          </span>
          <span>
            <Link className="navRight"><Button>MY CART</Button></Link>
          </span>
          <span>
            <Link className="navRight"><Button>BLOG</Button></Link>
            <Link className="navLeft"><Button>ABOUT</Button></Link>
            <Link className="navLeft"><Button>CONTACT</Button></Link>
          </span>
        </nav>
    )
}

export default Header

// process.env.PUBLIC_URL + "/mockbuster.jpeg"