import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Validation from "../Validation"

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
            fetch('http://localhost:8080/api/v1/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: formDataJSON
            })
            .then( async() => {
                const basicAuthHeader =
                'Basic ' + btoa(formData.email + ':' + formData.password);
                const response = await fetch(
                'http://localhost:8080/api/v1/users/login',
                {
                    method: 'POST',
                    headers: {
                        'Authorization': basicAuthHeader,
                        'Content-Type': 'application/json',
                    },
                }
                );
                if (response.ok) {
                    props.handleLoginSuccess()
                    const data = await response.json()
                    const jwtToken = data.data.token;
                    sessionStorage.setItem('jwtToken', jwtToken);
                    navigate('/notesapp')
                } else {
                    sessionStorage.clear()
                    console.error('Bad Credentials.');
                }
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