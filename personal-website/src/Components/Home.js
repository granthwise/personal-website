import React, { useState, useEffect } from "react";
import {Button, Container, CssBaseline, TextField, Divider, Typography, Box, Paper, IconButton} from "@mui/material";
import { themeProvider, createTheme } from '@mui/material/styles';
// import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Header from './Header';


const Home = () => {
	// Eventually move below state variables to Redux.
	const [username, setUsername] = useState("");
	
	let navigate = useNavigate();

	return (
        
		<div>
            <CssBaseline />
            <Header/>
		</div>
	);
};

export default Home