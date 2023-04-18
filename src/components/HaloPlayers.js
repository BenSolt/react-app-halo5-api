import '../App.css';

import React, { useEffect, useState } from "react";
//import axios from "axios";
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
    if (isLoading) return
  }, [isLoading])

  function getInfo() {
    console.log("SUBMIT")
      axiosWithAuth()
        .get(`https://www.haloapi.com/stats/h5/servicerecords/arena?players=${query}`)
        .then(res => {
          const info = res.data.Results;
          // const info = res.data.Results.filter(p =>
          //   p.Id.toLowerCase().includes(query.toLowerCase()),
          // );
          console.log(info);
          setData(info);
          setIsLoading(false);
          setIsSearching(true);
        });
  }

  // useEffect(() => {
  //   axiosWithAuth()
  //     .get(`https://www.haloapi.com/stats/h5/servicerecords/arena?players=${players}`)
  //     .then(res => {
  //       const info = res.data.Results.filter(p =>
  //         p.Id.toLowerCase().includes(query.toLowerCase()),
  //       );
  //       console.log(res.data.Results);
  //       setData(info);
  //       setIsLoading(false);
  //     });
  // }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <div className="Searchbar" >
        <h3 className='searchtext'>Search Player Stats:</h3>

        <div>
        <input className="Input"
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          placeholder="Enter Xbox Live Username"
          autoComplete="off"
        />
        <button onClick={getInfo}>Search</button>
        </div>
      </div>
      <div>
      <div className="cardContainer">
      <HaloCardTest />
      </div>
        {isSearching ? (<div>

          {isLoading ? (
          <div><h2>Loading...</h2></div>
        ) : (
          <div className="cardContainer">
            {data.map(p => {
              return < HaloPlayerCard key={p.Id} p={p} />
            })}
          </div>
        )}

        </div>) : (<div></div>)}
      </div>
    </div>
  );
}

export default HaloPlayers;