import React from 'react'

function Ebanghelyo(props) {
  return (
    <>  
        <div className='expandable-title white' onClick={props.handleClick}>
            <span>Ang Tanging Katotohanan</span>
            {props.img}
        </div>

        <div className={props.isOpen ? 'expandable-content' : 'hide'}>
            <div className='content-text'>
              <span>Content Here</span>
            </div>
        </div>

    </>
  )
}

export default Ebanghelyo