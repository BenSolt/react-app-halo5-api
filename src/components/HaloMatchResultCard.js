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
                <h4 className='textStats'>{m.TeamId}</h4>
                <h4 className='textStats'>{m.Player.Gamertag}</h4>
                <h4 className='textStats'>K/D Ratio: {KDA}</h4>
                <h4 className='textStats'>Kills: {m.TotalKills}</h4>
                <h4 className='textStats'>Assits: {m.TotalAssists}</h4>
                <h4 className='textStats'>Deaths: {m.TotalDeaths}</h4>
            </div>
        </div>
    )
}