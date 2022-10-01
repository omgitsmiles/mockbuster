import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function AddMovie({ handleNewMovie }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")

    function onFormSubmit(e) {
        e.preventDefault()
        console.log('hi')
    }

    return (
        <div>
            <br></br>
            <h2>Add your favorite movie!</h2>
            <p>Missing a movie?</p>
            <p>Fill out the form below, we'll be sure to stock in next time you're around</p>
        <form onSubmit={onFormSubmit}>
        <div>
                <TextField
                className="addMovie"
                required
                id="filled-basic"
                label="Title"
                variant="filled"
                onChange={(e) => setTitle(e.target.value)}
                />
        </div>
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
                <TextField
                className="addMovie"
                required
                id="filled-basic"
                label="Movie Poster"
                variant="filled"
                onChange={(e) => setImage(e.target.value)}
                />
                <div>
                    <br></br>
            <Button variant="contained" type="submit">Add!</Button>
                </div>
         </form>
        </div>
    )
}

export default AddMovie