import React from "react";
import '../css/mapCard.css';

export default function HaloMapCard({m}) {
 
    return (
      <div className="mapCard">
          <h3>{m?.name}</h3>
          <img className="MapImage" src={m?.imageUrl} alt="map images"/>
          <h6>{m?.description}</h6>
          {/* {m.supportedGameModes} */}
           {/* {m.filter(str => (str.supportedGameModes === "Warzone"))} */}
      </div>
    )
}