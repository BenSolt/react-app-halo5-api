import '../App.css';
import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import HaloMapCard from "../components/HaloMapCard";

function HaloMaps() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (isLoading) return
  }, [isLoading])

  function getInfo() {
    axiosWithAuth()
      .get('https://www.haloapi.com/metadata/h5/metadata/maps')
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
      <div className="SearchbarContainer" >
        <h3 className='searchtext'>HALO 5 MAPS</h3>
        <button className='buttonSearch' onClick={getInfo}>Search</button>
      </div>

      {isSearching ? (<div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="mapContainer">
            {data.map(m => {
              return < HaloMapCard key={m.id} m={m} />
            })}
          </div>
        )}
      </div>) : (<div></div>)}
    </div>
  );
}

export default HaloMaps;