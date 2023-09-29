
export const createNoteByEmail = (jwtToken, userEmail, notesSize) => {
    return fetch(`http://localhost:8080/api/v1/notes/create/${userEmail}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${jwtToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"title" : `Note ${notesSize + 1}`, "description" : "",}),
    })
}