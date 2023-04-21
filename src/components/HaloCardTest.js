import React from "react";
import '../css/playerCard.css';

export default function HaloCardTest({ p }) {

    const hsResult = 151132 / 243477 * 100;
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
                    {/* GAMER TAG*/}
                    <h2 className="rankText"> Player Name</h2>
                    <h4 className="rankText"> Rank: 151</h4>
                    {/* <h1>{rankcurrent}</h1>  */}
                </div>

                <div className="infoContainer">
                    <div className="statsContainerRank">
                        <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_top_array00-783f32318c8c49eda0365c5daa50f5b6.png" alt="img"></img>
                        <h4 className="textStats">Current Rank #</h4>
                    </div>

                </div>

                <div className="statsContainer">
                    <div className="statsContainerB">
                        <div className="statMain">
                            <span className='textStats'>KDA Ratio</span><span className='textStatsBold'>2.10</span>
                        </div>
                        <div className="statMain">
                            <span className='textStats'>Win %</span><span className='textStatsBold'>--</span>
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

                <div className="statsContainer">
                    <div className="statsContainerB">
                        <div className="stat">
                            <span className='textStats'>Total Kills</span><span className='textStatsBold'>243477</span>
                        </div>
                        <div className="stat">
                            <span className='textStats'>Assists</span><span className='textStatsBold'>146220</span>
                        </div>
                    </div>
                    <div className="statsContainerB">
                        <div className="stat">
                            <span className='textStats'>Deaths</span><span className='textStatsBold'>185601</span>
                        </div>
                        <div className="stat">
                            <span className='textStats'>Head Shots</span><span className='textStatsBold'>151132</span>
                        </div>
                    </div>
                    <div className="statsContainerB">
                        <div className="stat">
                            <span className='textStats'>Damage Taken</span><span className='textStatsBold'>--</span>
                        </div>
                        <div className="stat">
                            <span className='textStats'>Damage Dealt</span><span className='textStatsBold'>--</span>
                        </div>
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
                            <span className='textStats'>Games Won</span><span className='textStatsBold'>11968</span>
                        </div>
                        <div className="stat">
                            <span className='textStats'>Games Lost</span><span className='textStatsBold'>8535</span>
                        </div>
                        <div className="stat">
                            <span className='textStats'>Matches DNF</span><span className='textStatsBold'>4</span>
                        </div>
                    </div>

                    <div className="statsContainer2">
                        <div className="statsContainer2B">
                            <div className="textStatsContainer">
                                <span className='textStats2'>Shot Accuracy</span>
                            </div>
                            <div className="textStatsContainerA">
                                <span className='textStatsBold2'>55%</span>
                                <div className="textStatsContainer">
                                    <span className='textStatsBoldSmall'>Shots Fired (--)</span>
                                    <span className='textStatsBoldSmall'>Shots Hit (--)</span>
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

                        <div className="statsContainer2B">
                            <div className="textStatsContainer">
                                <span className='textStats2'>HS Accuracy</span>
                            </div>
                            <div className="textStatsContainerA">
                                <span className='textStatsBold2'>{hsAccuracy}%</span>
                                <div className="textStatsContainer">
                                    <span className='textStatsBoldSmall'>Kills (243477) </span>
                                    <span className='textStatsBoldSmall'>Head Shots (151132)</span>
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

                    {/* <h6 className='textStats'>Shots Fired: {totalShotsFired}</h6>
                <h6 className='textStats'>Shots Landed: {totalShotsLanded}</h6>

                <h6 className='textStats'>Games Tied: 122</h6>
                <h6 className='textStats'>Assasinations: 2711</h6>
                <h6>Total kills Vehic:{TotalKillsV}</h6> */}
                </div>

            </div>
            )
}