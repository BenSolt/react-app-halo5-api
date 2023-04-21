function Ranks(props) {

    // console.log("propsCurrentRank:",props.CurrentRank)
    return (
        <div>
            {props.CurrentRank === undefined || props.CurrentRank.length === 0 ? (<div><h4 className="textStats2">NO Data Available</h4></div>) : (<div></div>)}
            {props.CurrentRank.map(info => {
                // UNRANKED ////////////////////////////////////////////////////////////////
                if (info.Csr.DesignationId === 0) {
                    if (info.Csr.Tier === 1) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">Unranked 1</h4>
                                <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/unranked_00-61fca949c33f433ba7e7507d97ff130f.png" alt="rank images"></img>
                            </div>
                        )
                    } else if (info.Csr.Tier === 2) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">Unranked 2</h4>
                            </div>
                        )
                    } else if (info.Csr.Tier === 3) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">Unranked 3</h4>
                            </div>
                        )
                    } else if (info.Csr.Tier === 4) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">Unranked 4</h4>
                            </div>
                        )
                    } else if (info.Csr.Tier === 5) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">Unranked 5</h4>
                            </div>
                        )
                    } else if (info.Csr.Tier === 6) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textStats2">Unranked 6</h4>
                            </div>
                        )
                    } else if (info.Csr.Tier === 7) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">Unranked 7</h4>
                            </div>
                        )
                    } else if (info.Csr.Tier === 8) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">Unranked 8</h4>
                            </div>
                        )
                    } else if (info.Csr.Tier === 9) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">Unranked 9</h4>
                            </div>
                        )
                    } else if (info.Csr.Tier === 10) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">Unranked 10</h4>
                            </div>
                        )
                    } else {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier"></h4>
                            </div>
                        )
                    }

                    // BRONZE /////////////////////////////////////////////////////////////////////////////////////////////
                } else if (info.Csr.DesignationId === 1) {
                    if (info.Csr.Tier === 1) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">BRONZE 1</h4>
                                <div className="rankImageContainer">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_bronze_array01-c68c7e495d124eba8343c0874d74cd36.png" alt="rank images"></img>
                                    <div className="percentileSection">
                                        <span className='textStats'>CSR Percentile:</span>
                                        <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    } else if (info.Csr.Tier === 2) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">BRONZE 2</h4>
                                <div className="rankImageContainer">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_bronze_array02-431098c768ef4832b5d925ba06efbe70.png" alt="rank images"></img>
                                    <div className="percentileSection">
                                        <span className='textStats'>CSR Percentile:</span>
                                        <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    } else if (info.Csr.Tier === 3) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">BRONZE 3</h4>
                                <div className="rankImageContainer">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_bronze_array03-be10288e2f534c4ebd990769ebb98205.png" alt="rank images"></img>
                                    <div className="percentileSection">
                                        <span className='textStats'>CSR Percentile:</span>
                                        <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    } else if (info.Csr.Tier === 4) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">BRONZE 4</h4>
                                <div className="rankImageContainer">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_bronze_array04-961414ccdf8a4e5c8a5f9222f3f28ef3.png" alt="rank images"></img>
                                    <div className="percentileSection">
                                        <span className='textStats'>CSR Percentile:</span>
                                        <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    } else if (info.Csr.Tier === 5) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">BRONZE 5</h4>
                                <div className="rankImageContainer">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_bronze_array05-ee28f7cd7ef1456cba392ca10b947961.png" alt="rank images"></img>
                                    <div className="percentileSection">
                                        <span className='textStats'>CSR Percentile:</span>
                                        <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">BRONZE 6</h4>
                                <div className="rankImageContainer">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_bronze_array06-b9c70a4d151846d590e38b67ae0000e7.png" alt="rank images"></img>
                                    <div className="percentileSection">
                                        <span className='textStats'>CSR Percentile:</span>
                                        <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    // SILVER /////////////////////////////////////////////////////////////////////////////////////////////
                } else if (info.Csr.DesignationId === 2) {
                    if (info.Csr.Tier === 1) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">Silver 1</h4>
                                <div className="rankImageContainer">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_silver_array01-b4739333586340bda2eed6099e630f92.png" alt="rank images"></img>
                                    <div className="percentileSection">
                                        <span className='textStats'>CSR Percentile:</span>
                                        <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    } else if (info.Csr.Tier === 2) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">Silver 2</h4>
                                <div className="rankImageContainer">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_silver_array02-bbdda8849cd247219a78446423790d4c.png" alt="rank images"></img>
                                    <div className="percentileSection">
                                        <span className='textStats'>CSR Percentile:</span>
                                        <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    } else if (info.Csr.Tier === 3) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">Silver 3</h4>
                                <div className="rankImageContainer">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_silver_array03-6849dd95d8f2408188412ce2e33c137b.png" alt="rank images"></img>
                                    <div className="percentileSection">
                                        <span className='textStats'>CSR Percentile:</span>
                                        <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    } else if (info.Csr.Tier === 4) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">Silver 4</h4>
                                <div className="rankImageContainer">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_silver_array04-42293fba165048e8ac847898376f5653.png" alt="rank images"></img>
                                    <div className="percentileSection">
                                        <span className='textStats'>CSR Percentile:</span>
                                        <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    } else if (info.Csr.Tier === 5) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">Silver 5</h4>
                                <div className="rankImageContainer">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_silver_array05-03f6dcc3b26542daadba4b0d7c988d53.png" alt="rank images"></img>
                                    <div className="percentileSection">
                                        <span className='textStats'>CSR Percentile:</span>
                                        <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">Silver 6</h4>
                                <div className="rankImageContainer">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_silver_array06-8e3ab3d5ce5d4f27af827e52e1837439.png" alt="rank images"></img>
                                    <div className="percentileSection">
                                        <span className='textStats'>CSR Percentile:</span>
                                        <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    // GOLD /////////////////////////////////////////////////////////////////////////////////////////////
                } else if (info.Csr.DesignationId === 3) {
                    if (info.Csr.Tier === 1) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">Gold 1</h4>
                                <div className="rankImageContainer">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_gold_array01-5053cd291bb74d6a852f0cb90a62195e.png" alt="rank images"></img>
                                    <div className="percentileSection">
                                        <span className='textStats'>CSR Percentile:</span>
                                        <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    } else if (info.Csr.Tier === 2) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">Gold 2</h4>
                                <div className="rankImageContainer">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_gold_array02-b68d8b0ec47f4ed689d6149959b74853.png" alt="rank images"></img>
                                    <div className="percentileSection">
                                        <span className='textStats'>CSR Percentile:</span>
                                        <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    } else if (info.Csr.Tier === 3) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">Gold 3</h4>
                                <div className="rankImageContainer">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_gold_array03-bcbc2b460a934f10b499ee7f9bec6315.png" alt="rank images"></img>
                                    <div className="percentileSection">
                                        <span className='textStats'>CSR Percentile:</span>
                                        <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    } else if (info.Csr.Tier === 4) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">Gold 4</h4>
                                <div className="rankImageContainer">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_gold_array04-3e368546454941e7be9662bb893d80ed.png" alt="rank images"></img>
                                    <div className="percentileSection">
                                        <span className='textStats'>CSR Percentile:</span>
                                        <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    } else if (info.Csr.Tier === 5) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier" >Gold 5</h4 >
                                <div className="rankImageContainer">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_gold_array05-257a761c7c91418aaa03e2f68e57b117.png" alt="rank images"></img>
                                    <div className="percentileSection">
                                        <span className='textStats'>CSR Percentile:</span>
                                        <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier" >Gold 6</h4 >
                                <div className="rankImageContainer">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_gold_array06-89344b204245450d815f0e22ec3d4b1e.png" alt="rank images"></img>
                                    <div className="percentileSection">
                                        <span className='textStats'>CSR Percentile:</span>
                                        <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    // PLATINUM /////////////////////////////////////////////////////////////////////////////////////////////
                } else if (info.Csr.DesignationId === 4) {
                    if (info.Csr.Tier === 1) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">PLATINUM</h4>
                                <div className="rankImageContainer">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_platinum_array01-c8df3dc366ea49209762f9b08189ffa6.png" alt="rank images"></img>
                                    <div className="percentileSection">
                                        <span className='textStats'>CSR Percentile:</span>
                                        <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    } else if (info.Csr.Tier === 2) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">PLATINUM 2</h4>
                                <div className="rankImageContainer">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_platinum_array02-b405ecb131fd424daf54a9c65637e0ad.png" alt="rank images"></img>
                                    <div className="percentileSection">
                                        <span className='textStats'>CSR Percentile:</span>
                                        <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    } else if (info.Csr.Tier === 3) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">PLATINUM 3</h4>
                                <div className="rankImageContainer">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_platinum_array03-6bbe1ab4c33245deb98306c02af52b26.png" alt="rank images"></img>
                                    <div className="percentileSection">
                                        <span className='textStats'>CSR Percentile:</span>
                                        <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    } else if (info.Csr.Tier === 4) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">PLATINUM 4</h4>
                                <div className="rankImageContainer">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_platinum_array04-a6b2cf1f15164557a35df91f0f5f2e85.png" alt="rank images"></img>
                                    <div className="percentileSection">
                                        <span className='textStats'>CSR Percentile:</span>
                                        <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    } else if (info.Csr.Tier === 5) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">PLATINUM 5</h4>
                                <div className="rankImageContainer">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_platinum_array05-fe21b9454a2944e593f9012da06810f3.png" alt="rank images"></img>
                                    <div className="percentileSection">
                                        <span className='textStats'>CSR Percentile:</span>
                                        <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">PLATINUM 6</h4>
                                <div className="rankImageContainer">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_platinum_array06-05c733f15d1b4101ba2b04d1eb56df63.png" alt="rank images"></img>
                                    <div className="percentileSection">
                                        <span className='textStats'>CSR Percentile:</span>
                                        <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    // DIAMOND /////////////////////////////////////////////////////////////////////////////////////////////
                } else if (info.Csr.DesignationId === 5) {
                    if (info.Csr.Tier === 1) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">Diamond 1</h4>
                                <div className="rankImageContainer">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_diamond_array01-9721d95b267942dcb1edcce6dfc25631.png" alt="rank images"></img>
                                    <div className="percentileSection">
                                        <span className='textStats'>CSR Percentile:</span>
                                        <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    } else if (info.Csr.Tier === 2) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">Diamond 2</h4>
                                <div className="rankImageContainer">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_diamond_array02-02e21757b59540f7a9b7d39656ab855d.png" alt="rank images"></img>
                                    <div className="percentileSection">
                                        <span className='textStats'>CSR Percentile:</span>
                                        <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    } else if (info.Csr.Tier === 3) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">Diamond 3</h4>
                                <div className="rankImageContainer">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_diamond_array03-b740122fc19c4e829bb8c8fda023a1f9.png" alt="rank images"></img>
                                    <div className="percentileSection">
                                        <span className='textStats'>CSR Percentile:</span>
                                        <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    } else if (info.Csr.Tier === 4) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">Diamond 4</h4>
                                <div className="rankImageContainer">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_diamond_array04-7848018cc29c43bf932b9c03b19ed766.png" alt="rank images"></img>
                                    <div className="percentileSection">
                                        <span className='textStats'>CSR Percentile:</span>
                                        <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    } else if (info.Csr.Tier === 5) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">Diamond 5</h4>
                                <div className="rankImageContainer">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_diamond_array05-539c69e9f27e4e8bbf9a52d9755dce7c.png" alt="rank images"></img>
                                    <div className="percentileSection">
                                        <span className='textStats'>CSR Percentile:</span>
                                        <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">Diamond 6</h4>
                                <div className="rankImageContainer">
                                    <img className="tierCardImage" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_diamond_array06-b64e6ab9c4864c0f8848554853892fab.png" alt="rank images"></img>
                                    <div className="percentileSection">
                                        <span className='textStats'>CSR Percentile:</span>
                                        <span className='textStatsBold'>{info.CsrPercentile}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    // ONYX /////////////////////////////////////////////////////////////////////////////////////////////
                } else if (info.Csr.DesignationId === 6) {
                    if (info.Csr.Tier === 1) {
                        return (
                            <div key={info.Csr.Tier}>
                                <h4 className="textTier">Onyx</h4>
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
                                <h4 className="textTier">Champion</h4>
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
                        <div></div>
                    )
                }
            })
            }
        </div>
    )
}
export default Ranks;

