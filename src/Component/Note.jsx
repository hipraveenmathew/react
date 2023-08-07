import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Note.css";

const Note = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const onChange = (event) => {
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
    localStorage.setItem('note',JSON.stringify([{'name':name,'description':description}]));
  };

  const handleLoad = () => {
    localStorage.getItem(val=>(console.log(val)));
    // localStorage.setItem(name, description);
  };

  return (
    <div className="header">
      <TextField
        id="outlined"
        name="noteName"
        onChange={onChange}
        label="Note Name"
        value={name}
      ></TextField>
      <TextField
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
