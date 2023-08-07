import React, { useState } from "react";
import Note from "./Note";
import Button from "@mui/material/Button";
import Reminder from "./Reminder";

const Home = () => {
  const [note, setNote] = React.useState(true);

  return (
    <div>
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          note ? setNote(false) : setNote(true);
        }}
      >
        {!note ? "Note" : "Reminder"}
      </Button>

      {note ? (
        <Note />
      ) : (
        <Reminder />
      )}
    </div>
  );
};
export default Home;
