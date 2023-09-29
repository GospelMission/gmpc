export const signup = (formDataJSON) => {
    return fetch('http://localhost:8080/api/v1/users/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formDataJSON
    })
}