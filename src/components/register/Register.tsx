import React from 'react';
import AuthCard from '../common/AuthCard';
import Grid from '@mui/material/Grid';
import RegisterHeader from './RegisterHeader';
import RegisterForm from './RegisterForm';
import classes from './css/Register.module.css';

const Register = () => {
    return (
        <Grid className={classes.registerPage} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <AuthCard width='700px' height='530px'>
                    <RegisterHeader />
                    <RegisterForm buttonLabel='Sign Up'/>
                </AuthCard>
            </Grid>
        </Grid>
    )
}

export default Register;