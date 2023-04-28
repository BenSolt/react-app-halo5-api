import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

function ArenaStats(props) {

    const [data, setData] = useState([]);
    const [dataRank, setDataRank] = useState([]);

    function getPlaylist() {
        axiosWithAuth()
            .get('https://www.haloapi.com/metadata/h5/metadata/playlists')
            .then(res => {
                const info = res.data
                // console.log(info);
                setData(info);
            });
    }

    function getImageRank() {
        axiosWithAuth()
            .get('https://www.haloapi.com/metadata/h5/metadata/csr-designations')
            .then(res => {
                const info = res.data
                // console.log(info);
                setDataRank(info);
            });
    }


    return (
        <div>
            <button onClick={getPlaylist}>PlayList</button>
            <button onClick={getImageRank}>Rank</button>

            {props.CurrentRank.map(info => {

                const HighestTier = info.Csr.Tier
                const HighestDesignat = info.Csr.DesignationId

                const TotalKillsPlayer = info.TotalKills
                const Assists = info.TotalAssists
                const Deaths = info.TotalDeaths

                const KillsAssits = info.TotalKills + info.TotalAssists
                const KillDivide = KillsAssits / Deaths * 1
                const KDA = KillDivide.toFixed(2);

                const win = info.TotalGamesLost / info.TotalGamesWon * 100
                const winPercentage = win.toFixed(2);

                const totalHeadshots = info.TotalHeadshots

                const totalShotsFired = info.TotalShotsFired
                const totalShotsLanded = info.TotalShotsLanded
                const accur = totalShotsLanded / totalShotsFired * 100
                let accuracy = accur.toFixed(1);

                const hsResult = totalHeadshots / TotalKillsPlayer * 100;
                let hsAccuracy = hsResult.toFixed(1);

                return (
                    <div key={info.PlaylistId}>
                        <div className='statsContainer'>
                            <div className="statsContainerRank">
                                {
                                    data.map(p => {
                                        if (info.PlaylistId === p?.id) {
                                            return (
                                                <div key={p.id}>
                                                    <h4 className="playlistName">{p?.name}</h4>
                                                </div>
                                            )
                                        }
                                    })
                                }
                                {/* joinedcrayon323 */}

                                {dataRank.map(r => {
                                    return (
                                        <div key={r.id}>
                                            {/* {info.Csr.DesignationId === Number(r?.id) ? (<h4 className="title">DIAMOND TEST1</h4>) : null} */}

                                            {info.Csr.DesignationId === Number(r?.id) ? (
                                                <div>
                                                    <h4 className="textTier">{r.name}</h4>

                                                    {r?.tiers?.map(t => {
                                                        return (
                                                            <div key={t.id} className="rankImageContainer">
                                                                {info.Csr.Tier === Number(t?.id) ? (
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
                                })}

                                {props.CurrentRank === undefined || props.CurrentRank.length === 0 ? (<div><h4 className="textStats2">NO Data Available</h4></div>) : (<div></div>)}
                                {props.CurrentRank.map(info => {

                                    // RANKED STATS AND IMAGE ////////////////////////////////////////////////////////////////
                                    if (info.Csr.DesignationId === HighestDesignat) {
                                        if (info.Csr.Tier === HighestTier) {
                                            return (
                                                <div key={info.Csr.Tier}>
                                                    <div className="rankImageContainer">
                                                        {/* <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_diamond_array01-9721d95b267942dcb1edcce6dfc25631.png" alt="rank images"></img> */}
                                                        <div className="percentileSection">
                                                            <span className='textStats'>CSR Percentile:</span>
                                                            <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        } else {
                                            return (<div></div>)
                                        }
                                    }
                                })}

                                <h4 className="textStats">Tier: {HighestTier}</h4>
                                <h4 className="textStats">DesignationId: {HighestDesignat}</h4>
                            </div>

                            <div className="statsSection1">
                                <div className="statsContainerB">
                                    <div className="statMain">
                                        <span className='textStats'>KDA Ratio</span><span className='textStatsBold'>{KDA}</span>
                                    </div>
                                    <div className="statMain">
                                        <span className='textStats'>Win %</span><span className='textStatsBold'>{winPercentage}%</span>
                                    </div>
                                </div>
                                <div className="statsContainerB">
                                    <div className="statMain">
                                        <span className='textStats'>Average KDA</span><span className='textStatsBold'>--</span>
                                    </div>
                                    <div className="statMain">
                                        <span className='textStats'>Average Damage</span><span className='textStatsBold'>--</span>
                                    </div>
                                </div>
                            </div>

                            <div className="statsSection1">
                                <div className="statsContainerB">
                                    <div className="stat">
                                        <span className='textStats'>Total Kills</span><span className='textStatsBold'>{TotalKillsPlayer}</span>
                                    </div>
                                    <div className="stat">
                                        <span className='textStats'>Assists</span><span className='textStatsBold'>{Assists}</span>
                                    </div>
                                </div>
                                <div className="statsContainerB">
                                    <div className="stat">
                                        <span className='textStats'>Deaths</span><span className='textStatsBold'>{Deaths}</span>
                                    </div>
                                    <div className="stat">
                                        <span className='textStats'>Head Shots</span><span className='textStatsBold'>{totalHeadshots}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="statsSection1">
                                <div className="statsContainerB">
                                    <div className="stat">
                                        <span className='textStats'>Games Won</span><span className='textStatsBold'>{info.TotalGamesWon}</span>
                                    </div>
                                    <div className="stat">
                                        <span className='textStats'>Games Lost</span><span className='textStatsBold'>{info.TotalGamesLost}</span>
                                    </div>
                                </div>
                                <div className="statsContainerB">
                                    <div className="stat">
                                        <span className='textStats'>Games Tied</span><span className='textStatsBold'>{info.TotalGamesTied}</span>
                                    </div>
                                    <div className="stat">
                                        <span className='textStats'>Betrayals</span><span className='textStatsBold'>--?</span>
                                    </div>
                                </div>
                                <div className="statsContainerB">
                                    <div className="stat">
                                        <span className='textStats'>Assasinations</span><span className='textStatsBold'>{info.TotalAssassinations}</span>
                                    </div>
                                    <div className="stat">
                                        <span className='textStats'>Ground Pounds</span><span className='textStatsBold'>{info.TotalGroundPoundKills}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

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
            })
            }
        </div>
    )
}
export default ArenaStats;