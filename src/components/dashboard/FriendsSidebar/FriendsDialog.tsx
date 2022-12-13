import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InputWithLabel from "../../common/InputWithLabel";
import validators from "../../common/utils/validators";

interface propStructure {
  open: boolean;
  handleClose: any;
  emailFieldValue: string;
  setEmailFieldValue: Function;
}

export default function FormDialog(props: propStructure) {
  const { open, handleClose, emailFieldValue, setEmailFieldValue } = props;
  const validateFriendEmail = (email: string): boolean => {
    if (new RegExp(validators.email).exec(email)) {
      return true;
    }

    return false;
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: "150%",
            backgroundColor: '#484848',
            color: 'white'
          },
        }}
      >
        <DialogTitle style={{ marginLeft: "2%" }}>Add Friend</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ marginLeft: "2%", color: 'white' }}>
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
            onClick={handleClose}
          >
            Send Request
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
