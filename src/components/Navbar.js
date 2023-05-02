import React, { useState, useEffect } from 'react'
import { Routes, Link, Switch, Route } from 'react-router-dom';

import '../css/navbar.css';

function Navbar() {


    return (
        <div>
            <nav className="navbarContainer">
                    <h1 className="title">HALO 5 API</h1>
                <div>
                    <Link to="/" className="navItem">Home</Link>
                    <Link to="/maps" className="navItem">Maps</Link>
                    <Link to="/ranks" className="navItem">Ranks</Link>

                    <Link to="/match-history" className="navItem">History</Link>
                    {/* <Link to="/playlists" className="navItem">Playlists</Link> */}

                </div>
            </nav>
        </div>
    )
}
export default Navbar;