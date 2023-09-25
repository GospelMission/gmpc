import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import NoteCard from './NoteCard';

function NoteById(props) {
    const note = props.notes.find(note => note.id === props.noteId)
    const formattedDate = props.formatDate(note.date);

  return (
    <div className='notes-wrapper'>
        <FontAwesomeIcon icon={faArrowLeft} onClick={props.handleClick}/>
        <FontAwesomeIcon icon={faTrashCan} onClick={() => props.deleteNote(note.id)}/>
        <NoteCard 
            key={note.id}
            {...note}
            jwtToken={props.jwtToken}
            date={formattedDate} 
            fetchNotes={props.fetchNotes}
        />
    </div>  
  )
}

export default NoteById