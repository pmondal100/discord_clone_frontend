import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InputWithLabel from "../../common/InputWithLabel";
import validators from "../../common/utils/validators";
import { connect } from "react-redux";
import { sendInvitation } from "../../../store/actions/friendsActions";

interface propStructure {
  open: boolean;
  handleClose: any;
  emailFieldValue: string;
  setEmailFieldValue: Function;
  sendInvite: Function;
  keepDialogOpen?: boolean;
}

const FormDialog = (props: propStructure) => {
  const {
    open,
    handleClose,
    emailFieldValue,
    setEmailFieldValue,
    sendInvite,
    keepDialogOpen,
  } = props;
  const validateFriendEmail = (email: string): boolean => {
    if (new RegExp(validators.email).exec(email)) {
      return true;
    }

    return false;
  };

  const handleSend = async () => {
    await sendInvite({ targetInviteEmail: emailFieldValue }, handleClose);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: "150%",
            backgroundColor: "#484848",
            color: "white",
          },
        }}
      >
        <DialogTitle style={{ marginLeft: "2%" }}>Add Friend</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ marginLeft: "2%", color: "white" }}>
            Enter email address of friend you would like to invite
          </DialogContentText>
          <InputWithLabel
            label=""
            placeholder="Enter email"
            type="text"
            value={emailFieldValue}
            setValue={setEmailFieldValue}
            validationSchema={validators.email}
            popoverErrorText="Please enter a valid email address."
          />
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              marginBottom: "10px",
            }}
            size="small"
            variant="contained"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            sx={{
              marginBottom: "10px",
              marginRight: "10px",
            }}
            size="small"
            variant="contained"
            disabled={!validateFriendEmail(emailFieldValue)}
            onClick={handleSend}
          >
            Send Request
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    sendInvite: (mailObj: { targetInviteEmail: string }, handleClose: Function) =>
      dispatch(sendInvitation(mailObj, handleClose))
  };
};

export default connect(null, mapDispatchToProps)(FormDialog);
