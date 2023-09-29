import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Validation from "../Validation"
import { login } from '../../services/login'

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