
export const deleteNoteById = (jwtToken, noteId) => {
    return fetch(`http://localhost:8080/api/v1/notes/delete/${noteId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${jwtToken}`,
            'Content-Type': 'application/json',
        },
    })
}