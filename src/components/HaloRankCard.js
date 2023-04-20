import React from "react";


export default function HaloRank({ r }) {

    //Number within Tier (1-6)
    // const aRank = h.tiers.filter(str => (str.id === 1))

    return (
        <div>
            <h4 className="title">{r?.name}</h4>
           
            <div className='TierHolder'>
                {/* <img  className='Banner'src={h.bannerImageUrl} /> */}
                {r?.name === 'Onyx' ? (<h4 className="title">Onyx starts at 1500</h4>) : null}
                {r?.name === 'Champion' ? (<h4 className="title">First 200 Onyx players</h4>) : null}

                {r?.tiers?.map(r => {
                    return (
                        <div key={r.id}>
                            <img className="Tier" src={r.iconImageUrl} alt="rank images" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}