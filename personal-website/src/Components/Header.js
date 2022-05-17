import React, { useState, useEffect } from "react";
import {Button, Container, CssBaseline, TextField, Divider, Typography, Box, Paper, IconButton, AppBar, Toolbar, makeStyles, Dialog, DialogActions,DialogContent, DialogContentText,DialogTitle, useMediaQuery} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import DropdownMenu from "./DropdownMenu"
import { useNavigate } from "react-router-dom";

const Header = () => {
	// Eventually move below state variables to Redux.
	const [open , setOpen] = useState(false);
	
	let navigate = useNavigate();

    const handleOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
      };

	return (
        <AppBar position="static">
            <Toolbar>
                <DropdownMenu>test</DropdownMenu>

                <Typography variant="h6" >
                Title
                </Typography>

                <Button color="inherit" onClick={handleOpen}>
                Signup
                </Button>
                
            </Toolbar>
                <Dialog 
                open={open} 
                onClose={handleClose}
                > 
                    <DialogTitle id="responsive-dialog-title">
                    {"Use Google's location service?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Let Google help apps determine location. This means sending anonymous
                            location data to Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                            Disagree
                        </Button>
                        <Button onClick={handleClose} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
             </Dialog>
        </AppBar>
	);
};

export default Header