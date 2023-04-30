import React, { useState } from "react";
import Arr_ArenaStats from './Arr-ArenaStats';
import HighestRankContainer from "./pieces/highestRankContainer";

import '../css/playerCard.css';

export default function HaloPlayerCard({ p }) {

    // const TotalKillsVehicle = 
    // p.Result.ArenaStats.DestroyedEnemyVehicles.map(p => {
    //       return(
    //           <div>Kills: {p.TotalKills}</div>    
    //       )
    //  })

    const TotalKillsPlayer = p?.Result?.ArenaStats.TotalKills;
    const Assists = p?.Result?.ArenaStats.TotalAssists;
    const Deaths = p?.Result?.ArenaStats.TotalDeaths;

    const KillsAssits = TotalKillsPlayer + Assists
    const KillDivide = KillsAssits / Deaths * 1
    let KDA = KillDivide.toFixed(2);

    // RANK OF PLAYER in ARENA PLAYLIST STATS /////////////////////
    const CurrentRank = p?.Result?.ArenaStats.ArenaPlaylistStats ?
        p?.Result?.ArenaStats.ArenaPlaylistStats : null;

    const HRankAttainedDesign = p?.Result?.ArenaStats.HighestCsrAttained ?
        p?.Result?.ArenaStats.HighestCsrAttained.DesignationId : null;

    // HIGEST CSR STATS ///////////////////////////////////////////////////////////////////////
    const HRankAttainedTier = p?.Result?.ArenaStats.HighestCsrAttained ?
        p?.Result?.ArenaStats.HighestCsrAttained.Tier : null;

    const HighestCsr = p?.Result?.ArenaStats.HighestCsrAttained ?
        p?.Result?.ArenaStats.HighestCsrAttained.Csr : null;

    const HighestRank = p?.Result?.ArenaStats.HighestCsrAttained ?
        p?.Result?.ArenaStats.HighestCsrAttained.Rank : null;

    // //////////////////////////////////////////////////////////////////////////////////////////
    const Assasinations = p?.Result?.ArenaStats.TotalAssassinations ?
        p?.Result?.ArenaStats.TotalAssassinations : null;

    const GroundPounds = p?.Result?.ArenaStats.TotalGroundPoundKills ?
        p?.Result?.ArenaStats.TotalGroundPoundKills : null;

    const ShoulderBash = p?.Result?.ArenaStats.TotalShoulderBashKills ?
        p?.Result?.ArenaStats.TotalShoulderBashKills : null;

    const TotalMeleeKills = p?.Result?.ArenaStats.TotalMeleeKills ?
        p?.Result?.ArenaStats.TotalMeleeKills : null;

    const GamesLost = p?.Result?.ArenaStats.TotalGamesLost;
    const GamesWon = p?.Result?.ArenaStats.TotalGamesWon;
    const GamesTied = p?.Result?.ArenaStats.TotalGamesTied;

    const TotalGames = p?.Result?.ArenaStats.TotalGamesCompleted;

    // wins divided by total games..
    const win = GamesWon / TotalGames * 100;
    let winPercentage = win.toFixed(2);

    const totalHeadShots = p?.Result?.ArenaStats.TotalHeadshots
    const totalShotsFired = p?.Result?.ArenaStats.TotalShotsFired
    const totalShotsLanded = p?.Result?.ArenaStats.TotalShotsLanded
    const accur = totalShotsLanded / totalShotsFired * 100
    let accuracy = accur.toFixed(1);

    const hsResult = totalHeadShots / TotalKillsPlayer * 100;
    let hsAccuracy = hsResult.toFixed(1);



    return (
        <div className="playerCardContainer">

            {/* HIGHEST RANK ACHIEVED //////////////////////////////////////////////////////////// */}
            <HighestRankContainer CurrentRank={CurrentRank} HRankAttainedDesign={HRankAttainedDesign} HighestCsr={HighestCsr}
                HighestRank={HighestRank} HRankAttainedTier={HRankAttainedTier} />

            <div className="cardSection2">
                <div>
                    <div className='gamertagContainer'>
                        <h2 className="rankText"> {p?.Id}</h2>
                        <h4 className="rankText"> Rank: {p?.Result?.SpartanRank}</h4>
                    </div>

                    <h3 className="textTitle">TOTAL STATS</h3>
                    <div className='statsContainer'>
                        <div className="statsContainer_B">
                            <div className="statsContainer_C">
                                <div className="statMain">
                                    <span className='textStats'>KDA Ratio</span><span className='textStatsBold'>{KDA}</span>
                                </div>
                                <div className="statMain">
                                    <span className='textStats'>Win %</span><span className='textStatsBold'>{winPercentage}</span>
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
                                    <span className='textStats'>Head Shots</span><span className='textStatsBold'>{totalHeadShots}</span>
                                </div>
                            </div>
                            {/* <div className="statsContainer_C">
                                <div className="stat">
                                    <span className='textStats'>Damage Taken</span><span className='textStatsBold'>--</span>
                                </div>
                                <div className="stat">
                                    <span className='textStats'>Damage Dealt</span><span className='textStatsBold'>--</span>
                                </div>
                            </div> */}
                        </div>

                        <div className="statsContainer_B">
                            <div className="statsContainer_C">
                                <div className="stat">
                                    <span className='textStats'>Games Won</span><span className='textStatsBold'>{GamesWon}</span>
                                </div>
                                <div className="stat">
                                    <span className='textStats'>Games Lost</span><span className='textStatsBold'>{GamesLost}</span>
                                </div>
                            </div>
                            <div className="statsContainer_C">
                                <div className="stat">
                                    <span className='textStats'>Games Tied</span><span className='textStatsBold'>{GamesTied}</span>
                                </div>
                                <div className="stat">
                                    <span className='textStats'>Melee Kills</span><span className='textStatsBold'>{TotalMeleeKills}</span>
                                </div>
                            </div>
                        </div>

                        <div className="statsContainer_B">
                            <div className="statsContainer_C">
                                <div className="stat">
                                    <span className='textStats'>Assasinations</span><span className='textStatsBold'>{Assasinations}</span>
                                </div>
                                <div className="stat">
                                    <span className='textStats'>Shoulder Bash</span><span className='textStatsBold'>{ShoulderBash}</span>
                                </div>
                            </div>
                            <div className="statsContainer_C">
                                <div className="stat">
                                    <span className='textStats'>---</span><span className='textStatsBold'>--</span>
                                </div>
                                <div className="stat">
                                    <span className='textStats'>Ground Pounds</span><span className='textStatsBold'>{GroundPounds}</span>
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
                                    <span className='textStatsBoldSmall'>Head Shots ({totalHeadShots})</span>
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

                    {/* <h6 className='textStats'>Games Tied: 122</h6>
                <h6 className='textStats'>Assasinations: 2711</h6>
                <h6>Total kills Vehic:{TotalKillsV}</h6> */}

                    <h3 className="textTitle">CURRENT ARENA PLAYLIST STATS</h3>

                    <Arr_ArenaStats CurrentRank={CurrentRank} />
                </div>
            </div>
        </div>
    )
}