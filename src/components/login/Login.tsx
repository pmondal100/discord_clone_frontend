import React from 'react';
import AuthCard from '../common/AuthCard';
import Grid from '@mui/material/Grid';
import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';
import classes from './css/Login.module.css';

const Login = () => {
    return (
        <Grid className={classes.loginPage} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <AuthCard width='700px' height='450px'>
                    <LoginHeader />
                    <LoginForm buttonLabel='Log in'/>
                </AuthCard>
            </Grid>
        </Grid>
    )
}

export default Login;