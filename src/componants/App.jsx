import './App.css'
import { Routes, Route, Outlet, BrowserRouter } from 'react-router-dom';
import { MainPostsPage } from '../MainPages/MainPostsPage';
import { PostDetailsPage } from '../MainPages/PostDetailsPage';
import { ProfilePage } from '../MainPages/ProfilePage';
import { Layout } from './Layout';
import { responsiveFontSizes } from '@mui/material';
import { LoginDialog } from './LoginDialog';

import { useEffect } from "react";
import axios from "axios";

export function App() {

  return (

    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>

            <Route path='/' element={<MainPostsPage />} />
            <Route path='postdetails' element={<PostDetailsPage />} />
            <Route path='profile' element={<ProfilePage />} />

          </Route>
        </Routes>

      </BrowserRouter>

    </div>

  );
}
