const baseURL = 'https://ghibliapi.herokuapp.com/';
//https://www.haloapi.com/stats/h5/custom/matches/{matchId}

export const getMatchID = async (id) => {
    const res = await fetch(baseURL + 'films/' + id);
    return res.json();
}