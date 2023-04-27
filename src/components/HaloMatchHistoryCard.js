import React, { useEffect, useState, useSyncExternalStore } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

import HaloMatchResultCard from "./HaloMatchResultCard";

import '../css/matchCard.css';

export default function HaloMapCard({ m }) {

    const [dataMap, setDataMap] = useState([]);
    let color = ""

    const [dataMatch, setDataMatch] = useState([]);

    // useEffect(() => {
    //     axiosWithAuth()
    //         .get('https://www.haloapi.com/metadata/h5/metadata/maps')
    //         .then(res => {
    //             const info = res.data
    //             setDataMap(info);
    //             // setIsLoading(false);
    //             // setIsSearching(true);
    //         });
    // }, [])

    function getInfoMap() {
        axiosWithAuth()
            .get('https://www.haloapi.com/metadata/h5/metadata/maps')
            .then(res => {
                const info = res.data
                setDataMap(info);
                // setIsLoading(false);
                // setIsSearching(true);
            });
    }


    function getMatchResults() {
        axiosWithAuth()
            //.get(`https://www.haloapi.com/stats/h5/custom/matches/{matchId}`)
            .get(`https://www.haloapi.com/stats/h5/custom/matches/${m?.Id.MatchId}`)

            //.get(`https://www.haloapi.com/stats/h5/custom/matches/44ada008-a7b8-46d4-b8d5-6ab9b76ca41d`)
            .then(res => {
                const info = res.data.PlayerStats
                console.log(info)
                setDataMatch(info);
                // setIsLoading(false);
                // setIsSearching(true);
            });
    }



    return (
        <div >
            <div className="matchCard">
                <div className="mapImageSection1">
                    {dataMap.map(a => {
                        if (m?.MapId === a.id) {
                            return (
                                <div key={a.id}>
                                    <h2>{a?.name}</h2>
                                    <img className="matchImage" src={a?.imageUrl} alt="map images" />
                                </div>
                            )
                        }
                    })}
                </div>

                <div className="section2">
                    {/* <h3>{m?.MapId}</h3> */}
                    {/* PLAYER INFO /////////////////////////////// */}
                    <div>{m.Players.map(i => {
                        if (i.Rank <= 4) {
                            color = 'green'
                        } else {
                            color = 'red'
                        }

                        const KillsAssits = i.TotalKills + i.TotalAssists
                        const KillDivide = KillsAssits / i.TotalDeaths * 1
                        const KDA = KillDivide.toFixed(2);

                        return (
                            <div key={i.Player.Gamertag} >
                                <div className={color}>
                                    <h2 className='textStats'>{i.Player.Gamertag}</h2>

                                    <h2 className='textStats'>Rank: {i.Rank}th</h2>
                                </div>
                                <div className="matchStats">
                                    <h4 className='textStats'>K/D Ratio: {KDA}</h4>
                                    <h4 className='textStats'>Kills: {i.TotalKills}</h4>
                                    <h4 className='textStats'>Assits: {i.TotalAssists}</h4>
                                    <h4 className='textStats'>Deaths: {i.TotalDeaths}</h4>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                    {/* TEAMS INFO /////////////////////////// */}
                    <div>{m.Teams.map(i => {
                        return (
                            <div key={i.Id} >
                                <div className="matchStats">
                                    <h4 className='textStats'>{i.Rank}</h4>
                                    <h4 className='textStats'>Score: {i.Score}</h4>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
            <button onClick={getMatchResults}>Match Results</button>
            <button className='buttonSearch' onClick={getInfoMap}>Search</button>
            
            <div className="matchCard">
                <div className="matchCardContainer">
                    {dataMatch.map(m => {
                        return <HaloMatchResultCard key={m.Player.Gamertag} m={m} />
                    })}
                </div>
            </div>
        </div>
    )
}