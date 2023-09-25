function Validation(formData, isRegistration) {
    let error = {}
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

    if(isRegistration && formData.name === "") {
        error.name = "name is empty."
    }

    if(formData.email === "") {
        error.email = "email is empty."
    } else if(!emailPattern.test(formData.email)) {
        error.email = "invalid email."
    }

    if(formData.password === "") {
        error.password = "password is empty."
    } else if(!passwordPattern.test(formData.password)) {
        error.password = "invalid password."
    }

    return error;
}

export default Validation;