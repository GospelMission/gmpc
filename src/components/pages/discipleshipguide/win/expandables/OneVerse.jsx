import React from 'react'

function OneVerse(props) {
  return (
    <>  
        <div className='expandable-title whitesmoke' onClick={props.handleClick}>
            <p>One Verse Evangelism </p>
            {props.img}
        </div>

        <div className={props.isOpen ? 'expandable-content' : 'hide'}>
            <div className='content-text'>
              <span>Romans 6:23 NIV</span>
              <span>For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.</span>
            </div>
        </div>

    </>
  )
}

export default OneVerse