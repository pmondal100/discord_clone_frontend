import React, { useState } from "react";
import classes from "../css/FriendsSidebar.module.css";
import Button from "@mui/material/Button";
import FriendsList from "./FriendsList";
import PendingInvitationList from "../PendingInvitationsList/PendingInvitationsList";
import FriendsTitle from "./FriendsTitle";
import FriendsDialog from "./FriendsDialog";
import CustomButton from "../../common/CustomButton";

const FriendsSidebar = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [friendEmail, setFriendEmail] = useState('');

  const handleDialogClickOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setFriendEmail('');
  };

  return (
    <div className={classes.mainContainer}>
      <Button
        onClick={handleDialogClickOpen}
        variant="contained"
        color="success"
        size="small"
        sx={{
          marginTop: "10px",
          marginLeft: "5px",
          width: "80%",
          height: "30px",
          textTransform: "none",
          fontSize: "14px",
        }}
      >
        Add Friend
      </Button>
      <FriendsDialog open={dialogOpen} handleClose={handleDialogClose} emailFieldValue={friendEmail} setEmailFieldValue={setFriendEmail}/>
      <FriendsTitle title="Private Message" />
      <FriendsList />
      <FriendsTitle title="Invitations" />
      <PendingInvitationList />
    </div>
  );
};

export default FriendsSidebar;
