import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Note.css";

const Note = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const onChange = (event) => {
    console.log( event.target.value)
    switch (event.target.name) {
      case "noteName":
        setName(event.target.value);
        break;
      case "noteDescription":
        setDescription(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleClick = () => {
    localStorage.setItem(
      "note",
      JSON.stringify([{ name: name, description: description }])
    );
  };

  const handleLoad = () => {
    let data = JSON.parse(localStorage.getItem("note"));
    console.log(data[0]);
    setName(data[0].name);
    setDescription(data[0].description);
  };

  return (
    <div className="header">
      <TextField
        sx={{
          bgcolor: "white",
        }}
        id="outlined"
        name="noteName"
        onChange={onChange}
        label="Note Name"
        value={name}
      ></TextField>
      <TextField
        sx={{
          bgcolor: "white",
        }}
        id="outlined-multiline-static"
        label="Note Description"
        name="noteDescription"
        onChange={onChange}
        value={description}
        multiline
        rows={4}
      />
      <Button variant="contained" color="error" onClick={handleClick}>
        Save
      </Button>
      <Button variant="contained" color="success" onClick={handleLoad}>
        Load
      </Button>
    </div>
  );
};
export default Note;
