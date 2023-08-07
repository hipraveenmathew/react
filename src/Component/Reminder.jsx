import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Note.css";

const Reminder = (data, onChange) => {
  return (
    <div className="header">
      <TextField id="outlined" label="Reminder Name"></TextField>
      <TextField
        id="outlined-multiline-static"
        label="Reminder Description"
        multiline
        rows={4}
      />
      <Button variant="contained" color="error">
        Save
      </Button>
    </div>
  );
};
export default Reminder;
