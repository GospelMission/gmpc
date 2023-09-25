import React, { useState }from 'react'

function NoteCard(props) {
  const [title, setTitle] = useState(props.title)
  const [description, setDescription] = useState(props.description)
  
  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }
  const handleSave = () => {
      fetch(`http://localhost:8080/api/v1/notes/update/${props.id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${props.jwtToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"title" : title, "description" : description}),
    })
    .then(() => props.fetchNotes())
    .catch(error => {
        console.error(error.message)
    })
  }

  return (
    <div className='notecard-wrapper whitesmoke' onClick={props.handleClick && (() => props.handleClick(props.id))}>

      {props.allNotes ? 
        (
          <>
            <div>{props.title}</div>
            <div>{props.description}</div>
          </>
        ) : 
        (
        <>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            onBlur={handleSave} 
          />
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
            onBlur={handleSave} 
          />
        </>
        )
      }

        <div>{props.date}</div>
    </div>
  )
}

export default NoteCard