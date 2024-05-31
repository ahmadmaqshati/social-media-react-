import { Container } from "@mui/material";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import axios from "axios";
import { useEffect } from "react";
/* import { LoginDialog } from "./LoginDialog"; */
import { useState } from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


export function Layout() {

    /* State for open and close (login-dielog) */
    const [openLogin, setOpenLogin] = React.useState(false);

    const handleOpenLogin = () => {
        setOpenLogin(true);
    };
    const handleCloseLogin = () => {
        setOpenLogin(false);
    };
    /* ==State for open and close login-dielog== */







    /* State for open and close (register-dielog) */
    const [openSignup, setOpenSignup] = React.useState(false);

    const handleOpenRegister = () => {
        setOpenSignup(true);
    };
    const handleCloseRegister = () => {
        setOpenSignup(false);
    };
    /* ==State for open and close register-dielog== */

    function loginRequest() {
        const pramars = {
            "username": "ahamdyarob",
            "password": '123456',
        }
        fetch('https://tarmeezacademy.com/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                pramars
            )
        }).then(res => res.json()).then(response => {
            console.log(response)
        })

    }
    useEffect(() => {
        loginRequest()
    }, [])

    /* 
    axios.post('https://tarmeezacademy.com/api/v1/login', pramars)
                .then((response) => {
                    console.log(response);
                })
    */


    return (
        <Container maxWidth='md'>
            <div>
                <div style={{ textAlign: "center" }}>
                    <h1 style={{ color: "grey" }}>بسم الله الرحمن الرحيم</h1>
                    <h1 style={{ color: "grey" }}>social media website</h1>
                </div>


                <div style={{ paddingTop: "30px" }}>
                    <AppBar className='topnav' position="static" style={{ padding: "15px 0", borderRadius: "5px", background: "white" }}>
                        <ul className='ul' style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div className='links'>
                                <Link to={'/'} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><a className='a' href="">Tarmeez</a></Link>
                                <Link to={'/'} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><a className='a' href="">Home</a></Link>
                                <Link to={'/profile'} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><a className='a' href="">Profile</a></Link>
                            </div>

                            <div className='btn-div'>
                                <Button className="login-btn" style={{}} variant='outlined' onClick={handleOpenLogin}>
                                    Login
                                </Button>
                                <Button className='register-btn' style={{ marginRight: "15px", }} variant='outlined' onClick={handleOpenRegister}>
                                    Register
                                </Button>
                            </div>
                        </ul>
                    </AppBar>



                    {/* Login-Dialog */}
                    <React.Fragment>
                        <BootstrapDialog
                            onClose={handleCloseLogin}
                            aria-labelledby="customized-dialog-title"
                            open={openLogin}
                            style={{ width: "100%" }}
                        >
                            <DialogTitle sx={{ m: 0, p: 2, fontWeight: "600", color: "black" }} id="customized-dialog-title">
                                Login
                            </DialogTitle>
                            <IconButton
                                aria-label="close"
                                onClick={handleCloseLogin}
                                sx={{
                                    position: 'absolute',
                                    right: 8,
                                    top: 8,
                                    color: (theme) => theme.palette.grey[500],
                                }}
                            >
                                <CloseIcon />
                            </IconButton>
                            <DialogContent dividers style={{ margin: "0 auto", width: "90%", display: "flex", flexDirection: "column", justifyContent: "space-evenly", height: "25vh" }}>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px" }}>
                                    <label style={{}}>Username</label>
                                    <TextField
                                        style={{ width: "100%" }}
                                        required
                                        id="outlined-required"
                                        /* label="Required" */
                                        defaultValue=""
                                    />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px" }}>
                                    <label style={{}}>Password</label>
                                    <TextField
                                        style={{ width: "100%" }}
                                        required
                                        id="outlined-required"
                                        /* label="Required" */
                                        defaultValue=""
                                    />
                                </div>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCloseLogin} className='modal-btn' variant="contained" style={{ background: "#6C757D" }} >
                                    Close
                                </Button>
                                <Button onClick={loginRequest} className='modal-btn' variant="contained" style={{ marginRight: "10px" }} >
                                    Login
                                </Button>

                            </DialogActions>
                        </BootstrapDialog>
                    </React.Fragment>
                    {/* Login-Dialog */}


                    {/* Register-Dialog */}
                    <React.Fragment>
                        <BootstrapDialog
                            onClose={handleCloseRegister}
                            aria-labelledby="customized-dialog-title"
                            open={openSignup}
                            style={{ width: "100%" }}
                        >
                            <DialogTitle sx={{ m: 0, p: 2, fontWeight: "600", color: "black" }} id="customized-dialog-title">
                                Login
                            </DialogTitle>
                            <IconButton
                                aria-label="close"
                                onClick={handleCloseRegister}
                                sx={{
                                    position: 'absolute',
                                    right: 8,
                                    top: 8,
                                    color: (theme) => theme.palette.grey[500],
                                }}
                            >
                                <CloseIcon />
                            </IconButton>
                            <DialogContent dividers style={{ margin: "0 auto", width: "90%", display: "flex", flexDirection: "column", justifyContent: "space-evenly", height: "36vh" }}>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px" }}>
                                    <label style={{}}>Profile Image:</label>
                                    <TextField
                                        name="upload-photo"
                                        type="file"
                                        style={{ width: "100%" }}
                                        required
                                        id="outlined-required"
                                        /* label="Required" */
                                        defaultValue=""
                                    />
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px" }}>
                                    <label style={{}}>name</label>
                                    <TextField
                                        style={{ width: "100%" }}
                                        required
                                        id="outlined-required"
                                        /* label="Required" */
                                        defaultValue=""
                                    />
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px" }}>
                                    <label style={{}}>Username</label>
                                    <TextField
                                        style={{ width: "100%" }}
                                        required
                                        id="outlined-required"
                                        /* label="Required" */
                                        defaultValue=""
                                    />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px" }}>
                                    <label style={{}}>Password</label>
                                    <TextField
                                        style={{ width: "100%" }}
                                        required
                                        id="outlined-required"
                                        /* label="Required" */
                                        defaultValue=""
                                    />
                                </div>


                            </DialogContent>

                            <DialogActions>
                                <Button onClick={handleCloseRegister} className='modal-btn' variant="contained" style={{ background: "#6C757D" }} >
                                    Close
                                </Button>
                                <Button className='modal-btn' variant="contained" style={{ marginRight: "10px" }} >
                                    Login
                                </Button>
                            </DialogActions>

                        </BootstrapDialog>
                    </React.Fragment>
                    {/* Register-Dialog */}
                </div>
            </div>

            <Outlet />
            {/*   <LoginDialog /> */}
        </Container>
    )
}
/* handleOpenLogin, handleCloseLogin */