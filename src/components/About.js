import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function About({ movies, setMovies }) {
    const [captureTitle, setCaptureTitle] = useState("")
    const [description, setDescription] = useState("")

    function handleNewDescription(e) {
        e.preventDefault()
        const searched = movies.find(movie => captureTitle.toLowerCase() === movie.title.toLowerCase())
        fetch(`http://localhost:3004/movies/${searched.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({description: description})
        })
        .then(r => r.json())
        .then(updatedDescription => movies.map(movie => {
            const updated =  movies.map(movie => movie.id === searched.id ? updatedDescription : movie)
            setMovies(updated)
        }))
    }

    return (
        <div>
            <h1>About Us</h1>
            <p>We here at Mockbuster believe nostalgia is the lifeforce of our consumer habits. 
            So to take full advantage we've rebranded what looks familiar to sell old movies.</p>
            <p>Since the last time we actually since these movies was 30(?!) years ago, if we got the description wrong, help us fix it!</p>
        <form onSubmit={handleNewDescription}>
                <TextField
                className="addMovie"
                required
                id="filled-basic"
                label="Title"
                variant="filled"
                onChange={(e) => setCaptureTitle(e.target.value)}
                />
            <br></br>
            <br></br>
                <TextField
                className="addMovie"
                required
                id="filled-basic"
                label="Description"
                variant="filled"
                onChange={(e) => setDescription(e.target.value)}
                />
            <br></br>
            <br></br>
            <Button variant="contained" type="submit">Update</Button>
        </form>
        </div>
    )
}

export default About