import React from "react";
import '../css/mapCard.css';

export default function HaloMapCard({ m }) {

  //console.log("GAMEMODES:", m.supportedGameModes)

  // if (m.supportedGameModes === "Warzone") {
  //   console.log('ARENA MAPS')
  // } else if (m.supportedGameModes === null) {
  //   console.log("NO DATA")
  // } else {
  //   console.log("NOT ARENA")
  // }

  return (
    <div className="mapCard">
      <h3>{m?.name}</h3>
      <h6>{m.supportedGameModes}</h6>
      <img className="MapImage" src={m?.imageUrl} alt="map images" />
      <h6>{m?.description}</h6>

      {/* {m.filter(str => (str.supportedGameModes === "Warzone"))} */}
    </div>
  )
}