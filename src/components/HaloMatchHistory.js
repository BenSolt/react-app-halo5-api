import '../App.css';
import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import HaloMatchHistoryCard from "../components/HaloMatchHistoryCard";
import HaloMapCard from "../components/HaloMapCard";


function HaloPlaylists() {
    const [dataMatch, setDataMatch] = useState([]);
    const [dataMap, setDataMap] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSearching, setIsSearching] = useState(false);

    // const [player, setPlayer] = useState("")
    const [player, setPlayer] = useState("")
    const [mode, setMode] = useState("arena");
    const [count, setCount] = useState(1);  //3
    //const [query, setQuery] = useState("");

    useEffect(() => {
        if (isLoading) return
    }, [isLoading])

    // HALO 5 API: Player Match History //////////////////////////////////////////////////
    function getInfoMatch() {
        axiosWithAuth()
            // .get('https://www.haloapi.com/stats/h5/players/{player}/matches[?modes][&start][&count][&include-times]')
            .get(`https://www.haloapi.com/stats/h5/players/${player}/matches?modes=${mode}&count=${count}`)
            .then(res => {
                const info = res.data.Results
                console.log("MATCH HISTORY:", info);
                setDataMatch(info);
                setIsLoading(false);
                setIsSearching(true);
            })
    }


    const handleInputChange = event => {
        setPlayer(event.target.value);
    };

    return (
        <div>
            <div>
                <div className="SearchbarContainer" >
                    <h3 className="searchtext">HALO 5 Player Match History</h3>
                    <div className="inputContainer">
                        <input className="Input"
                            type="text"
                            onChange={handleInputChange}
                            value={player}
                            name="name"
                            placeholder="Enter Xbox Live Username"
                            autoComplete="off"
                        />
                        <button className='buttonSearch' onClick={getInfoMatch}>Search</button>
                    </div>
                </div>

                {isSearching ? (<div>
                    {isLoading ? (
                        <div>Loading...</div>
                    ) : (
                        <div className="cardContainer">
                            {dataMatch.map(m => {
                                return < HaloMatchHistoryCard key={m.Id.MatchId} m={m} />
                            })}
                        </div>
                    )}
                </div>) : (<div></div>)}
            </div>
        </div>
    )
}
export default HaloPlaylists;