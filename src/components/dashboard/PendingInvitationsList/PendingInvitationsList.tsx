import React from "react";
import classes from "../css/PendingInvitationList.module.css";
import PendingInvitationsListItem from "./PendingInvitationsListItem";

const PendingInvitationList = () => {
  const invitations = [
    {
      _id: 1,
      senderId: {
        username: "Someuser 1",
        mail: "someuser1@testserver.com",
      },
    },
    {
      _id: 2,
      senderId: {
        username: "Someuser 2",
        mail: "someuser2@testserver.com",
      },
    },
    {
      _id: 3,
      senderId: {
        username: "Someuser 3",
        mail: "someuser3@testserver.com",
      },
    },
  ];
  return (
    <div className={classes.mainContainer}>
      {invitations.map((currInvite) => {
        return (
          <PendingInvitationsListItem
            username={currInvite.senderId.username}
            key={currInvite._id}
            mail={currInvite.senderId.mail}
            id={currInvite._id}
            acceptFriendInvitation={() => {}}
            rejectFriendInvitation={() => {}}
          />
        );
      })}
    </div>
  );
};

export default PendingInvitationList;
