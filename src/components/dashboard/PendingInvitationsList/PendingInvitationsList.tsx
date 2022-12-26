import React from "react";
import classes from "../css/PendingInvitationList.module.css";
import PendingInvitationsListItem from "./PendingInvitationsListItem";
import { connect } from "react-redux";
import { storeStructure } from "../../common/utils/commonInterfaces";

interface propStructure {
  invitationList?: Array<Object> | any;
}

const PendingInvitationList = (props: propStructure) => {
  const invitations = [...props.invitationList];

  return (
    <div className={classes.mainContainer}>
      {invitations.map((currInvite) => {
        return (
          <PendingInvitationsListItem
            username={currInvite.username}
            key={currInvite._id}
            mail={currInvite.email}
            id={currInvite._id}
            pendingInvitationList={invitations}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state: storeStructure) => {
  return {
    ...state.friendsReducer,
  };
};

export default connect(mapStateToProps)(PendingInvitationList);
