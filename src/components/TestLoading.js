import React, { useEffect, useState } from "react";
import '../App.css';

function HaloPlayers() {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // setIsSearching(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  function getInfo() {
    // setIsLoading(false);
    setIsSearching(true);
  };

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <div className="SearchbarContainer" >
        <h3 className="searchtext">Search Test:</h3>
        <div className="inputContainer">
          <input className="Input"
            type="text"
            onChange={handleInputChange}
            value={query}
            name="name"
            placeholder="Enter Xbox Live Username"
            autoComplete="off"
          />
          <button className="buttonSearch" onClick={getInfo}>Search</button>
        </div>
      </div>

      <div>

        {isSearching ? (<div>
          {isLoading ? (
            <div><h2>Loading...</h2></div>
          ) : (
            <div className="cardContainer">


                <h3>DATA LOADED!</h3>
            </div>
          )}

        </div>) : (<div></div>)}
      </div>
    </div>
  );
}

export default HaloPlayers;