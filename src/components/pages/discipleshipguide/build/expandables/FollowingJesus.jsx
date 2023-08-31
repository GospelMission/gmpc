import React from 'react'

function FollowingJesus(props) {
  return (
    <>  
        <div className='expandable-title whitesmoke' onClick={props.handleClick}>
            <p>Following Jesus</p>
            {props.img}
        </div>

        <div className={props.isOpen ? 'expandable-content' : 'hide'}>
            <div className='content-text'>
                <h4>Following Jesus</h4>
                <p>Week 1 - The Authority of Jesus</p>
                <p>Week 2 - The Death of Jesus</p>
                <p>Week 3 - The Resurrection of Jesus</p>
                <p>Week 4 - Grace, Not Works</p>
                <p>Week 5 - Repentance</p>
                <p>Week 6 - Faith</p>
            </div>
            <div className='center'>
                <p>Download:</p>
                <a 
                    target='_blank'
                    href='https://drive.google.com/file/d/1pkJWho1i4xPR_BMnYxHEKvaZ5zH6amIN/view?usp=drive_link'>
                    FollowJesus.pdf
                </a>
            </div>
        </div>
    </>     
  )
}

export default FollowingJesus