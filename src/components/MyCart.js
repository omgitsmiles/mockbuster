import React from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function MyCart({ cart, setCart }) {

    function handleDelete(deletedMovie) {
        const deleted = cart.filter(movie => movie.id !== deletedMovie)
        setCart(deleted)
    }

    const renderCart = cart.map(movie => (
    <div className="cartCard">
        <h3 key={movie.id}>{movie.title}</h3>
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
        </div>
    )
}

export default MyCart