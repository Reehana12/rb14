import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup' 
function Signupform(props) {
    
    const myform = useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            email:'',
            password:''
        },
        validationSchema:Yup.object({
            firstname:Yup.string().max(15).required("first name is a mandatory field"),
            lastname:Yup.string().max(15).required("last name please"),
            email:Yup.string().email('given email is not valid').required("please give email"),
            password:Yup.string().required("password is needed").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,"given password not in the required format")
        }),
        onSubmit:(values)=>{
            console.log("submit called",values)
        }
    })
    return (
        <div>
            <h1>Registation</h1>
            <form onSubmit={myform.handleSubmit}>
                <label htmlFor="firstname">Firstname</label>
                <input type="text" id="firstname" name="firstname" onBlur={myform.handleBlur} onChange={myform.handleChange} value={myform.values.firstname}/>
                <br></br>
                <h4>{myform.touched.firstname && myform.errors.firstname}</h4>
                <label htmlFor="lastname">Lastname</label>
                <input type="text" id="lastname" name="lastname"  onBlur={myform.handleBlur} onChange={myform.handleChange} value={myform.values.lastname}/>
                <br></br>
                <h4>{myform.touched.lastname && myform.errors.lastname}</h4>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" onBlur={myform.handleBlur}  onChange={myform.handleChange} value={myform.values.email}/>
                <br></br>
                <h2>{myform.touched.email && myform.errors.email}</h2>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onBlur={myform.handleBlur}  onChange={myform.handleChange} value={myform.values.password}/>
                <br></br>
                <h2>{myform.touched.password && myform.errors.password}</h2>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Signupform;