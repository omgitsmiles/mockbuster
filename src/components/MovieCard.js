import React from "react";

function MovieCard({ movie:{image, description, title } }){
    return (
            <div>
                <h3>{title}</h3>
                {/* <img src={image} alt={title} /> */}
            </div>
    )
}

export default MovieCard