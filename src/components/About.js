import React from "react";
import TextField from '@mui/material/TextField';

function About() {
    return (
        <div>
            <h1>About Us</h1>
            <p>We here at Mockbuster believe nostalgia is the lifeforce of our consumer habbits. 
            So to take full advantage we've rebranded what looks familiar to sell old movies.</p>
            <p>Since we actually since these movies in 30(?!) years, if we got the description wrong, help us fix it!</p>
        <form>
   
                <TextField
                className="addMovie"
                required
                id="filled-basic"
                label="Title"
                variant="filled"
                />
        </form>
        </div>
    )
}

export default About