
import React, { useState, useEffect } from 'react'
import { Routes, Link, Switch, Route } from 'react-router-dom';
import HaloPlayers from './components/HaloPlayers';

import './css/navbar.css';

function AppUpload() {

    return (
        <div className="App">
            <h1>HALO APP</h1>
            <nav className="navbarContainer">
                <Link to="/" className="navItem">Home Gallery</Link>
                <Link to="/players" className="navItem">Players</Link>
            </nav>
            
            <Routes>
                {/* <Route path="/" element={<HomeGallery />} /> */}
                <Route path="/players" element={<HaloPlayers />} />
            </Routes>
        </div>

    );
}

export default AppUpload;