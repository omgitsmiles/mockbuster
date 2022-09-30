import React from "react";
import mockbuster from "../assets/mockbuster.jpeg"
import { NavLink, Link } from "react-router-dom"
import TextField from '@mui/material/TextField';

function Header() {
    return (
        <nav className="navHeader">
          <NavLink to="/home"><img style={{ width: 175, height: 100 }} src={mockbuster} alt="mockbuster"/></NavLink>
          <span>
            <Link className="navRight" to="/SignIn">LOGIN</Link>
          </span>
          <span>
            <Link className="navRight">MY CART</Link>
          </span>
          <span>
            <Link className="navRight">BLOG</Link>
              <TextField
              className="navLeft"
              label="Search Movies"
              id="standard-size-small"
              defaultValue="Movies"
              size="small"
              variant="standard"
              />
          </span>
        </nav>
    )
}

export default Header

// process.env.PUBLIC_URL + "/mockbuster.jpeg"