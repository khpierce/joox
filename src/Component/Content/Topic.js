import React from 'react'
import './Topic.css'
import * as IoIcons from 'react-icons/io5'

const Topic = (props) => {
    return (
        <div className='topic-con'>
            <div className='topic-text-con'>
                {props.name}
            </div>
            <div className='topic-arrow-con'>
                <IoIcons.IoChevronForwardSharp />
            </div>
        </div>
    )
}

export default Topic
