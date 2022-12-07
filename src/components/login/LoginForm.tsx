import React, { useState, useEffect, Dispatch } from "react";
import InputWithLabel from "../common/InputWithLabel";
import { Button, Typography, Tooltip } from "@mui/material";
import classes from "./css/LoginForm.module.css";
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAction } from '../../store/actions/authActions';
import { loginReqBody } from '../common/utils/commonIntefaces';
import { dispatchBodyStructure } from '../common/utils/commonIntefaces';

interface propStructure {
    buttonLabel: string,
    loginAction: Function
}

const LoginForm = (props: propStructure) => {
    const navigate = useNavigate();

    const { buttonLabel } = props;

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

    useEffect(() => {    
        setButtonDisabled(!validateLoginSchema());
        // eslint-disable-next-line
    }, [email, password])

    const LoginValidationSchemas: loginReqBody = {
        email: '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$',
        password: '^[a-zA-Z]{6,12}$'
    }

    const onLoginHandler = () => {
        props.loginAction({ email, password }, navigate);
        setEmail('');
        setPassword('');
    }

    const validateLoginSchema = (): boolean => {
        if (new RegExp(LoginValidationSchemas.email).exec(email) && new RegExp(LoginValidationSchemas.password).exec(password)) {
            return true;
        }

        return false;
    }

    const onRedirectHandler = (e: React.MouseEvent<HTMLElement>) => {
        navigate('/register');
    }

    return (
        <div className={classes.loginForm}>
            <InputWithLabel value={email} setValue={setEmail} validationSchema={LoginValidationSchemas.email} popoverErrorText="Please enter a valid email address." label="Email" placeholder="Enter email here" type="email" />
            <InputWithLabel value={password} setValue={setPassword} validationSchema={LoginValidationSchemas.password} popoverErrorText="Password should be between 6 to 12 characters in length." label="Password" placeholder="Enter password here" type="password" />
                    <Tooltip title='Press the button to Login' placement='right-end' arrow><span><Button sx={{
                        marginLeft: '2%',
                        marginTop: '5%',
                        width: '20%',
                        marginBottom: '10px',
                    }} disabled={buttonDisabled} onClick={onLoginHandler} variant="contained">{buttonLabel}</Button>
                    </span>
                    </Tooltip>
            <Typography sx={{
                marginLeft: '2%',
                display: 'flex',
                alignItems: 'center',
                fontSize: '12px',
                color: '#202020'
            }}>Need an account?<span onClick={onRedirectHandler} className={classes.linkText}>Create an account</span></Typography>
        </div>
    )
}

const mapDispatchToProps = (dispatch: Dispatch<dispatchBodyStructure>) => {
    return {
        loginAction: (userDetails: loginReqBody, navigate: Function) => dispatch(loginAction(userDetails, navigate))
    }
}

export default connect(null, mapDispatchToProps)(LoginForm);