import React, { useState, useEffect } from "react";
import InputWithLabel from "../common/InputWithLabel";
import { Button, Typography, Tooltip } from "@mui/material";
import classes from "./css/LoginForm.module.css";
import { useNavigate } from 'react-router-dom';

interface propStructure {
    buttonLabel: string,
}

interface validationSchemaStructure {
    email: string,
    password: string
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

    const LoginValidationSchemas: validationSchemaStructure = {
        email: '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$',
        password: '^[a-zA-Z]{6,12}$'
    }

    const onLoginHandler = () => {
        console.log('testing for commit');
        setEmail('');
        setPassword('');
        console.log('API call goes here!!!', email, password);
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
        <>
            <InputWithLabel value={email} setValue={setEmail} validationSchema={LoginValidationSchemas.email} popoverErrorText="Please enter a valid email address." label="Email" placeholder="Enter email here" type="email" />
            <InputWithLabel value={password} setValue={setPassword} validationSchema={LoginValidationSchemas.password} popoverErrorText="Password should be between 6 to 12 characters in length." label="Password" placeholder="Enter password here" type="password" />
                    <Tooltip title='Press the button to Login' placement='top' arrow><Button sx={{
                        marginLeft: '2%',
                        marginTop: '5%',
                        width: '20%',
                        marginBottom: '10px',
                    }} disabled={buttonDisabled} onClick={onLoginHandler} className={classes.button} variant="contained">{buttonLabel}</Button>
                    </Tooltip>
            <Typography sx={{
                marginLeft: '2%',
                display: 'flex',
                alignItems: 'center',
                fontSize: '12px',
                color: '#202020'
            }} className={classes.footer}>Need an account?<span onClick={onRedirectHandler} className={classes.linkText}>Create an account</span></Typography>
        </>
    )
}

export default LoginForm;