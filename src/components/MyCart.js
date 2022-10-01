import React from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function MyCart({ cart, setCart }) {

    function handleDelete(deletedMovie) {
        const deleted = cart.filter(movie => movie.id !== deletedMovie)
        setCart(deleted)
    }

    function handleRent() {
        const rented = cart.filter(movie => !cart.includes(movie))
        setCart(rented)
        alert("Your rentals are on the way!")
    }

    const renderCart = cart.map(movie => (
        <div className="cartCard" key={movie.id}>
            <h3>{movie.title}</h3>
            <img src={movie.image} width={100} height={100} alt={movie.title}/>
            <div>
                <IconButton aria-label="delete" onClick={() => handleDelete(movie.id)}>
                    <DeleteIcon />
                </IconButton>
            </div>
        </div>
        ))

    return (
        <div>
           <h1>MY CART</h1>
           {renderCart}
           <div>{cart.length === 0 ? ( 
           <Link to="/home"><Button style={{ textDecoration: "none" }} variant="contained">Return to shop</Button></Link> ) :
            ( <Button variant="contained" onClick={handleRent}>RENT!</Button> )
           }
           </div>
        </div>
    )
}

export default MyCart