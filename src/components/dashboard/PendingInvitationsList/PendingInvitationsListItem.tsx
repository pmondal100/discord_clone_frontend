import React, { useState } from "react";
import { Box, Typography, Tooltip } from "@mui/material";
import Avatar from "../../common/Avatar";
import InvitationListButtons from "./InvitationListButtons";

interface propStructure {
  username: string;
  mail: string;
  id: number;
  acceptFriendInvitation: Function;
  rejectFriendInvitation: Function;
}

const PendingInvitationsListItem = (props: propStructure) => {
  const { username, mail, id, acceptFriendInvitation, rejectFriendInvitation } = props;

  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const handleAcceptInvitation = (): any => {
    acceptFriendInvitation(id);
    setButtonsDisabled(true);
  };

  const handleRejectInvitation = (): any => {
    rejectFriendInvitation(id);
    setButtonsDisabled(true);
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
            handleAcceptInvitation={handleAcceptInvitation}
            handleRejectInvitation={handleRejectInvitation}
          />
        </Box>
      </div>
    </Tooltip>
  );
};

export default PendingInvitationsListItem;
