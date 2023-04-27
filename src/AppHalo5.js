
import React, { useState, useEffect } from 'react'
import { Routes, Link, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HaloPlayers from './components/HaloPlayers';
import HaloMaps from './components/HaloMaps';
import HaloRanks from './components/HaloRanks';

import MatchHistory from './components/HaloMatchHistory';

// import HaloPlaylists from './components/HaloPlaylists';

import './css/navbar.css';

function AppUpload() {

    return (
        <div className="App">
            <Navbar/>

            <Routes>
                <Route path="/" element={<HaloPlayers/>} />
                <Route path="/maps" element={<HaloMaps />} />
                <Route path="/ranks" element={<HaloRanks />} />

                <Route path="/match-history" element={<MatchHistory />} />
                {/* <Route path="/playlists" element={<HaloPlaylists />} /> */}
            </Routes>
        </div>

    );
}

export default AppUpload;