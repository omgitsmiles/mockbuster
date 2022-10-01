import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button, CardActions } from '@mui/material';


function MovieCard({ movie:{image, description, title } }){
  const [rent, isRented] = useState(true)

  function handleClick() {
    isRented(rent => !rent)
  }

    return (
      <Card className="card" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>{rent ? (
      <Button variant="contained" onClick={handleClick} className="rentBtn" >Rent</Button> ) : (
      <Button variant="contained" onClick={handleClick} className="rentBtn" disabled>In Cart</Button> )
        }
      </CardActions>
    </Card>
    
    )
}

export default MovieCard