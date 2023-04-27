import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

import HaloRankCard from "../components/HaloRankCard";
import '../css/ranks.css';

function HaloRanks() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        if (isLoading) return
    }, [isLoading])

    function getInfo() {
        axiosWithAuth()
            .get('https://www.haloapi.com/metadata/h5/metadata/csr-designations')
            .then(res => {
                const info = res.data
                console.log(info);
                setData(info);
                setIsLoading(false);
                setIsSearching(true);
            });
    }

    return (
        <div>
            <div>
                <div className="SearchbarContainer2" >
                    <h3 className='searchtext'>Halo 5 Ranks</h3>
                    <button className='buttonSearch' onClick={getInfo}>Search</button>
                </div>

                {isSearching ? (<div>
                    {isLoading ? (
                        <div>Loading...</div>
                    ) : (
                        <div className="cardContainer">
                            {data.map(r => {
                                return < HaloRankCard key={r.id} r={r} />
                            })}
                        </div>
                    )}
                </div>) : (<div></div>)}
            </div>
        </div>
    )
};

export default HaloRanks;