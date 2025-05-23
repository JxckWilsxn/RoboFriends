import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import FriendList from '../pages/friendlist';
import { Layout } from '../Layout';

const App = () => {
    return (
        <div className='dark:bg-[#181818]'>
            <Router>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/friendlist' element={<FriendList/>}/>
                    </Route>
                </Routes>
            </Router>
        </div>
    )
} 

export default App; 