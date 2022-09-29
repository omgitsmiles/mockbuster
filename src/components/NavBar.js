import React from "react";

function Header() {
    return (
        <div>
          <img  style={{ width: 150, height: 100 }} src={process.env.PUBLIC_URL + "/mockbuster.jpeg"} alt="mockbuster" />
        </div>
    )
}

export default Header