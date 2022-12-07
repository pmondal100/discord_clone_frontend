import React, { useState, useEffect, Dispatch } from "react";
import InputWithLabel from "../common/InputWithLabel";
import { Button, Typography, Tooltip } from "@mui/material";
import classes from "./css/RegisterForm.module.css";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { registerAction } from "../../store/actions/authActions";
import { registerReqBody } from "../common/utils/commonIntefaces";
import { dispatchBodyStructure } from "../common/utils/commonIntefaces";

interface propStructure {
  buttonLabel: string;
  registerAction: Function;
}

const RegisterForm = (props: propStructure) => {
  const navigate = useNavigate();

  const { buttonLabel } = props;

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    setButtonDisabled(!validateLoginSchema());
    // eslint-disable-next-line
  }, [email, username, password]);

  const LoginValidationSchemas: registerReqBody = {
    email: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
    username: "^[a-zA-Z]{6,12}$",
    password: "^[a-zA-Z]{6,12}$",
  };

  const onLoginHandler = () => {
    props.registerAction({ email, password, username }, navigate);
    setEmail("");
    setPassword("");
  };

  const validateLoginSchema = (): boolean => {
    if (
      new RegExp(LoginValidationSchemas.email).exec(email) &&
      new RegExp(LoginValidationSchemas.username).exec(username) &&
      new RegExp(LoginValidationSchemas.password).exec(password)
    ) {
      return true;
    }

    return false;
  };

  const onRedirectHandler = (e: React.MouseEvent<HTMLElement>) => {
    navigate("/login");
  };

  return (
    <div className={classes.registerForm}>
      <InputWithLabel
        value={email}
        setValue={setEmail}
        validationSchema={LoginValidationSchemas.email}
        popoverErrorText="Please enter a valid email address."
        label="Email"
        placeholder="Enter email here"
        type="email"
      />
      <InputWithLabel
        value={username}
        setValue={setUsername}
        validationSchema={LoginValidationSchemas.username}
        popoverErrorText="Username should be between 6 to 12 characters in length."
        label="Username"
        placeholder="Enter username here"
        type="text"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        validationSchema={LoginValidationSchemas.password}
        popoverErrorText="Password should be between 6 to 12 characters in length."
        label="Password"
        placeholder="Enter password here"
        type="password"
      />
      <Tooltip title="Press the button to Register" placement="top" arrow>
        <span>
        <Button
          sx={{
            marginLeft: "2%",
            marginTop: "5%",
            width: "20%",
            marginBottom: "10px",
          }}
          disabled={buttonDisabled}
          onClick={onLoginHandler}
          className={classes.button}
          variant="contained"
        >
          {buttonLabel}
        </Button>
        </span>
      </Tooltip>
      <Typography
        sx={{
          marginLeft: "2%",
          display: "flex",
          alignItems: "center",
          fontSize: "12px",
          color: "#202020",
        }}
        className={classes.footer}
      >
        Already an existing user?
        <span onClick={onRedirectHandler} className={classes.linkText}>
          Click here to login.
        </span>
      </Typography>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<dispatchBodyStructure>) => {
  return {
    registerAction: (userDetails: registerReqBody, navigate: Function) =>
      dispatch(registerAction(userDetails, navigate)),
  };
};

export default connect(null, mapDispatchToProps)(RegisterForm);
