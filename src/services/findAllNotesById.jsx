// NoteService.js

export const findAllNotesById = (jwtToken, userId) => {
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
  };
  