export const login = async (email, password) => {
    const basicAuthHeader =
    'Basic ' + btoa(email + ':' + password);
    return fetch(
    'http://localhost:8080/api/v1/users/login',
    {
        method: 'POST',
        headers: {
            'Authorization': basicAuthHeader,
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return console.error('Login response is not okay.');
        }
      })
    .then(data => data.data)

} 