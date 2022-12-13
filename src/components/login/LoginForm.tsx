import React, { useState, useEffect, Dispatch } from "react";
import InputWithLabel from "../common/InputWithLabel";
import { Typography, Tooltip } from "@mui/material";
import classes from "./css/LoginForm.module.css";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { loginAction } from "../../store/actions/authActions";
import { loginReqBody } from "../common/utils/commonIntefaces";
import validators from "../common/utils/validators";
import CustomButton from "../common/CustomButton";

interface propStructure {
  buttonLabel: string;
  loginAction: Function;
}

const LoginForm = (props: propStructure) => {
  const navigate = useNavigate();

  const { buttonLabel } = props;

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    setButtonDisabled(!validateLoginSchema());
    // eslint-disable-next-line
  }, [email, password]);

  const onLoginHandler = (): void => {
    props.loginAction({ email, password }, navigate);
    setEmail("");
    setPassword("");
  };

  const validateLoginSchema = (): boolean => {
    if (
      new RegExp(validators.email).exec(email) &&
      new RegExp(validators.password).exec(password)
    ) {
      return true;
    }

    return false;
  };

  const onRedirectHandler = (e: React.MouseEvent<HTMLElement>) => {
    navigate("/register");
  };

  return (
    <div className={classes.loginForm}>
      <InputWithLabel
        value={email}
        setValue={setEmail}
        validationSchema={validators.email}
        popoverErrorText="Please enter a valid email address."
        label="Email"
        placeholder="Enter email here"
        type="email"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        validationSchema={validators.password}
        popoverErrorText="Password should be between 6 to 12 characters in length."
        label="Password"
        placeholder="Enter password here"
        type="password"
      />
      <Tooltip title="Press the button to Login" placement="right-end" arrow>
        <span>
          <CustomButton
            disabled={buttonDisabled}
            onClickHandler={onLoginHandler}
            buttonLabel={buttonLabel}
          />
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
      >
        Need an account?
        <span onClick={onRedirectHandler} className={classes.linkText}>
          Create an account
        </span>
      </Typography>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    loginAction: (userDetails: loginReqBody, navigate: Function) =>
      dispatch(loginAction(userDetails, navigate)),
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);
