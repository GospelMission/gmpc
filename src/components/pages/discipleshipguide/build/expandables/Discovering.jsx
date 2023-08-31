import React from 'react'

function Discovering(props) {
  return (
    <>  
        <div className='expandable-title whitesmoke' onClick={props.handleClick}>
            <p>Discovering of 4Ps/4Ms</p>
            {props.img}
        </div>

        <div className={props.isOpen ? 'expandable-content' : 'hide'}>
            <div className='content-text discovering-text'>
                <a target='_blank'
                   href='https://drive.google.com/file/d/1Snx-xGkbRNEgID9fjyrHD5jQDyBZD6bv/view?usp=drive_link'>
                Week 1 - Discovering Church Membership</a>
                <a target='_blank'
                   href='https://drive.google.com/file/d/1mXZ9mXHXAX0VhhUhqsngzADZq7bJwrIn/view?usp=drive_link'>
                Week 2 - Discovering Spiritual Maturity</a>
                <a target='_blank'
                   href='https://drive.google.com/file/d/1VZlpZ1OFqcG_IcpfxqyrCtpXL76zopOa/view?usp=drive_link'>
                Week 3 - Discovering my Ministry</a>
                <a target='_blank'
                   href='https://drive.google.com/file/d/1GuNC3HlM0g_wTkGHY3QiYtPxH3h-G-Pa/view?usp=drive_link'>
                Week 4 - Discovering my Life Mission</a>

            </div>

        </div>
    </>     
  )
}

export default Discovering