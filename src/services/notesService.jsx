
const createNoteByEmail = (jwtToken, userEmail, notesSize) => {
    return fetch(`http://localhost:8080/api/v1/notes/create/${userEmail}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${jwtToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"title" : `Note ${notesSize + 1}`, "description" : "",}),
    })
}

const deleteNoteById = (jwtToken, noteId) => {
    return fetch(`http://localhost:8080/api/v1/notes/delete/${noteId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${jwtToken}`,
            'Content-Type': 'application/json',
        },
    })
}

const findAllNotesById = (jwtToken, userId) => {
    if (!jwtToken ) {
      return console.error("Invalid token");
    } 
    else if(!userId){
      return console.error("Invalid userId");
    }
  
    return fetch(`http://localhost:8080/api/v1/notes/findAllById/${userId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${jwtToken}`,
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return console.error('FindAllNotes response is not okay.');
        }
      })
      .then(data => data.data)
  }

const login = async (email, password) => {
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

const signup = (formDataJSON) => {
    return fetch('http://localhost:8080/api/v1/users/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formDataJSON
    })
}

export default { createNoteByEmail, deleteNoteById, findAllNotesById, login, signup }
  