import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";

import '../../css/playerCard.css';
import '../../css/highestRank.css'

function HighestRankContainer({ HRankAttainedDesign, HighestCsr, HighestRank, HRankAttainedTier, CurrentRank }) {
    const [dataRank, setDataRank] = useState([]);

    // useEffect(() => {
    //     axiosWithAuth()
    //         .get('https://www.haloapi.com/metadata/h5/metadata/csr-designations')
    //         .then(res => {
    //             const info = res.data
    //             // console.log(info);
    //             setDataRank(info);
    //         });
    // }, []);

    const imageRank = dataRank.map(r => {
        return (
            <div key={r.id}>
                {HRankAttainedDesign === Number(r?.id) ? (
                    <div>
                        {r?.tiers?.map(t => {
                            return (
                                <div key={t.id}>
                                    {HRankAttainedTier === Number(t?.id) ? (
                                        <div className="peakImage">
                                            <img className="highestRankImage" src={t.iconImageUrl} alt="rank images" />
                                            <div className="textCsr">
                                                <h4 className="peakText">{HighestCsr} CSR</h4>
                                                <h4 className="peakText">Rank: {HighestRank}</h4>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            )
                        })}
                    </div>
                ) : null}
            </div>
        )
    })

    const nameRank = dataRank.map(r => {
        return (
            <div key={r.id}>
                {HRankAttainedDesign === Number(r?.id) ? (
                    <div className="rankImageContainer_B">
                        <h3 className="peakTextTier">{r.name}</h3>
                    </div>
                ) : null}
            </div>
        )
    })


    return (
        <div className="cardSection1">
            {/* <button onClick={getImageRank}>Rank</button> */}
            <h2 className="peakTextTitle">Highest Rank</h2>
            <div>
                {nameRank}
                {imageRank}
            </div>
        </div>
    )
}

export default HighestRankContainer