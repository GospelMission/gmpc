import React from 'react'

function OneToOne(props) {
  return (
    <>  
        <div className='expandable-title whitesmoke' onClick={props.handleClick}>
            <span>One to One </span>
            {props.img}
        </div>

        <div className={props.isOpen ? 'expandable-content' : 'hide'}>
            <div className='content-text'>
              <span>Download: 
                <a 
                  target='_blank'
                  href='https://drive.google.com/file/d/1LD-aUwqx9zALfmC91NEpN6s53e90Pgp6/view?usp=drive_link'>
                  One to One
                </a>
              </span>
            </div>
        </div>

    </>
  )
}

export default OneToOne