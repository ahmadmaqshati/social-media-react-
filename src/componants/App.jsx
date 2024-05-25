/* import logo from './logo.svg'; */
/* import App from './componants/App'; */
import './App.css'
import MainPostsPage from './MainPostsPage';
import { Routes, Route, Outlet, BrowserRouter } from 'react-router-dom';
import Profile from './Profile';
import PostDetails from './PostDetails';
import TopNav from './TopNav';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Layout from './Layout';


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>

            <Route path='/' element={<MainPostsPage />} />
            <Route path='postdetails' element={<PostDetails />} />
            <Route path='profile' element={<Profile />} />

          </Route>
        </Routes>

      </BrowserRouter>



    </div>

  );
}
