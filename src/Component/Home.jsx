import React, { useState } from "react";
import Note from "./Note";
import Button from "@mui/material/Button";
import Reminder from "./Reminder";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Home = () => {
  const [note, setNote] = React.useState(true);

  return (
    <div>
      <Paper
        elevation={5}
        sx={{
          bgcolor: "#f4d7d630",
          width: "500px",
          height: "500px",
          display:"flex",
          alignItems:"center"
        }}
      >
        {/* <Box sx={{ bgcolor: "white" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Notes" />
          </Tabs>
        </Box> */}

        
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            note ? setNote(false) : setNote(true);
          }}
        >
          {!note ? "Note" : "Reminder"}
        </Button>

        {note ? <Note /> : <Reminder />}
      </Paper>
    </div>
  );
};
export default Home;
