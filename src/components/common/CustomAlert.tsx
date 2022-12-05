import React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertColor, AlertProps } from "@mui/material/Alert";
import { connect } from 'react-redux';
import { closeAlert } from '../../store/actions/alertActions';

interface propStructure {
  alertType?: AlertColor | undefined;
  alertMessage?: string;
  alertOpen?: boolean;
  hideAlert?: Function;
}

interface storeStructure {
  authReducer: Object,
  alertReducer: Object
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomAlert = (props: propStructure) => {

  const handleClose = (
  ) => {
    props.hideAlert?.();
  };
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={props.alertOpen}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity={props.alertType}
          sx={{ width: "100%" }}
        >
          {props.alertMessage}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

const mapStateToProps = (state: storeStructure) => {
  return {
    ...state.alertReducer
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    hideAlert: () => dispatch(closeAlert())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomAlert);
