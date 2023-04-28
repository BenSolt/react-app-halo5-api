import React from "react";
import '../css/matchCard.css';

export default function HaloMapCard({ m }) {

    const KillsAssits = m.TotalKills + m.TotalAssists
    const KillDivide = KillsAssits / m.TotalDeaths * 1
    const KDA = KillDivide.toFixed(2);
    let color = " "

    if (m.TeamId === 0) {
        color = 'redTeam'
    } else {
        color = 'blueTeam'
    }

    return (
        <div className="matchCardResults">
            <div className={color}>
                <h4 className='textStats'>{m.Rank}</h4>
                <h4 className='textStats'>{m.Player.Gamertag}</h4>
                <h4 className='textStats'>{KDA}</h4>
                <h4 className='textStats'>{m.TotalKills}</h4>
                <h4 className='textStats'>{m.TotalAssists}</h4>
                <h4 className='textStats'>{m.TotalDeaths}</h4>
            </div>  
        </div>
    )
}