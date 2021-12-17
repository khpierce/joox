import React from 'react'
import * as AiIcons from 'react-icons/ai'

const SliderItem = (props) => {
    return (
      <div className='slider-container-img-container'>
        <img src={props.url} alt='' />
        <div className="player-background-icon-container">
          <div className="player-icon-container">
            <AiIcons.AiFillPlayCircle className='player-icon' />
          </div>
        </div>
      </div>
    )
}

export default SliderItem
