
import { getMatchID, getExtra } from '../utils/Info';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
// import EndButtonRedirect from '../components/endButtons';

const tabs = [
    {
        id: '1',
        name: 'People',
    }
]

export default function MoreInfoFilm() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [people, setPeople] = useState([{ 'id': 1, 'name': 'No characteres can be named currently' }]);
    const [tabActive, setTabActive] = useState('People');

    function tabButton(event, name) {
        event.preventDefault();
        setTabActive(name);
    }

    useEffect(() => {
        getMatchID(id).then((event) => {
            setData(event);
            let changedData = [];

            //.get(`https://www.haloapi.com/stats/h5/custom/matches/{matchId}`)
            if (event.people[0] !== 'https://ghibliapi.herokuapp.com/people/') {
                Promise.all(event.people.map((person) => {
                    return getExtra(person).then((data) => {
                        changedData.push(data);
                    });
                })).then(() => {
                    setPeople(changedData);
                });
            }
        })
    }, [id]);


    let navigate = useNavigate();
    function routeBack() {
        navigate("/");
    };
    

    return (
        <div>
<button onClick={routeBack}>BACK</button>
            <div className='bodyPadding'>
                
                <div id='film-grid'>
                    <div className='center-layout'>
                        <img id='film-img' src={data.movie_banner} alt={data.title}></img>
                    </div>
                    
                    <div>
                        <div id='film-titles'>
                            <h2>{data.title} </h2>

                        </div>
                    </div>
                </div>

                <div id='tab-div'>
                    {tabs.map((tab) => (
                        <span key={tab.id}>
                            <h1>{tab.name}</h1>
                        </span>
                    ))}
                </div>

                <div className='people-container'>
                    {people.map((item) => (
                        <div className='grid-item' key={item.id}>
                            <h3>{item.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}