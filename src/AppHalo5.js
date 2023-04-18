
import React, { useState, useEffect } from 'react'
import { Routes, Link, Switch, Route } from 'react-router-dom';
import HaloPlayers from './components/HaloPlayers';

import './css/navbar.css';

function AppUpload() {

    return (
        <div className="App">
            <nav className="navbarContainer">
                <h1 className='title'>HALO 5 API</h1>
                    <Link to="/" className="navItem">Home Gallery</Link>
                    <Link to="/players" className="navItem">Players</Link>
            </nav>

            <Routes>
                <Route path="/players" element={<HaloPlayers />} />
            </Routes>
        </div>

    );
}

export default AppUpload;