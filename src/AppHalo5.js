
import React, { useState, useEffect } from 'react'
import { Routes, Link, Switch, Route } from 'react-router-dom';
import HaloPlayers from './components/HaloPlayers';
import HaloMaps from './components/HaloMaps';

import './css/navbar.css';

function AppUpload() {

    return (
        <div className="App">
            <nav className="navbarContainer">
                <h1 className='title'>HALO 5 API</h1>
                    <Link to="/" className="navItem">Home</Link>
                    <Link to="/maps" className="navItem">Maps</Link>
            </nav>

        
            <Routes>
                <Route path="/" element={<HaloPlayers/>} />
                <Route path="/maps" element={<HaloMaps />} />
            </Routes>
        </div>

    );
}

export default AppUpload;