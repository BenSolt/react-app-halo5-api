import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

import HaloMatchResultCard from "./HaloMatchResultCard";

import '../css/matchCard.css';

export default function HaloMapCard({ m }) {

    const [dataMap, setDataMap] = useState([]);
    let color = "";
    let teamColor = "";

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

    // HALO 5 API: MATCH RESULT - CUSTOM ///////////////////////////////////////////
    function getMatchResults() {
        axiosWithAuth()
            .get(`https://www.haloapi.com/stats/h5/custom/matches/${m?.Id.MatchId}`)
            .then(res => {
                const info = res.data.PlayerStats
                console.log(info)
                setDataMatch(info);
                // setIsLoading(false);
                // setIsSearching(true);
            });
    }



    dataMatch.sort((a, b) => {
        // sort by team first
        if (a.TeamId < b.TeamId) {
            return -1;
        }
        if (a.TeamId > b.TeamId) {
            return 1;
        }

        // if same team, sort by rank
        if (a.Rank < b.Rank) {
            return -1;
        }
        if (a.Rank > b.Rank) {
            return 1;
        }

        // if everything is equal, return 0
        return 0;
    });


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
                                <div className="playerStatsBanner">
                                    <h2 className='textStats'>{i.Player.Gamertag}</h2>
                                    <h2 className='textStats'>Rank: {i.Rank}th</h2>
                                </div>
                                <div className="matchStats">
                                    <h4 className='textStats'>K/D Ratio</h4>
                                    <h4 className='textStats'>Kills</h4>
                                    <h4 className='textStats'>Assits</h4>
                                    <h4 className='textStats'>Deaths</h4>
                                </div>
                                <div className="matchStats">
                                    <h4 className='textStats'>{KDA}</h4>
                                    <h4 className='textStats'>{i.TotalKills}</h4>
                                    <h4 className='textStats'>{i.TotalAssists}</h4>
                                    <h4 className='textStats'>{i.TotalDeaths}</h4>
                                </div>
                            </div>
                        )
                    })}
                    </div>


                    <button onClick={getMatchResults}>Match Results</button>
                </div>
            </div>

            {/* TEAMS INFO /////////////////////////// */}
            <div>
                <div className="matchCard">{m.Teams.map(i => {
                    if (i.Rank === 1) {
                        var a = document.getElementsByClassName('teamColor')
                        teamColor = 'redText';
                    } else {
                        teamColor = 'blueText';
                    }
                    return (
                        <div key={i.Id}>
                            <div className="matchStatsScore">
                                {/* <h4 className="textStats">{i.Rank}</h4> */}
                                <h4 className={teamColor}>{i.Score}</h4>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
            {/* <button className='buttonSearch' onClick={getInfoMap}>Search</button> */}

            <div className="matchCard">
                <div className="matchCardContainer">
                    <div className="matchStats">
                        <h4 className='textStats'>Placement</h4>
                        <h4 className='textStats'>Player Name</h4>
                        <h4 className='textStats'>K/D Ratio</h4>
                        <h4 className='textStats'>Kills</h4>
                        <h4 className='textStats'>Assits</h4>
                        <h4 className='textStats'>Deaths</h4>
                    </div>
                    
                    {dataMatch.map(m => {
                        return <HaloMatchResultCard key={m.Player.Gamertag} m={m} />
                    })}
                </div>
            </div>

        </div>
    )
}