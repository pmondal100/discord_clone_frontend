import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

const AddRoomIcon = () => {
  const addRoomHandler = () => {
    console.log("Add room button was clicked!!!");
  };
  return (
    <Button
      onClick={addRoomHandler}
      sx={{
        width: "48px",
        height: "48px",
        borderRadius: "16px",
        margin: "0",
        padding: "0",
        minWidth: "0",
        marginTop: "10px",
        color: "white",
        backgroundColor: "#5865F2",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#5865F2",
        },
      }}
    >
      <AddIcon />
    </Button>
  );
};

export default AddRoomIcon;
