import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button, CardActions } from '@mui/material';


function MovieCard({ movie, setCart, cart }){
  const [rent, isRented] = useState(true)

  function handleClick(addedMovie) {
    isRented(rent => !rent)
    setCart([...cart, addedMovie])
  }

    return (
      <Card className="card" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          className="cImage"
          component="img"
          height="140"
          image={movie.image}
          alt={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>{rent ? (
      <Button variant="contained" onClick={() => handleClick(movie)} className="rentBtn">Rent</Button> ) : (
      <Button variant="contained" className="rentBtn" disabled>In Cart</Button> )
        }
      </CardActions>
    </Card>
    
    )
}

export default MovieCard