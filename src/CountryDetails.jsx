import React from 'react';
import {useParams} from 'react-router-dom'
function CountryDetails(props) {
    var x = useParams();
    var [countryDetails,setcountrydetails] =React.useState({});
    React.useEffect(()=>{
        fetch(`https://restcountries.com/v2/alpha/${x.alphacode}`)
        .then(res=>res.json())
        .then(data=>{
            setcountrydetails({...data});
        })
    },[x]);
    return (
        <div>
            <h1>{countryDetails.name} Details Below</h1>
            <img src={countryDetails.flag} alt="" width="300px"/>
            <h3>Population:{countryDetails.population}</h3>
        </div>
    );
}

export default CountryDetails;