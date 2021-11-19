import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Login = () => {
    const [loginUserData, setLoginUser] = useState({})
    const { user, loginUser, isLoading, error } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginUserData };
        newLoginData[field] = value;
        setLoginUser(newLoginData);
    }
    const handleLogin = e => {
        loginUser(loginUserData.email, loginUserData.password, location, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLogin}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            name="password"
                            onChange={handleOnChange}
                            type="password"
                            variant="standard"
                        />
                        <Button sx={{ width: '75%', m: 1 }}
                            type="submit" variant="contained">Login</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/register">
                            <Button variant="text">New User ? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Login Successfully!</Alert>}
                        {error && <Alert severity="error">{error}</Alert>}
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;