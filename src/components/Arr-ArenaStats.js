import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

function ArenaStats(props) {

    const [playlistData, setPlaylistData] = useState([]);
    const [dataRank, setDataRank] = useState([]);
    const [showPlaylist, setShowPlaylist] = useState('');

    const Slayer = "892189e9-d712-4bdb-afa7-1ccab43fbed4";
    const Swat = "2323b76a-db98-4e03-aa37-e171cfbdd1a4";
    const FFA = 'FFA'
    const Arena = 'ARENA'

    useEffect(() => {
        axiosWithAuth()
            .get('https://www.haloapi.com/metadata/h5/metadata/playlists')
            .then(res => {
                const info = res.data
                // console.log(info);
                setPlaylistData(info);
            });
    }, []);


    useEffect(() => {
        axiosWithAuth()
            .get('https://www.haloapi.com/metadata/h5/metadata/csr-designations')
            .then(res => {
                const info = res.data
                // console.log(info);
                setDataRank(info);
            });
    }, []);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    return (
        <div>

            {/* SELECT PLAYLIST TO SEE SAID STATS /////////////////////////////////////////////////////////// */}
            <div className="statsContainer2">
                <button className="playlistItem" onClick={(e) => setShowPlaylist(FFA)}>FFA?</button>
                <button className="playlistItem" onClick={(e) => setShowPlaylist(Arena)}>Arena?</button>
                <button className="playlistItem" onClick={(e) => setShowPlaylist(Slayer)}>Slayer</button>
                <button className="playlistItem" onClick={(e) => setShowPlaylist(Swat)}>Swat</button>

            </div>

            {props.CurrentRank.map(info => {
                const HighestTier = info?.Csr?.Tier ? info?.Csr?.Tier : null
                const HighestDesignation = info?.Csr?.DesignationId ? info?.Csr?.DesignationId : null

                const TotalKillsPlayer = info.TotalKills
                const Assists = info.TotalAssists
                const Deaths = info.TotalDeaths

                const TotalGames = info.TotalGamesCompleted

                const KillsAssits = info.TotalKills + info.TotalAssists
                const KillDivide = KillsAssits / Deaths * 1
                const KDA = KillDivide.toFixed(2);

                const win = info.TotalGamesWon / TotalGames * 100
                const winPercentage = win.toFixed(2);

                const totalHeadshots = info.TotalHeadshots

                const totalShotsFired = info.TotalShotsFired
                const totalShotsLanded = info.TotalShotsLanded
                const accur = totalShotsLanded / totalShotsFired * 100
                let accuracy = accur.toFixed(1);

                const hsResult = totalHeadshots / TotalKillsPlayer * 100;
                let hsAccuracy = hsResult.toFixed(1);

                // DISPLAY TIER NAME: Platinum 3, Diamond 6 etc ////////////////////////////////////////////////////////
                if (info.PlaylistId === showPlaylist) {
                    const textRank = dataRank.map(r => {
                        return (
                            <div key={r.id}>
                                {HighestDesignation === Number(r?.id) ? (
                                    <div className="rankImageContainer_B">
                                        <h3 className="textTier">{r.name}</h3>
                                        {r?.tiers?.map(t => {
                                            return (
                                                <div key={t.id}>
                                                    {HighestTier === Number(t?.id) ? (
                                                        <div>
                                                            <h3 className="textTier">{t.id}</h3>
                                                        </div>
                                                    ) : null}
                                                </div>
                                            )
                                        })}
                                    </div>
                                ) : null}
                            </div>
                        )
                    })

                    // DISPLAY SAID RANK IMAGE: Platinum, Diamond, Onyx etc. //////////////////////////////////////////////////////
                    const imageRank = dataRank.map(r => {
                        return (
                            <div key={r.id}>
                                {HighestDesignation === Number(r?.id) ? (
                                    <div>
                                        {r?.tiers?.map(t => {
                                            return (
                                                <div key={t.id}>
                                                    {HighestTier === Number(t?.id) ? (
                                                        <div>
                                                            <img className="tierCardImage" src={t.iconImageUrl} alt="rank images" />
                                                        </div>
                                                    ) : null}
                                                </div>
                                            )
                                        })}
                                    </div>
                                ) : null}
                            </div>
                        )
                    })


                    return (
                        <div key={info.PlaylistId}>
                            <div className='statsContainer'>
                                <div className="statsContainerRanks">
                                    {
                                        // PLAYLIST NAME, ie Slayer etc. /////////////////////////////////////////////////////////////
                                        playlistData.map(p => {
                                            if (info.PlaylistId === p?.id) {
                                                return (
                                                    <div key={p.id}>
                                                        <h2 className="playlistName">{p?.name}</h2>
                                                    </div>
                                                )
                                            }
                                        })
                                    }

                                    {/* // RANKED STATS AND IMAGE //////////////////////////////////////////////////////////////// */}
                                    <div className="rankImageContainer">
                                        {props.CurrentRank === undefined || props.CurrentRank.length === 0 ? (<div><h4 className="textStats2">NO Data Available</h4></div>) : (<div></div>)}
                                        {props.CurrentRank.map(info => {
                                            const CsrInfo = info.Csr ? info?.Csr : null;

                                            if (CsrInfo) {
                                                if (HighestTier) {
                                                    return (
                                                        <div key={info.Csr.Tier} >
                                                            {textRank}
                                                            <div className="rankImageContainer_B">
                                                                {imageRank}
                                                                <div className="percentileSection">
                                                                    <span className='textStats'>CSR Percentile:</span>
                                                                    <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                } else {
                                                    return (
                                                        // NEED DIFFERENT METHOD FOR KEY.. since could have multiple No Data Avail..
                                                        <div key={0}>
                                                            {textRank}
                                                            <div className="rankImageContainer_B">
                                                                <span className='textStats'>NO DATA AVAILABLE</span>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            }
                                        })}
                                    </div>
                                </div>

                                {/* SECTION 1: 4 STATS ////////////////////////////////////////////////////////////// */}
                                <div className="statsContainer_B">
                                    <div className="statsContainer_C">
                                        <div className="statMain">
                                            <span className='textStats'>KDA Ratio</span><span className='textStatsBold'>{KDA}</span>
                                        </div>
                                        <div className="statMain">
                                            <span className='textStats'>Win %</span><span className='textStatsBold'>{winPercentage}%</span>
                                        </div>
                                    </div>
                                    <div className="statsContainer_C">
                                        <div className="statMain">
                                            <span className='textStats'>Average KDA</span><span className='textStatsBold'>--</span>
                                        </div>
                                        <div className="statMain">
                                            <span className='textStats'>Average Damage</span><span className='textStatsBold'>--</span>
                                        </div>
                                    </div>
                                </div>

                                {/* SECTION 2: 4 STATS ////////////////////////////////////////////////////////////// */}
                                <div className="statsContainer_B">
                                    <div className="statsContainer_C">
                                        <div className="stat">
                                            <span className='textStats'>Total Kills</span><span className='textStatsBold'>{TotalKillsPlayer}</span>
                                        </div>
                                        <div className="stat">
                                            <span className='textStats'>Assists</span><span className='textStatsBold'>{Assists}</span>
                                        </div>
                                    </div>
                                    <div className="statsContainer_C">
                                        <div className="stat">
                                            <span className='textStats'>Deaths</span><span className='textStatsBold'>{Deaths}</span>
                                        </div>
                                        <div className="stat">
                                            <span className='textStats'>Head Shots</span><span className='textStatsBold'>{totalHeadshots}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* SECTION 3: 4 STATS ////////////////////////////////////////////////////////////// */}
                                <div className="statsContainer_B">
                                    <div className="statsContainer_C">
                                        <div className="stat">
                                            <span className='textStats'>Games Won</span><span className='textStatsBold'>{info.TotalGamesWon}</span>
                                        </div>
                                        <div className="stat">
                                            <span className='textStats'>Games Lost</span><span className='textStatsBold'>{info.TotalGamesLost}</span>
                                        </div>
                                    </div>
                                    <div className="statsContainer_C">
                                        <div className="stat">
                                            <span className='textStats'>Games Tied</span><span className='textStatsBold'>{info.TotalGamesTied}</span>
                                        </div>
                                        <div className="stat">
                                            <span className='textStats'>Betrayals</span><span className='textStatsBold'>--?</span>
                                        </div>
                                    </div>
                                </div>

                                {/* SECTION 4: 4 STATS ////////////////////////////////////////////////////////////// */}
                                <div className="statsContainer_B">
                                    <div className="statsContainer_C">
                                        <div className="stat">
                                            <span className='textStats'>Assasinations</span><span className='textStatsBold'>{info.TotalAssassinations}</span>
                                        </div>
                                        <div className="stat">
                                            <span className='textStats'>Shoulder Bash</span><span className='textStatsBold'>{info.TotalShoulderBashKills}</span>
                                        </div>
                                    </div>

                                    <div className="statsContainer_C">
                                        <div className="stat">
                                            <span className='textStats'>---</span><span className='textStatsBold'>--</span>
                                        </div>
                                        <div className="stat">
                                            <span className='textStats'>Ground Pounds</span><span className='textStatsBold'>{info.TotalGroundPoundKills}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* SHOT ACCURACY AND HEAD SHOT ACCURACY ///////////////////////////////////////////////////////////////// */}
                            <div className="statsContainer2">
                                <div className="statsContainer2B">
                                    <div className="textStatsContainer">
                                        <span className='textStats2'>Shot Accuracy</span>
                                    </div>
                                    <div className="textStatsContainerA">
                                        <span className='textStatsBold2'>{accuracy}%</span>
                                        <div className="textStatsContainer">
                                            <span className='textStatsBoldSmall'>Shots Fired ({totalShotsFired})</span>
                                            <span className='textStatsBoldSmall'>Shots Hit ({totalShotsLanded})</span>
                                        </div>
                                        <div className="textStatsContainer">
                                            <span className="progressKills"></span>
                                            <span className="progressHeadShots"></span>
                                        </div>
                                    </div>
                                    <div className="progressBarContainer">
                                        <div className="progressBarFill" style={{ width: `${accuracy}%`, height: "12px" }}></div>
                                    </div>
                                </div>

                                <div className="statsContainer2B">
                                    <div className="textStatsContainer">
                                        <span className='textStats2'>HS Accuracy</span>
                                    </div>
                                    <div className="textStatsContainerA">
                                        <span className='textStatsBold2'>{hsAccuracy}%</span>
                                        <div className="textStatsContainer">
                                            <span className='textStatsBoldSmall'>Kills ({TotalKillsPlayer})</span>
                                            <span className='textStatsBoldSmall'>Head Shots ({totalHeadshots})</span>
                                        </div>
                                        <div className="textStatsContainer">
                                            <span className="progressKills"></span>
                                            <span className="progressHeadShots"></span>
                                        </div>
                                    </div>
                                    <div className="progressBarContainer">
                                        <div className="progressBarFill" style={{ width: `${hsAccuracy}%`, height: "12px" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            })
            }
        </div>
    )
}
export default ArenaStats;