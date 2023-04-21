import Arr_RankImage from './Arr-RankImage';

function ArenaStats(props) {


    return (
        <div>
            {props.CurrentRank.map(info => {

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
                    <div key={info}>
                        <div className='statsContainer'>
                            <div className="statsContainerRank">
                                <h4 className="playlistName">SLAYER</h4>
                                <Arr_RankImage CurrentRank={props.CurrentRank} />
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
                                        <span className='textStats'>Matches Tied</span><span className='textStatsBold'>{info.TotalGamesTied}</span>
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