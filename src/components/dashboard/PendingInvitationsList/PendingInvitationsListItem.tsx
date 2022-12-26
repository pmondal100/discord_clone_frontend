import React, { Dispatch, useState } from "react";
import { Box, Typography, Tooltip } from "@mui/material";
import Avatar from "../../common/Avatar";
import InvitationListButtons from "./InvitationListButtons";
import { connect } from "react-redux";
import { dispatchBodyStructure } from "../../common/utils/commonInterfaces";
import { setPendingInvitationsList } from "../../../store/actions/friendsActions";
import { pendingInvitations } from "../../common/utils/commonInterfaces";
import {
  acceptFriendInvitationAPI,
  rejectFriendInvitationAPI,
} from "../../../api";

interface propStructure {
  username: string;
  mail: string;
  id: number;
  pendingInvitationList: Array<pendingInvitations>;
  setModifiedPendingInvitationList?: Function;
}

const PendingInvitationsListItem = (props: propStructure) => {
  const {
    username,
    mail,
    id,
    pendingInvitationList,
    setModifiedPendingInvitationList,
  } = props;

  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const removeInviteFromList = (id: string): Array<pendingInvitations> => {
    return pendingInvitationList.filter((currentInvite) => {
      return currentInvite._id !== id;
    });
  };

  const handleAcceptInvitation = async (): Promise<number> => {
    try {
      const res = await acceptFriendInvitationAPI(id.toString());
      if (!res?.error) {
        setButtonsDisabled(true);
        if (setModifiedPendingInvitationList !== undefined) {
          setModifiedPendingInvitationList(removeInviteFromList(id.toString()));
        }
      } else {
        throw new Error("Something went wrong!!!");
      }
      return 0;
    } catch (e) {
      console.log(e);
      return -1;
    }
  };

  const handleRejectInvitation = async (): Promise<number> => {
    try {
      const res = await rejectFriendInvitationAPI(id.toString());
      if (!res?.error) {
        setButtonsDisabled(true);
        removeInviteFromList(id.toString());
        if (setModifiedPendingInvitationList !== undefined) {
          setModifiedPendingInvitationList(removeInviteFromList(id.toString()));
        }
      } else {
        throw new Error("Something went wrong!!!");
      }
      return 0;
    } catch (e) {
      console.log(e);
      return -1;
    }
  };

  return (
    <Tooltip title={mail}>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "42px",
            marginTop: "10px",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Avatar username={username} large={false} />
          <Typography
            sx={{
              marginLeft: "7px",
              fontWeight: 700,
              color: "#8e9297",
              flexGrow: "1",
              fontSize: "15px",
            }}
            variant="subtitle1"
          >
            {username}
          </Typography>
          <InvitationListButtons
            disabled={buttonsDisabled}
            handleAcceptInvitation={() => handleAcceptInvitation()}
            handleRejectInvitation={() => handleRejectInvitation()}
          />
        </Box>
      </div>
    </Tooltip>
  );
};

const mapDispatchToProps = (
  dispatch: Dispatch<dispatchBodyStructure>
): Object => {
  return {
    setModifiedPendingInvitationList: (
      modifiedList: Array<pendingInvitations>
    ) => dispatch(setPendingInvitationsList(modifiedList)),
  };
};

export default connect(null, mapDispatchToProps)(PendingInvitationsListItem);
