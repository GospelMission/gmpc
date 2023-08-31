import React from 'react'

function Tract(props) {
  return (
    <>  
        <div className='expandable-title white' onClick={props.handleClick}>
            <p>Huwag Sayangin ang Buhay </p>
            {props.img}
        </div>

        <div className={props.isOpen ? 'expandable-content' : 'hide'}>
            <div className='content-text'>
            <span>Download:</span>
              <a 
                  target='_blank'
                  href='https://drive.google.com/file/d/1j0lDMh7q3ApoCRZwo26dwcUeWKwICrKy/view?usp=drive_link'>
                  HuwagSayanginangBuhay.pdf
                </a>
            </div>
        </div>

    </>
  )
}

export default Tract