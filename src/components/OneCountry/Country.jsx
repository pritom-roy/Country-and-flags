import { useState } from 'react';
import './Country.css'
const Country = ({ country, visitedFlag }) => {
    const { name, population, startOfWeek, flags, landlocked
    } = country;

    const [visited, setVisited] = useState(false);
    const visit = () => {
        setVisited(!visited);
        visitedFlag(country);
    }

    return (
        <div className={`countryCss ${visited && 'vdesign'}`}>
            <h1>Name : {name.common}</h1>
            <img src={flags.svg} alt="" />
            <h2>Population: {population}</h2>
            <h2>Start Of Week : {startOfWeek}</h2>
            <h2>Land Locked: {
                landlocked ? <span>Yes</span> : <span>No</span>
            }</h2>
            <button className='btn' onClick={visit}>Visited</button>
            {visited && 'Nice Country'}
        </div>
    );
};

export default Country;