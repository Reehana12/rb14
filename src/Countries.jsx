import React from 'react';

function Countries(props) {
    const [countries,setcountries] = React.useState([])
    React.useEffect(()=>{
        fetch("https://restcountries.com/v2/all")
        .then((res)=>{
            return res.json()
        })
        .then(data=>{
            setcountries([...data])
        })
    },[])
    return (
        <div className='mybox greenish'>
            <h1>Countries Component</h1>
            <button>Sort by name</button>&nbsp;&nbsp;&nbsp;
            <button>Sort by population</button>&nbsp;&nbsp;&nbsp;
            <button>Sort by area</button>&nbsp;&nbsp;&nbsp;
            <select>
                <option>Please select</option>
            </select>
            {
                countries && countries.map(function(c,i){
                    console.log(c.region)
                    return <li>{c.name}</li>
                })
            }
        </div>
    );
}

export default Countries;