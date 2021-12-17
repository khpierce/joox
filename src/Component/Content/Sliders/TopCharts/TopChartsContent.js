import React from 'react'
import * as AiIcons from 'react-icons/ai'

const TopChartsContent = (props) => {
    return (
        <div className='slider-container-img-container2'>
            <div className='songs-img'>
                <img alt='' src={props.url} />
                <div className='player-icon-container2'>
                    <AiIcons.AiFillPlayCircle className='icon' />
                </div>
            </div>
            <div className='songs-con'>
                <span className='text-topic'>
                    {props.topic}
                </span>
                <ul>
                    {props.data.map((item, index) => (
                        <li key={index}>
                            <div className='li-number'>
                                <span>
                                    <div className='small-number'>{index+1}</div>
                                    <AiIcons.AiFillPlayCircle size={18} className='li-icon' />
                                </span>
                            </div>
                            <div className='li-songs'>
                                <span>{item}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TopChartsContent
