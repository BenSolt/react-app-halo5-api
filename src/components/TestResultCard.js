import React, { useEffect, useState } from "react";
import '../css/matchCard.css';

const playlistArr = [
    {
        playlistId: 0,
        name: "Slayer"
    },
    {
        playlistId: 1,
        name: "Swat"
    },
]

const arr2 = [
    {
        TeamId: 1,
        Rank: 3,
        Result: {
            SpartankRank: 151,
            ArenaStats: {
                ArenaPlaylistStats: [
                    {
                        PlaylistId: 0,
                        TotalKills: 1000,
                        Csr: {
                            Csr: 0,
                            DesignationId: 5,
                            Rank: null,
                            Tier: 4
                        },
                        CsrPercentile: 10
                    },
                    {
                        PlaylistId: 1,
                        TotalKills: 500,
                        Csr: null,
                        CsrPercentile: null

                        // Csr: {
                        //     Csr: 0,
                        //     DesignationId: 1,
                        //     Rank: null,
                        //     Tier: 1
                        // },
                        // CsrPercentile: 25
                    },
                ],
                TotalKills: 1500,
                TotalAssists: 8,
                TotalDeaths: 16,
            },
            PlayerId: {
                Gamertag: "Tim",
            }
        },

    }
]


const arr = [
    {
        TeamId: 1,
        Rank: 3,
        Gamertag: "Tim",
        TotalKills: 8,
        TotalAssists: 8,
        TotalDeaths: 16,
    },
    {
        TeamId: 0,
        Rank: 1,
        Gamertag: "Ben",
        TotalKills: 25,
        TotalAssists: 12,
        TotalDeaths: 5
    },
    {
        TeamId: 1,
        Rank: 2,
        Gamertag: "sara",
        TotalKills: 10,
        TotalAssists: 8,
        TotalDeaths: 9
    },
    {
        TeamId: 0,
        Rank: 2,
        Gamertag: "Liz",
        TotalKills: 15,
        TotalAssists: 8,
        TotalDeaths: 9
    },
    {
        TeamId: 1,
        Rank: 1,
        Gamertag: "Jon",
        TotalKills: 16,
        TotalAssists: 8,
        TotalDeaths: 16
    },
    {
        TeamId: 0,
        Rank: 3,
        Gamertag: "Joan",
        TotalKills: 10,
        TotalAssists: 8,
        TotalDeaths: 16
    }
];

