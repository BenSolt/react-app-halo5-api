import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { parse, end, toSeconds, pattern } from "iso8601-duration";

import HaloMatchResultCard from "./HaloMatchResultCard";

import '../css/matchCard.css';

export default function HaloMapCard({ m }) {

    const [dataMap, setDataMap] = useState([]);
    const [data, setData] = useState([]);
    let teamColor = "";
    const [dataMatch, setDataMatch] = useState([]);
    const [showbar, setShowBar] = useState(false);

    useEffect(() => {
        axiosWithAuth()
            .get('https://www.haloapi.com/metadata/h5/metadata/maps')
            .then(res => {
                const info = res.data
                console.log(info)
                setDataMap(info);
                // setIsLoading(false);
                // setIsSearching(true);
            });
    }, [])

    // HALO 5 API: MATCH RESULT - CUSTOM ///////////////////////////////////////////
    function getMatchResults() {
        axiosWithAuth()
            .get(`https://www.haloapi.com/stats/h5/custom/matches/${m?.Id.MatchId}`)
            .then(res => {
                const info = res.data.PlayerStats
                console.log(info)
                setDataMatch(info);
            });
        setShowBar(true)
    }

    dataMatch.sort((a, b) => {
        // sort by team first
        if (b.GameEndStatus < a.GameEndStatus) {
            return -1;
        }
        if (a.GameEndStatus > b.GameEndStatus) {
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

    useEffect(() => {
        axiosWithAuth()
            .get('https://www.haloapi.com/metadata/h5/metadata/playlists')
            .then(res => {
                const info = res.data
                console.log(info);
                setData(info);
            });
    }, [])

    // console.log("DATE:",m.MatchCompletedDate.ISO8601Date.replace('T',' ').replace('Z', ''))
    //console.log(parse(m.MatchDuration))

    return (
        <div >
            <div className="sectionMatchCardPlayer">

                {/* RANK IMAGE: ie Diamond //////////////////////////////////////////////////////////////////// */}
                <div className="mapImageSection1">
                    {dataMap.map(a => {
                        if (m?.MapId === a.id) {
                            return (
                                <div key={a.id}>
                                    <h2 className='textStats'>{a?.name}</h2>
                                    <img className="matchImage" src={a?.imageUrl} alt="map images" />
                                </div>
                            )
                        } else {
                            return null
                        }
                    })}
                </div>

                {/* PLAYLIST NAME: ie Slayer ///////////////////////////////////////////////////////////////// */}
                <div className="section2">
                    {data.map(p => {
                        if (m.HopperId === p.id) {
                            return <div key={p.id} className="playerStatsBanner">
                                <h2 className='playlistNameB'>{p?.name}</h2>
                            </div>
                        }
                    })}

                    {/* PLAYER STATS OF LAST GAME PLAYED //////////////////////////////////////////////////////////////////////////////// */}
                    <div>{m.Players.map(i => {
                        const KillsAssits = i.TotalKills + i.TotalAssists
                        const KillDivide = KillsAssits / i.TotalDeaths * 1
                        const KDA = KillDivide.toFixed(2);

                        return (
                            <div key={i.Player.Gamertag} >
                                <div className="playerStatsBanner">
                                    <h2 className='textStats'>{i.Player.Gamertag}</h2>
                                    <h2 className='textStats'>Rank: {i.Rank}</h2>
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
                </div>
            </div>

            {/* TEAMS INFO: PLACED 1st or 2nd /////////////////////////////////////////////////////////////////// */}
            <button className="buttonSearch" onClick={getMatchResults}>Match Results</button>

            <div className="sectionMatchCard">
                <div className="matchCardContainer">
                    {/* {showbar && <div className="matchCardContainer"> */}
                    <div className="matchCardContainer_Score">
                        <div className="ScoreSection">
                            {data.map(p => {
                                if (m.HopperId === p.id) {
                                    return <div key={p.id} className="playerStatsBanner">
                                        <h3 className='playlistNameB'>{p?.name}</h3>
                                    </div>
                                }
                            })}
                            <div className="matchStatsScoreContainer">
                                {m.Teams.map(i => {
                                    if (i.Id === 0) {
                                        teamColor = 'redText';
                                    } else {
                                        teamColor = 'blueText';
                                    }
                                    return (
                                        <div key={i.Id} className="matchStatsScore">
                                            <h3 className={teamColor}>{i.Score}</h3> <span>:</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="ScoreSection">
                            {/* <h3 className='textStats'>{m.MatchCompletedDate.ISO8601Date.replace('T',' ').replace('Z', '').replace(':','')}</h3>
                            <h3 className='textStats'>{m.MatchDuration}</h3> */}
                        </div>
                    </div>

                    {/* MATCH RESULTS: Displayed if bigger than Mobile view, info also displayed (showbar) if searched for match results */}
                    <div className="matchCardContainer_Titles">
                        <div className="matchStatsResults">
                            <h4 className='textStats'>Rank</h4>
                            <h4 className='textStats'>Player Name</h4>
                            <h4 className='textStats'>K/D Ratio</h4>
                        </div>

                        <div className="matchStatsResults2">
                            <h4 className='textStats'>Kills</h4>
                            <h4 className='textStats'>Assits</h4>
                            <h4 className='textStats'>Deaths</h4>
                        </div>
                    </div>

                    {/* MATCH RESULTS: 8 players stats/////////////////////////////////////////// */}
                    {dataMatch.map(m => {
                        return <HaloMatchResultCard key={m.Player.Gamertag} m={m} />
                    })}
                    {/* </div>} */}
                </div>
            </div>
        </div>
    )
}