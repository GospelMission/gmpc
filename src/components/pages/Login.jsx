import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Validation from "../Validation"

function Login(props) {
    const navigate = useNavigate()

    useEffect(() => {
        const jwtToken = sessionStorage.getItem('jwtToken');
        if (jwtToken) {
            navigate('/notesapp')
        } else sessionStorage.clear();
    }, []);
    
    const[formData, setFormData] = useState({
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
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        const validationErrors = Validation(formData, false);
        setErrors(validationErrors)

        const isFormDataComplete = Object.values(validationErrors).every(error => error === "");

        if (isFormDataComplete) {
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
                props.handleLoginSuccess();
                const data = await response.json(); // 
                const jwtToken = data.data.token;
                sessionStorage.setItem('jwtToken', jwtToken);
                navigate('/notesapp')
            } else {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    others: "Bad Credentials"
                }))
                sessionStorage.clear()
                console.error('Bad Credentials.');
            }
        }
    }

  return (
    <div className='login-wrapper'>
        <form className='login-form'>
                <input onChange={handleInput} name='email' type='text' placeholder='E-mail'/>
                {errors.email && <span>{errors.email}</span>}
                <input onChange={handleInput} name='password' type='password' placeholder='Password'/> 
                {errors.password && <span>{errors.password}</span>}
            <button onClick={handleSubmit}>Login</button>
            {errors.others && <span>{errors.others}</span>}
            <Link to="/register">Not yet registered?</Link>
        </form>
    </div>
  )
}

export default Login