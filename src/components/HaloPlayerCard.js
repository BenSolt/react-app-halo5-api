import React from "react";
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

    // const HRankAttainedTier =
    // p.Result.ArenaStats.HighestCsrAttained.Tier

    const HRankAttainedDesign = p?.Result?.ArenaStats.HighestCsrAttained ?
        p?.Result?.ArenaStats.HighestCsrAttained.DesignationId : null

    const Assasinations = p?.Result?.ArenaStats.TotalAssassinations

    const GamesLost = p?.Result?.ArenaStats.TotalGamesLost
    const GamesWon = p?.Result?.ArenaStats.TotalGamesWon
    const GamesTied = p?.Result?.ArenaStats.TotalGamesTied

    const totalHeadShots = p?.Result?.ArenaStats.TotalHeadshots
    const totalShotsFired = p?.Result?.ArenaStats.TotalShotsFired
    const totalShotsLanded = p?.Result?.ArenaStats.TotalShotsLanded
    const accur = totalShotsLanded / totalShotsFired * 100
    let accuracy = accur.toFixed(0);

    return (
        <div className="cardPlayer">

            <div className='gamertag'>
                {/* GAMER TAG*/}
                <h2 className="rankText"> {p?.Id}</h2>
                <h4 className="rankText"> Rank: {p?.Result?.SpartanRank}</h4>
                {/* <h1>{rankcurrent}</h1>  */}
            </div>

            <div className="info">
                <div className="infoTextGroup">
                    {HighestRankAttained === null ? (<h4 className="infoText">Highest Rank: 0</h4>) : (<h4 className="infoText">Highest Rank: {HighestRankAttained}</h4>)}
                    {HRankAttainedDesign === null ? (<h4 className="infoText">Highest Desg: 0</h4>) : (<h4 className="infoText">Highest Desg: {HRankAttainedDesign}</h4>)}
                </div>

                <div>
                    {HRankAttainedDesign === 6 ? (
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
                    }
                </div>
            </div>

            <div className="Stats">
                <h4 className='textStats'>KDA: {KDA}</h4>
                <h4 className='textStats'>Accuracy: {accuracy}%</h4>
            </div>

            <div className="Stats2">
                <h6 className='textStats'>Games Won: {GamesWon}</h6>
                <h6 className='textStats'>Games Lost: {GamesLost}</h6>
            </div>

            <div className="Stats">
                <h6 className='textStats'>Total Kills: {TotalKillsPlayer}</h6>
                <h6 className='textStats'>Assists: {Assists}</h6>
                <h6 className='textStats'>Deaths: {Deaths}</h6>
            </div>

            <div className="Stats3">
                <h6 className='textStats'>Games Tied: {GamesTied}</h6>
                <h6 className='textStats'>Assasinations: {Assasinations}</h6>
            </div>

            <div className="Stats">
                <h6 className='textStats'>Head Shots: {totalHeadShots}</h6>
                {/* <h6 className='textStats'>Shots Fired: {totalShotsFired}</h6>
                <h6 className='textStats'>Shots Landed: {totalShotsLanded}</h6> */}

            </div>

            {/* <h6>Total kills Vehic:{TotalKillsV}</h6> */}
        </div>
    )
}