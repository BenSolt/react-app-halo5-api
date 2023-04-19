import React, { useState } from "react";
import '../css/playerCard.css';

export default function HaloPlayerCard({ p }) {

    // const TotalKillsVehicle = 
    // p.Result.ArenaStats.DestroyedEnemyVehicles.map(p => {
    //       return(
    //           <div>Kills: {p.TotalKills}</div>    
    //       )
    //  })

    const TotalKillsPlayer = p?.Result?.ArenaStats.TotalKills
    const Assists = p?.Result?.ArenaStats.TotalAssists
    const Deaths = p?.Result?.ArenaStats.TotalDeaths

    const KillsAssits = TotalKillsPlayer + Assists
    const KillDivide = KillsAssits / Deaths * 1
    let KDA = KillDivide.toFixed(2);


    const HighestRankAttained = p?.Result?.ArenaStats.HighestCsrAttained ?
        p?.Result?.ArenaStats.HighestCsrAttained.Csr : null


    // TRYING TO ADD THIS - CURRENT RANK....
    const CurrentRank = p?.Result?.ArenaStats.ArenaPlaylistStats ?
        p?.Result?.ArenaStats.ArenaPlaylistStats : null
    //p?.CsrPercentile 
    //p?.Result?.ArenaStats.ArenaPlaylistStats.p?.Csr : null

    const HRankAttainedDesign = p?.Result?.ArenaStats.HighestCsrAttained ?
        p?.Result?.ArenaStats.HighestCsrAttained.DesignationId : null

    const Assasinations = p?.Result?.ArenaStats.TotalAssassinations

    const GamesLost = p?.Result?.ArenaStats.TotalGamesLost
    const GamesWon = p?.Result?.ArenaStats.TotalGamesWon
    const GamesTied = p?.Result?.ArenaStats.TotalGamesTied

    const win = GamesLost / GamesWon * 100;
    let winPercentage = win.toFixed(2);

    const totalHeadShots = p?.Result?.ArenaStats.TotalHeadshots
    const totalShotsFired = p?.Result?.ArenaStats.TotalShotsFired
    const totalShotsLanded = p?.Result?.ArenaStats.TotalShotsLanded
    const accur = totalShotsLanded / totalShotsFired * 100
    let accuracy = accur.toFixed(1);

    const hsResult = totalHeadShots / TotalKillsPlayer * 100;
    let hsAccuracy = hsResult.toFixed(1);

    return (
        <div className="playerCard">

            <div className="cardPlayerPeak">
                <h4 className="peakText">Highest Rank</h4>
                <div className="peakImage">
                    <img className="tierCardImage" alt="img"></img>
                    <h4 className="peakText">1653</h4>
                </div>
                {/* <h4 className="peakText">Highest Desg: 6</h4> */}
            </div>

            <div className="cardPlayer">
                <div className='gamertagContainer'>
                    <h2 className="rankText"> {p?.Id}</h2>
                    <h4 className="rankText"> Rank: {p?.Result?.SpartanRank}</h4>
                </div>

                <div className="infoContainer">
                    <div className="statsContainerRank">
                        {HRankAttainedDesign === 6 ? (
                            <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_top_array00-783f32318c8c49eda0365c5daa50f5b6.png"></img>
                        ) : HRankAttainedDesign === 7 ? (
                            <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_top_array01-3755e5127c9c46368e648d58da44390e.png"></img>
                        ) : HRankAttainedDesign === null ? (
                            <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/unranked_00-61fca949c33f433ba7e7507d97ff130f.png"></img>
                        ) : HRankAttainedDesign === 4 ? (
                            <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_platinum_array01-c8df3dc366ea49209762f9b08189ffa6.png"></img>
                        ) : HRankAttainedDesign === 2 ? (
                            <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_silver_array01-b4739333586340bda2eed6099e630f92.png"></img>
                        ) : HRankAttainedDesign === 5 ? (
                            <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_diamond_array01-9721d95b267942dcb1edcce6dfc25631.png"></img>
                        ) : (
                            <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_platinum_array01-c8df3dc366ea49209762f9b08189ffa6.png"></img>
                        )
                        }
                        {HighestRankAttained === null ? (<h4 className="textStats">0 CSR</h4>) : (<h4 className="textStats2">{HighestRankAttained} CSR</h4>)}
                
                        {/* {CurrentRank.map(info => {
                            return<h4 className="textStats2">{info.Csr.DesignationId}</h4>
                        })} */}
                    </div>
                </div>

                <div className="statsContainer">
                    <div className="statMain">
                        <span className='textStats'>KDA Ratio</span><span className='textStatsBold'>{KDA}</span>
                    </div>
                    <div className="statMain">
                        <span className='textStats'>Win %</span><span className='textStatsBold'>{winPercentage}</span>
                    </div>
                    <div className="statMain">
                        <span className='textStats'>Average KDA</span><span className='textStatsBold'>--</span>
                    </div>
                    <div className="statMain">
                        <span className='textStats'>Average Damage</span><span className='textStatsBold'>--</span>
                    </div>
                </div>

                <div className="statsContainer">
                    <div className="stat">
                        <span className='textStats'>Total Kills</span><span className='textStatsBold'>{TotalKillsPlayer}</span>
                    </div>
                    <div className="stat">
                        <span className='textStats'>Assists</span><span className='textStatsBold'>{Assists}</span>
                    </div>
                    <div className="stat">
                        <span className='textStats'>Deaths</span><span className='textStatsBold'>{Deaths}</span>
                    </div>
                    <div className="stat">
                        <span className='textStats'>Head Shots</span><span className='textStatsBold'>{totalHeadShots}</span>
                    </div>
                    <div className="stat">
                        <span className='textStats'>Damage Taken</span><span className='textStatsBold'>--</span>
                    </div>
                    <div className="stat">
                        <span className='textStats'>Damage Dealt</span><span className='textStatsBold'>--</span>
                    </div>
                </div>

                <div className="statsContainer">
                    <div className="stat">
                        <span className='textStats'>Betrayals</span><span className='textStatsBold'>--</span>
                    </div>
                    <div className="stat">
                        <span className='textStats'>Suicides</span><span className='textStatsBold'>4</span>
                    </div>
                    <div className="stat">
                        <span className='textStats'>Score</span><span className='textStatsBold'>4467?</span>
                    </div>
                    <div className="stat">
                        <span className='textStats'>Games Won</span><span className='textStatsBold'>{GamesWon}</span>
                    </div>
                    <div className="stat">
                        <span className='textStats'>Games Lost</span><span className='textStatsBold'>{GamesLost}</span>
                    </div>
                    <div className="stat">
                        <span className='textStats'>Matches Tied</span><span className='textStatsBold'>{GamesTied}</span>
                    </div>
                </div>

                <div className="statsContainer2">
                    <div className="stat2">
                        <div className="textStatsContainer">
                            <span className='textStats2'>Shot Accuracy</span>
                        </div>
                        <div className="textStatsContainer2">
                            <span className='textStatsBold2'>{accuracy}%</span>
                            <div className="textStatsContainer">
                                <span className='textStatsBoldSmall'>Shots Fired ({totalShotsFired})</span>
                                <span className='textStatsBoldSmall'>Shots Hit ({totalShotsLanded})</span>
                            </div>
                        </div>
                    </div>

                    <div className="stat2">
                        <div className="textStatsContainer">
                            <span className='textStats2'>HS Accuracy</span>
                        </div>
                        <div className="textStatsContainer2">
                            <span className='textStatsBold2'>{hsAccuracy}%</span>
                            <div className="textStatsContainer">
                                <span className='textStatsBoldSmall'>Kills ({TotalKillsPlayer})</span>
                                <span className='textStatsBoldSmall'>Head Shots ({totalHeadShots})</span>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <h6 className='textStats'>Games Tied: 122</h6>
                <h6 className='textStats'>Assasinations: 2711</h6>
                <h6>Total kills Vehic:{TotalKillsV}</h6> */}

            </div>
        </div>
    )
}