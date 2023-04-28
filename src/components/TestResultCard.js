import React, { useEffect, useState } from "react";
import '../css/matchCard.css';

const arr = [
    {
        TeamId: 1,
        Rank: 3,
        Gamertag: "Tim",
        TotalKills: 8,
        TotalAssists: 8,
        TotalDeaths: 16
    },
    {
        TeamId: 0,
        Rank: 1,
        Gamertag: "Ben",
        TotalKills: 25,
        TotalAssists: 12,
        TotalDeaths: 5
    },
    {
        TeamId: 1,
        Rank: 2,
        Gamertag: "sara",
        TotalKills: 10,
        TotalAssists: 8,
        TotalDeaths: 9
    },
    {
        TeamId: 0,
        Rank: 2,
        Gamertag: "Liz",
        TotalKills: 15,
        TotalAssists: 8,
        TotalDeaths: 9
    },
    {
        TeamId: 1,
        Rank: 1,
        Gamertag: "Jon",
        TotalKills: 16,
        TotalAssists: 8,
        TotalDeaths: 16
    },
    {
        TeamId: 0,
        Rank: 3,
        Gamertag: "Joan",
        TotalKills: 10,
        TotalAssists: 8,
        TotalDeaths: 16
    }
]

function TestResultCard() {

    const [dataMatch, setDataMatch] = useState(arr);
    let color = " "

    dataMatch.sort((a, b) => {
        // sort by team first
        if (a.TeamId < b.TeamId) {
        return -1;
        }
        if (a.TeamId > b.TeamId) {
        return 1;
        }
         
        // if same team, sort by rank
        if (a.Rank < b.Rank) {
        return -1;
        }
        if (a.Rank > b.Rank) {
        return 1;
        }
         
        // if everything is equal, return 0
        return 0;
        });

    return (
        <div className="matchCardResults">
            <div className="matchCard">
                <div className="matchCardContainer">
                    {dataMatch.map(m => {
                        const KillsAssits = m.TotalKills + m.TotalAssists
                        const KillDivide = KillsAssits / m.TotalDeaths * 1
                        const KDA = KillDivide.toFixed(2);

                        if (m.TeamId === 0) {
                            color = 'redTeam'
                        } else {
                            color = 'blueTeam'
                        }

                        return (
                            <div className={color} key={m.Gamertag} m={m}>
                                <h4 className='textStats'>{m.TeamId}</h4>
                                <h4 className='textStats'>{m.Rank}</h4>
                                <h4 className='textStats'>{m.Gamertag}</h4>
                                <h4 className='textStats'>K/D Ratio: {KDA}</h4>
                                <h4 className='textStats'>Kills: {m.TotalKills}</h4>
                                <h4 className='textStats'>Assits: {m.TotalAssists}</h4>
                                <h4 className='textStats'>Deaths: {m.TotalDeaths}</h4>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};
export default TestResultCard;