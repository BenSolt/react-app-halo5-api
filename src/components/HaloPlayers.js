import '../App.css';

import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

import HaloPlayerCard from "../components/HaloPlayerCard";
import HaloCardTest from "../components/HaloCardTest";

import { Routes, Link, Switch, Route } from 'react-router-dom';

function HaloPlayers() {


  // const players = [
  //   'ACA AC3',
  //   'AT WILL 2703',
  //   'Dash MacReady',
  //   'DePal912',
  //   'Divine King15',
  //   'Etherblades89',
  //   'goopboy123',
  //   'ImagelessBean',
  //   'I POLSKA I',
  //   'I SpiritHope I',
  //   'Killgear',
  //   'MATRICKX',
  //   'mdsolt',
  //   'Mr DomeFace',
  //   'muscleman0927',
  //   'primelos',
  //   'PaulSolt',
  //   'Sausag3Tickl3r',
  //   'S0 HELP ME GOD',
  //   'thefinaledge',
  //   'TheMastaChamp',
  //   'TomASck',
  //   'VeteranFerret58',
  //   'Wife H8s Halo',
  //   'XD marman',
  //   'Xray Squad 90',
  //   'Xtianumbra',
  // ]

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  function getInfo2() {
    // setIsLoading(false);
    setIsSearching(true);
  };


  function getInfo() {
    axiosWithAuth()
      .get(`https://www.haloapi.com/stats/h5/servicerecords/arena?players=${query}`)
      .then(res => {
        const info = res.data.Results;
        // const info = res.data.Results.filter(p =>
        //   p.Id.toLowerCase().includes(query.toLowerCase()),
        // );
        console.log(info);
        setData(info);
        //setIsLoading(false);
        setIsSearching(true);
      });
  }

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <div className="SearchbarContainer" >
        <h3 className="searchtext">Search Player Stats:</h3>
        <div className="inputContainer">
          <input className="Input"
            type="text"
            onChange={handleInputChange}
            value={query}
            name="name"
            placeholder="Enter Xbox Live Username"
            autoComplete="off"
          />
          <button className="buttonSearch" onClick={getInfo2}>Search</button>
        </div>
      </div>

      <div>

        {isSearching ? (<div>
          {isLoading ? (
            <div><h2>Loading...</h2></div>
          ) : (
            <div className="cardContainer">

              <HaloCardTest />

              {/* {data.map(p => {
                return < HaloPlayerCard key={p.Id} p={p} />
              })} */}
            </div>
          )}

        </div>) : (<div></div>)}
      </div>
    </div>
  );
}

export default HaloPlayers;