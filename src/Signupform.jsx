import React from 'react';
import {useFormik} from 'formik'
function Signupform(props) {
    function validate(values){
        var errors = {}
        //first name validation
        if(values.firstname===null || values.firstname===''){
            errors.firstname = "first name is required field"
        }
        //last name validation
        if(values.lastname===null || values.lastname===''){
            errors.lastname = "last name is required field"
        }
        return errors
    }
    const myform = useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            email:'',
            password:''
        },
        validate:validate,
        onSubmit:(values)=>{
            console.log("submit called",values)
        }
    })
    return (
        <div>
            <h1>Registation</h1>
            <form onSubmit={myform.handleSubmit}>
                <label htmlFor="firstname">Firstname</label>
                <input type="text" id="firstname" name="firstname" onChange={myform.handleChange} value={myform.values.firstname}/>
                <br></br>
                <h4>{myform.errors.firstname}</h4>
                <label htmlFor="lastname">Lastname</label>
                <input type="text" id="lastname" name="lastname" onChange={myform.handleChange} value={myform.values.lastname}/>
                <br></br>
                <h4>{myform.errors.lastname}</h4>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" onChange={myform.handleChange} value={myform.values.email}/>
                <br></br>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={myform.handleChange} value={myform.values.password}/>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Signupform;