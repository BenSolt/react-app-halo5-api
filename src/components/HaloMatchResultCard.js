import React from "react";
import '../css/matchCard.css';

export default function HaloMapCard({ m }) {

    const KillsAssits = m.TotalKills + m.TotalAssists
    const KillDivide = KillsAssits / m.TotalDeaths * 1
    const KDA = KillDivide.toFixed(2);
    let color = " "

    // if (b.GameEndStatus< a.GameEndStatus) {
    //     return -1;
    // }
    // if (a.GameEndStatus > b.GameEndStatus) {
    //     return 1;
    // }
    if (m.TeamId === 0) {
        color = 'redTeam'
    } else {
        color = 'blueTeam'
    }

    function toggleOpen() {
        var element = document.getElementById(m.Player.Gamertag);
        element.classList.toggle("a");
    }

    return (
        <div className="matchCardContainer_B">
            <div className="matchStatsSection1">
                <h4 className='textStats'>Rank</h4>
                <h4 className='textStats'>Player Name</h4>
                <h4 className='textStats'>K/D Ratio</h4>
            </div>

            <div className={color}>
                <h4 className='textStats'>{m.Rank}</h4>
                <h4 className='textStats'>(Rank Image)</h4>
                <h4 className='textStats'>{m.Player.Gamertag}</h4>
                <span className="hideKDA"><h4 className='textStats'>{KDA}</h4></span>
                <button onClick={toggleOpen} className="hidetablet">Open</button>
            </div>

            <div className="matchStatsSection1">
                <h4 className='textStats'>Kills</h4>
                <h4 className='textStats'>Assits</h4>
                <h4 className='textStats'>Deaths</h4>
            </div>

            <div className="matchStatsSection2" >
                <h4 className='textStats'>{m.TotalKills}</h4>
                <h4 className='textStats'>{m.TotalAssists}</h4>
                <h4 className='textStats'>{m.TotalDeaths}</h4>
            </div>

            <div className="toggleMobileContainer a" id={m.Player.Gamertag}>
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

    )
}