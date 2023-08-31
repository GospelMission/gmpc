import React from 'react'

function StoryOfGod(props) {
  return (
    <>  
        <div className='expandable-title white' onClick={props.handleClick}>
            <p>The Story of God (Week 1-12)</p>
            {props.img}
        </div>

        <div className={props.isOpen ? 'expandable-content' : 'hide'}>
            <div className='content-text'>
            <span>Download:</span>
              <a 
                  target='_blank'
                  href='https://drive.google.com/file/d/13OnS71bHQrjdHZDdNufucsTDkX-w_sO9/view'>
                  TheStoryofGod.pdf
              </a>
            </div>
        </div>

    </>
  )
}

export default StoryOfGod