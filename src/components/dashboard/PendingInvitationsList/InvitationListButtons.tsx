import React from "react";
import { Box, IconButton } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

interface propsStructure {
  disabled: boolean;
  handleAcceptInvitation: () => {};
  handleRejectInvitation: () => {};
}

const InvitationListButtons = (props: propsStructure) => {
  const { disabled, handleAcceptInvitation, handleRejectInvitation } = props;
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <IconButton
        disabled={disabled}
        sx={{
          color: "#3ba55d",
          marginRight: "-3px",
        }}
        onClick={handleAcceptInvitation}
      >
        <DoneIcon fontSize="small" />
      </IconButton>
      <IconButton
        disabled={disabled}
        sx={{
          color: "#de5246",
          marginLeft: "-3px",
        }}
        onClick={handleRejectInvitation}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default InvitationListButtons;
