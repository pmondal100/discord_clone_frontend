import React from "react";
import Typography from "@mui/material/Typography";

interface propStructure {
  title: string;
}

const FriendsTitle = (props: propStructure) => {
  return (
    <Typography
      sx={{
        textTransform: "uppercase",
        color: "#8e9297",
        fontSize: "14px",
        marginTop: "10px",
      }}
    >
      {props.title}
    </Typography>
  );
};

export default FriendsTitle;