function TestResultCard() {

    const [dataMatch, setDataMatch] = useState(arr);
    const [dataMatch2, setDataMatch2] = useState(arr2);
    const [showbar, setShowBar] = useState(false);
    const [rankShow, setRankShow] = useState(0);
    const [playlistShow, setPlaylistShow] = useState(0);

    let color = " "

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
        <div>


            <div>

                {/* {dataMatch2 === undefined || dataMatch2.length === 0 ? (<div><h4 className="textStats2">NO Data Available</h4></div>) : (<div></div>)} */}
                {dataMatch2.map(info => {

                    const HighestCsrT = info?.Csr ? info?.Csr : null;

                    const HighestDesignation = info?.Csr?.DesignationId ? info?.Csr?.DesignationId : null
                    const HighestCsrTier = info?.Csr?.Tier ? info?.Csr?.Tier : null

                    const CsrStats = info.Result.ArenaStats.ArenaPlaylistStats

                    return (
                        <div key={info.Result.PlayerId.Gamertag}>
                            <button onClick={(e) => setPlaylistShow(0)}>Slayer</button>
                            <button onClick={(e) => setPlaylistShow(1)}>Swat</button>

                            <h4 className='textStats'>{info.Result.PlayerId.Gamertag}</h4>
                            {/* playlistArr */}
                            {CsrStats.map(info2 => {
                                if (info2.PlaylistId === playlistShow) {
                                const CsrInfo = info2.Csr ? info2?.Csr : null;
                                if (CsrInfo) {
                                    return (
                                        <div key={info.Result.PlayerId.Gamertag}>
                                            <h3 className="textStats">{info2.PlaylistId}</h3>
                                            <h3 className="textStats">Kills: {info2.TotalKills}</h3>
                                            <h3 className="textStats">Design Id: {info2.Csr.DesignationId}</h3>
                                            <h3 className="textStats">Tier: {info2.Csr.Tier}</h3>
                                            <h3 className="textStats">Precentile: {info2.CsrPercentile}%</h3>
                                        </div>
                                    )
                                }
                          
                                else {
                                    return (
                                        <div className="textStats" key={0}>
                                            No Information Available
                                            <h3 className="textStats">{info2.PlaylistId}</h3>

                                        </div>
                                    )
                                }
                            }}
                            )}
                            
                        </div>
                    )
                })}


            </div>

            <div className="matchCardResults">
                <div className="matchCard">

                    <button onClick={(e) => setRankShow(1)}>Rank 1?</button>
                    <button onClick={(e) => setRankShow(2)}>Rank 2?</button>
                    <div>{dataMatch.map(m => {
                        const KillsAssits = m.TotalKills + m.TotalAssists
                        const KillDivide = KillsAssits / m.TotalDeaths * 1
                        const KDA = KillDivide.toFixed(2);

                        if (m.Rank === rankShow) {
                            return (
                                <div className="matchCardContainer_B" key={m.Gamertag}>

                                    <div className="matchStatsSection2" >
                                        <h4 className='textStats'>{m.Rank}</h4>
                                        <h4 className='textStats'>{m.Gamertag}</h4>
                                        <span className="hideKDA"><h4 className='textStats'>{KDA}</h4></span>
                                    </div>

                                    <div className="matchStatsSection2" >
                                        <h4 className='textStats'>{m.TotalKills}</h4>
                                        <h4 className='textStats'>{m.TotalAssists}</h4>
                                        <h4 className='textStats'>{m.TotalDeaths}</h4>
                                    </div>
                                </div>
                            )
                        }
                    })}
                    </div>

                    <div className="matchCardContainer">
                        {dataMatch.map(m => {
                            const KillsAssits = m.TotalKills + m.TotalAssists
                            const KillDivide = KillsAssits / m.TotalDeaths * 1
                            const KDA = KillDivide.toFixed(2);

                            if (m.TeamId === 0) {
                                color = 'redTeam'
                            } else {
                                color = 'blueTeam'
                            }

                            function toggleOpen() {
                                var element = document.getElementById(m.Gamertag);
                                element.classList.toggle("toggleMobileContainer");
                            }

                            return (
                                <div className="sectionMatchCard" key={m.Gamertag}>

                                    <div className="matchCardContainer_B">

                                        <div className={color}>
                                            <h4 className='textStats'>{m.Rank}</h4>
                                            <h4 className='textStats'>{m.Gamertag}</h4>
                                            <span className="hideKDA"><h4 className='textStats'>{KDA}</h4></span>
                                            <button onClick={toggleOpen} className="hidetablet">open</button>
                                        </div>

                                        <div className="matchStatsSection2" >
                                            <h4 className='textStats'>{m.TotalKills}</h4>
                                            <h4 className='textStats'>{m.TotalAssists}</h4>
                                            <h4 className='textStats'>{m.TotalDeaths}</h4>
                                        </div>

                                        <div className="toggleMobileContainer" id={m.Gamertag}>
                                            <div className="mobileSection1">
                                                <h4 className='textStats'>Rank</h4>
                                                <h4 className='textStats'>Player Name</h4>
                                            </div>
                                            <div className="mobileSection2" >
                                                <h4 className='textStats'>{m.Rank}</h4>
                                                <h4 className='textStats'>{m.Gamertag}</h4>
                                            </div>
                                            <div className="mobileSection1">
                                                <h4 className='textStats'>K/D Ratio</h4>
                                                <h4 className='textStats'>Kills</h4>
                                            </div>
                                            <div className="mobileSection2" >
                                                <h4 className='textStats'>{KDA}</h4>
                                                <h4 className='textStats'>{m.TotalKills}</h4>
                                            </div>

                                            <div className="mobileSection1">
                                                <h4 className='textStats'>Assits</h4>
                                                <h4 className='textStats'>Deaths</h4>
                                            </div>
                                            <div className="mobileSection2" >
                                                <h4 className='textStats'>{m.TotalAssists}</h4>
                                                <h4 className='textStats'>{m.TotalDeaths}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
};
export default TestResultCard;