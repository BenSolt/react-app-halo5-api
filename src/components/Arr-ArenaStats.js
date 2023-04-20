function ArenaStats(props) {


    // const KillsAssits = TotalKillsPlayer + Assists
    // const KillDivide = KillsAssits / Deaths * 1
    // let KDA = KillDivide.toFixed(2);

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

                return (
                    <div key={info}>
                        <div className="statsContainer">
                            <div className="statMain">
                                <span className='textStats'>KDA Ratio</span><span className='textStatsBold'>{KDA}</span>
                            </div>
                            <div className="statMain">
                                <span className='textStats'>Win %</span><span className='textStatsBold'>{winPercentage}%</span>
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
                                <span className='textStats'>Head Shots</span><span className='textStatsBold'>{totalHeadshots}</span>
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
                                <span className='textStats'>Betrayals</span><span className='textStatsBold'>--?</span>
                            </div>
                            <div className="stat">
                                <span className='textStats'>Suicides</span><span className='textStatsBold'>--?</span>
                            </div>
                            <div className="stat">
                                <span className='textStats'>Assasinations</span><span className='textStatsBold'>{info.TotalAssassinations}</span>
                            </div>
                            <div className="stat">
                                <span className='textStats'>Games Won</span><span className='textStatsBold'>{info.TotalGamesWon}</span>
                            </div>
                            <div className="stat">
                                <span className='textStats'>Games Lost</span><span className='textStatsBold'>{info.TotalGamesLost}</span>
                            </div>
                            <div className="stat">
                                <span className='textStats'>Matches Tied</span><span className='textStatsBold'>{info.TotalGamesTied}</span>
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