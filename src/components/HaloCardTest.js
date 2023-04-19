import React from "react";
import '../css/playerCard.css';

export default function HaloCardTest({ p }) {

    const hsResult = 151132 /243477 * 100;
    let hsAccuracy = hsResult.toFixed(1);

    return (
        <div className="cards">

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

                    <div className="infoTextGroup">
                        {/* <img className="tierCard" alt="img"></img> */}
                        {/* {HRankAttainedDesign === 6 ? (
                        <img className="tierCard" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_top_array00-783f32318c8c49eda0365c5daa50f5b6.png"></img>
                    ) : HRankAttainedDesign === 7 ? (
                        <img className="tierCard" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_top_array01-3755e5127c9c46368e648d58da44390e.png"></img>
                    ) : HRankAttainedDesign === null ? (
                        <img className="tierCard" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/unranked_00-61fca949c33f433ba7e7507d97ff130f.png"></img>
                    ) : HRankAttainedDesign === 4 ? (
                        <img className="tierCard" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_platinum_array01-c8df3dc366ea49209762f9b08189ffa6.png"></img>
                    ) : HRankAttainedDesign === 2 ? (
                        <img className="tierCard" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_silver_array01-b4739333586340bda2eed6099e630f92.png"></img>
                    ) : HRankAttainedDesign === 5 ? (
                        <img className="tierCard" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_diamond_array01-9721d95b267942dcb1edcce6dfc25631.png"></img>
                    ) : (
                        <img className="tierCard" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_platinum_array01-c8df3dc366ea49209762f9b08189ffa6.png"></img>
                    )
                    } */}
                    </div>
                </div>

                <div className="statsContainer">
                    <div className="statMain">
                        <span className='textStats'>KDA Ratio</span><span className='textStatsBold'>2.10</span>
                    </div>
                    <div className="statMain">
                        <span className='textStats'>Win %</span><span className='textStatsBold'>--</span>
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
                        <span className='textStats'>Total Kills</span><span className='textStatsBold'>243477</span>
                    </div>
                    <div className="stat">
                        <span className='textStats'>Assists</span><span className='textStatsBold'>146220</span>
                    </div>
                    <div className="stat">
                        <span className='textStats'>Deaths</span><span className='textStatsBold'>185601</span>
                    </div>
                    <div className="stat">
                        <span className='textStats'>Head Shots</span><span className='textStatsBold'>151132</span>
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
                    {/* <div className="stat">
                        <span className='textStats'>Accuracy</span><span className='textStatsBold'>53%</span>
                    </div> */}
                    <div className="stat2">
                        <div className="textStatsContainer">
                            <span className='textStats2'>Shot Accuracy</span>
                        </div>
                        <div className="textStatsContainer2">
                            <span className='textStatsBold2'>55%</span>
                            <div className="textStatsContainer">
                                <span className='textStatsBoldSmall'>Shots Fired (--)</span>
                                <span className='textStatsBoldSmall'>Shots Hit (--)</span>
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
                                <span className='textStatsBoldSmall'>Kills (243477)</span>
                                <span className='textStatsBoldSmall'>Head Shots (151132)</span>
                            </div>
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