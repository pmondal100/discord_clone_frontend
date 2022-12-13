import React from "react";
import classes from "../css/FriendsList.module.css";
import FriendsListItem from "./FriendsListItem";

const FriendsList = () => {
  const dummyFriendList = [
    {
      id: 1,
      username: "Ritesh",
      isOnline: true,
    },
    {
      id: 2,
      username: "Mayank",
      isOnline: false,
    },
    {
      id: 3,
      username: "Shyama",
      isOnline: false,
    },
  ];

  return (
    <div className={classes.mainContainer}>
      {dummyFriendList.map((currFriend) => {
        return (
          <FriendsListItem
            key={currFriend.id}
            id={currFriend.id}
            username={currFriend.username}
            isOnline={currFriend.isOnline}
          />
        );
      })}
    </div>
  );
};

export default FriendsList;
