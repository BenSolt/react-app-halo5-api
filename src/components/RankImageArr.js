function Ranks(props) {

    // console.log("propsCurrentRank:",props.CurrentRank)
    return (
        <div>
            {props.CurrentRank === undefined || props.CurrentRank.length === 0 ? (<div><h4 className="textStats2">NO Data</h4></div>) : (<div></div>)}

            {props.CurrentRank.map(info => {
                // UNRANKED ////////////////////////////////////////////////////////////////
                if (info.Csr.DesignationId === 0) {
                    if (info.Csr.Tier === 1) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Unranked</h4>
                                <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/unranked_00-61fca949c33f433ba7e7507d97ff130f.png" alt="rank images"></img>
                            </div>
                        )

                    } else if (info.Csr.Tier === 2) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Image 2</h4>
                            </div>
                        )

                    } else if (info.Csr.Tier === 3) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Image 3</h4>
                            </div>
                        )

                    } else if (info.Csr.Tier === 4) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Image 4</h4>
                            </div>
                        )

                    } else if (info.Csr.Tier === 5) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Image 5</h4>
                            </div>
                        )

                    } else if (info.Csr.Tier === 6) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Image 6</h4>
                            </div>
                        )

                    } else if (info.Csr.Tier === 7) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Image 7</h4>
                            </div>
                        )

                    } else if (info.Csr.Tier === 8) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Image 8</h4>
                            </div>
                        )

                    } else if (info.Csr.Tier === 9) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Image 9</h4>
                            </div>
                        )

                    } else if (info.Csr.Tier === 10) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Image 10</h4>
                            </div>
                        )
                    } else {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Empty</h4>
                            </div>
                        )
                    }

                    // BRONZE /////////////////////////////////////////////////////////////////////////////////////////////
                } else if (info.Csr.DesignationId === 1) {

                    <h4 className="textStats2">Bronze</h4>
                    if (info.Csr.Tier === 1) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">BRONZE</h4>
                                <img class="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_bronze_array01-c68c7e495d124eba8343c0874d74cd36.png" alt="rank images"></img>
                            </div>
                        )
                    } else if (info.Csr.Tier === 2) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Image B2</h4>
                            </div>
                        )
                    } else if (info.Csr.Tier === 3) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Image B3</h4>
                            </div>
                        )
                    } else if (info.Csr.Tier === 4) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Image B4</h4>
                            </div>
                        )
                    } else {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Image B5</h4>
                            </div>
                        )
                    }

                    // SILVER /////////////////////////////////////////////////////////////////////////////////////////////
                } else if (info.Csr.DesignationId === 2) {
                    if (info.Csr.Tier === 1) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Silver</h4>
                                <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_silver_array01-b4739333586340bda2eed6099e630f92.png" alt="rank images"></img>
                            </div>
                        )
                    } else if (info.Csr.Tier === 2) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Image Silver 2</h4>
                            </div>
                        )

                    } else if (info.Csr.Tier === 3) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Image Silver 3</h4>
                            </div>
                        )
                    } else if (info.Csr.Tier === 4) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Image Silver 4</h4>
                            </div>
                        )
                    } else {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Image Silver 5</h4>
                            </div>
                        )
                    }

                    // GOLD /////////////////////////////////////////////////////////////////////////////////////////////
                } else if (info.Csr.DesignationId === 3) {
                    if (info.Csr.Tier === 1) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">GOLD</h4>
                                <img class="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_gold_array01-5053cd291bb74d6a852f0cb90a62195e.png" alt="rank images"></img>
                            </div>
                        )
                    } else if (info.Csr.Tier === 2) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Image Gold 2</h4>
                            </div>
                        )
                    } else if (info.Csr.Tier === 3) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Image Gold 3</h4>
                            </div>
                        )
                    } else if (info.Csr.Tier === 4) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Image Gold 4</h4>
                            </div>
                        )
                    } else {
                        return (
                            <div key={info.Csr.Tier}>
                                < h4 className="textStats2" > Image Gold 5</h4 >
                            </div>
                        )
                    }
                    // PLATINUM /////////////////////////////////////////////////////////////////////////////////////////////
                } else if (info.Csr.DesignationId === 4) {
                    if (info.Csr.Tier === 1) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">PLATINUM</h4>
                                <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_platinum_array01-c8df3dc366ea49209762f9b08189ffa6.png" alt="rank images"></img>
                            </div>
                        )
                    } else if (info.Csr.Tier === 2) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Image Plat 2</h4>
                            </div>
                        )
                    } else if (info.Csr.Tier === 3) {

                        return (
                            <div key={info.Csr.Tier}>

                                <h4 className="textStats2">Image Plat 3</h4>
                            </div>
                        )
                    } else if (info.Csr.Tier === 4) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Image Plat 4</h4>
                            </div>
                        )

                    } else {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Image Plat 5</h4>
                            </div>
                        )
                    }

                    // DIAMOND /////////////////////////////////////////////////////////////////////////////////////////////
                } else if (info.Csr.DesignationId === 5) {
                    if (info.Csr.Tier === 1) {
                        return (
                            <div key={info.Csr.Tier}>
                                <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_diamond_array01-9721d95b267942dcb1edcce6dfc25631.png" alt="rank images"></img>
                            </div>
                        )
                    } else if (info.Csr.Tier === 2) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Diamond 2</h4>
                            </div>
                        )
                    } else if (info.Csr.Tier === 3) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Diamond 3</h4>
                                <div className="test">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_diamond_array03-b740122fc19c4e829bb8c8fda023a1f9.png" alt="rank images"></img>
                                    <h4 className="textStats2"># CSR</h4>
                                </div>
                            </div>
                        )
                    } else if (info.Csr.Tier === 4) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Image Diamond 4</h4>
                            </div>
                        )
                    } else {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Image Diamond 5</h4>
                            </div>
                        )
                    }

                    // ONYX /////////////////////////////////////////////////////////////////////////////////////////////
                } else if (info.Csr.DesignationId === 6) {
                    if (info.Csr.Tier === 1) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Onyx</h4>
                                <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_top_array00-783f32318c8c49eda0365c5daa50f5b6.png" alt="rank images"></img>
                            </div>
                        )
                    } else {
                        return (
                            <div></div>
                        )
                    }

                    // CHAMPION /////////////////////////////////////////////////////////////////////////////////////////////
                } else if (info.Csr.DesignationId === 7) {
                    if (info.Csr.Tier === 1) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Onyx</h4>
                                <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_top_array01-3755e5127c9c46368e648d58da44390e.png" alt="rank images"></img>
                            </div>
                        )
                    } else {
                        return (
                            <div></div>
                        )
                    }

                } else {
                    return (
                        <div>QQQQ</div>
                    )
                }
            })
            }
        </div>
    )
}
export default Ranks;

