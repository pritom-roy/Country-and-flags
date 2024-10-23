import { useState } from "react";
import { useEffect } from "react";
import Country from "./OneCountry/Country";
import './style.css'

const Countries = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(res => setData(res));
    }, []);

    const [Flag, setFlag] = useState([]);

    const visitedFlag = (flagImage) => {
        const check = Flag.find((flag) => flag === flagImage);
        if (!check) {
            const newFlag = [...Flag, flagImage];
            setFlag(newFlag);
        }

    }


    return (
        <>
            <h1 style={{ textAlign: "center" }}>Countries : {data.length}</h1>
            <h1 style={{ textAlign: "center" }}>Visited Countries: {Flag.length}</h1>
            <div className="visitedCountries">
                {
                    Flag.map(element =>
                        <img key={element.name.common} src={element.flags.png} />
                    )
                }
            </div>
            <div className="sc">
                {
                    data.map(element => <Country key={element.cca3} country={element} visitedFlag={visitedFlag}></Country>)
                }
            </div>
        </>
    );
};

export default Countries;