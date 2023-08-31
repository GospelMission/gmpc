import React from 'react'

function Discovering(props) {
  return (
    <>  
        <div className='expandable-title white' onClick={props.handleClick}>
            <p>Discovering of 4Ps/4Ms</p>
            {props.img}
        </div>

        <div className={props.isOpen ? 'expandable-content' : 'hide'}>
            <div className='content-text'>
                <p>Week 1 - Discovering Church Membership</p>
                <p>Week 2 - Discovering Spiritual Maturity</p>
                <p>Week 3 - Discovering my Ministry</p>
                <p>Week 4 - Discovering my Life Mission</p>
            </div>
            <div className='center'>
                <p>Download:</p>
                <a 
                    target='_blank'
                    href=''>
                    DiscoveringOf4Ps/4Ms.pdf (Not Yet Downloadable)
                </a>
            </div>
        </div>
    </>     
  )
}

export default Discovering