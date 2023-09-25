import React from 'react'
import NoteCard from './NoteCard';
import PlusIcon from "../../../images/PlusIcon.png";

function AllNotes(props) {
    const noteCards = props.notes.map(note => {
        const formattedDate = props.formatDate(note.date);
        return (
                <NoteCard 
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    date={formattedDate} 
                    allNotes={true}
                    handleClick={props.handleClick}
                />
        )
    })
  return (
    <>
        <img src={PlusIcon} onClick={() => props.createNote()}/>
        <div className='notes-wrapper'>
            {noteCards}
        </div>
    </>     
  )
}

export default AllNotes