import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import AllNotes from './notes/AllNotes';
import NoteById from './notes/NoteById';
import notesService from '../../services/notesService';

function NotesApplication() {
    const navigate = useNavigate()
    const jwtToken = sessionStorage.getItem('jwtToken');
    const [userId, setUserId] = useState()
    const [userEmail, setUserEmail] = useState()
    const [noteId, setNoteId] = useState()
    const [notes, setNotes] = useState([])
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (jwtToken) {
            try {
                const decodedToken = JSON.parse(atob(jwtToken.split('.')[1]));
                setUserId(decodedToken.userId)
                setUserEmail(decodedToken.sub)
            } catch (error) {
                console.error('Error decoding JWT token:', error);
                sessionStorage.clear();
                navigate('/login');
            }
        } else navigate('/login');
    }, [])

    const fetchNotes = () => {
        if(jwtToken && userId) {
            notesService.findAllNotesById(jwtToken, userId)
            .then(data => {
                setNotes(data);
            })
            .catch(error => {
                console.error(error.message);
            });
        }
    };

    function createNote() {
        notesService.createNoteByEmail(jwtToken, userEmail, notes.length)
        .then(() => fetchNotes())
        .catch(error => {
            console.error(error.message)
        })
    }

    function deleteNote(noteId) {
        notesService.deleteNoteById(jwtToken, noteId)
        .then(() => {
            fetchNotes()
            setIsOpen(prevState => !prevState)
        })
        .catch(error => {
            console.error(error.message)
        })
    }

    function handleClick(id) {
        setIsOpen(prevState => !prevState)
        if(id) {
            setNoteId(id)
        }
    }

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    useEffect(() => {
        fetchNotes();
    }, [jwtToken, userId]);
    
  return (
    <>
    Notes Application
        {isOpen ? 
            <NoteById fetchNotes={fetchNotes} deleteNote={deleteNote} notes={notes} noteId={noteId} formatDate={formatDate} handleClick={handleClick} jwtToken={jwtToken}/> : 
            <AllNotes createNote={createNote} formatDate={formatDate} notes={notes} handleClick={handleClick}/>}
    </>

  )
}

export default NotesApplication

    // const fetchNotes = () => {
    //     if (jwtToken && userId) {
    //         fetch(`http://localhost:8080/api/v1/notes/findAllById/${userId}`, {
    //             method: 'GET',
    //             headers: {
    //                 'Authorization': `Bearer ${jwtToken}`,
    //                 'Content-Type': 'application/json',
    //             },
    //         })
    //             .then(response => {
    //                 if (response.ok) {
    //                     return response.json();
    //                 } else {
    //                     console.error('Response is not okay.');
    //                 }
    //             })
    //             .then(data => {
    //                 setNotes(data.data);
    //             })
    //             .catch(error => {
    //                 console.error(error.message);
    //                 sessionStorage.clear();
    //                 navigate('/login');
    //             });
    //     }
    // };

    // function createNote() {
    //     fetch(`http://localhost:8080/api/v1/notes/create/${userEmail}`, {
    //         method: 'POST',
    //         headers: {
    //             'Authorization': `Bearer ${jwtToken}`,
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({"title" : "New Note", "description" : "",}),
    //     })
    //     .then(() => fetchNotes())
    //     .catch(error => {
    //         console.error(error.message)
    //     })
    // }