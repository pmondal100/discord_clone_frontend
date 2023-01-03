import React from "react";
import classes from "../css/FriendsList.module.css";
import FriendsListItem from "./FriendsListItem";
import { connect } from 'react-redux';
import { storeStructure } from "../../common/utils/commonInterfaces";
import _ from 'lodash';

interface propStructure {
  friendsList?: {id: string, isOnline: boolean, username: string}[]
}
const FriendsList = (props: propStructure) => {
  const localFriendsList: {id: string, isOnline: boolean, username: string}[] | undefined = _.orderBy(props.friendsList, 'username');
  return (
    <div className={classes.mainContainer}>
      {localFriendsList?.map((currFriend: any) => {
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

const mapStateToProps = (state: storeStructure) => {
  return {
    ...state.friendsReducer
  }
}

export default connect(mapStateToProps)(FriendsList);
