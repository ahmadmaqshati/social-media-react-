import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

import './MainPostsPage.css'
import CustomizedDialogs from './ModalOrDialog';
import { MuiFileInput } from 'mui-file-input'

import * as React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import Post from './Post';
import TopNav from './TopNav';


const MyComponent = () => {
    const [value, setValue] = React.useState(null)

    const handleChange = (newValue) => {
        setValue(newValue)
    }

    return <MuiFileInput value={value} onChange={handleChange} />
}

export default function MainPostsPage() {
    return (
        <Box>
            {/*  <TopNav /> */}

            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />

        </Box>


    )
}


