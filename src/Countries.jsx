import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCountries } from './store/actions';
import { selectCountries } from './store/countries.reducer';
import { Link } from 'react-router-dom'
function Countries(props) {
    console.log("props in countries component",props)
    useEffect(()=>{
       props.getAllCountries()
    },[])
    return (
        <div className='mybox'>
            <div  style={{display:'flex',flexWrap:'wrap',alignItems:'flex-end'}}>
            {
                props.countries.map((country)=>{
                    return <li style={{width:'150px',border:'1px solid',margin:'5px'}}>
                        <Link to={`/countryDetails/${country.alpha2Code}`}>{country.name}</Link>
                        
                        <img src={country.flag} width="150px" height="100px" alt="" />
                        </li>
                })
            }
            </div>
        </div>
    );
}
function mapStateToProps(state){
    const countries = selectCountries(state)
    return {countries:countries}
}
function mapDispatchToProps(dispatch){
    return {
        getAllCountries:function(){
            dispatch(getCountries())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Countries);