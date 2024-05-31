/* import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export function LoginDialog() {

    const [openLogin, setOpenLogin] = React.useState(false);

    const handleOpenLogin = () => {
        setOpenLogin(true);
    };
    const handleCloseLogin = () => {
        setOpenLogin(false);
    };



    return (
        <div>
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
                                label="Required"
                                defaultValue=""
                            />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px" }}>
                            <label style={{}}>Password</label>
                            <TextField
                                style={{ width: "100%" }}
                                required
                                id="outlined-required"
                                label="Required"
                                defaultValue=""
                            />
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseLogin} className='modal-btn' variant="contained" style={{ background: "#6C757D" }} >
                            Close
                        </Button>
                        <Button  className='modal-btn' variant="contained" style={{ marginRight: "10px" }} >
                            Login
                        </Button>

                    </DialogActions>
                </BootstrapDialog>
            </React.Fragment>
        </div>
    )
}
 */




