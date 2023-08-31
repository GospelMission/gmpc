import React from 'react'

function FirstSteps(props) {
  return (
    <>  
        <div className='expandable-title white' onClick={props.handleClick}>
            <p>First Steps</p>
            {props.img}
        </div>

        <div className={props.isOpen ? 'expandable-content' : 'hide'}>
            <div className='content-text'>
                <h4>First Steps</h4>
                <p>Week 1 - Salvation as Work of God</p>
                <p>Week 2 - A Life Pleasing to God</p>
                <p>Week 3 - Listening to God</p>
                <p>Week 4 - Connecting to God's Family</p>
                <p>Week 5 - Witnessing to the World</p>
                <p>Week 6 - Suffering and Hope</p>
            </div>
            <div className='center'>
                <p>Download:</p>
                <a 
                    target='_blank'
                    href=''>
                    FirstSteps.pdf
                </a>
            </div>
        </div>
    </>     
  )
}

export default FirstSteps