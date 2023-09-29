import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Validation from "../Validation"
import { signup } from '../../services/signup';
import { login } from '../../services/login';

function Register(props) {
    const navigate = useNavigate();
    const jwtToken = sessionStorage.getItem('jwtToken');
    if (jwtToken) {
        navigate('/notesapp')
    }
    const[formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })

    const[errors, setErrors] = useState({})

    const handleInput = event => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [event.target.name]: event.target.value
        }))
    }
    
    const handleSubmit = event => {
        event.preventDefault()
        const validationErrors = Validation(formData, true);
        setErrors(validationErrors)

        const isFormDataComplete = Object.values(validationErrors).every(error => error === "");

        if (isFormDataComplete) {
            const formDataJSON = JSON.stringify(formData);
            signup(formDataJSON)
            .then( async() => {
                login(formData.email, formData.password)
                .then(data => {
                    props.handleLoginSuccess();
                    const jwtToken = data.token;
                    sessionStorage.setItem('jwtToken', jwtToken);
                    navigate('/notesapp')
                })
                .catch(error => {
                    sessionStorage.clear()
                    console.error(error.message)
                })
            })
        }
    }

  return (
    <div className='register-wrapper'>
        <form className='register-form'>
           
                <input onChange={handleInput} name='name' type='text' placeholder='FirstName'/>
                {errors.name && <span>{errors.name}</span>}
            
           
                <input onChange={handleInput} name='email' type='text' placeholder='E-mail'/>
                {errors.email && <span>{errors.email}</span>}
          
         
                <input onChange={handleInput} name='password' type='password' placeholder='Password'/> 
                {errors.password && <span>{errors.password}</span>}
            <button onClick={handleSubmit}>Register</button>
            {errors.others && <span>{errors.others}</span>}
            <Link to="/login">Already have an account?</Link>
        </form>
    </div>
  )
}

export default Register