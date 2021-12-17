import React from 'react'
import './SpecialCategory.css'
import * as IoIcons from 'react-icons/io5'

const IMAGE = [
    ['https://s.isanook.com/jooxweb-api/media/uploads/genre/92/1599737062-0219.jpg', 'Y-Series'],
    ['https://s.isanook.com/jooxweb-api/media/uploads/genre/76/1599737082-1000.jpg', 'Podcast'],
    ['https://s.isanook.com/jooxweb-api/media/uploads/genre/33/1599738803-0182.jpg', 'ลูกทุ่งไทบ้าน']
]

const SpecialCategory = () => {
    return (
        <div className='spe-con1'>
            {IMAGE.map((url, index) => (
                <div className='spe-con2' key={index}>
                    <img alt='' src={url[0]} />
                    <div className='spe-text-container'>
                        <div className='text'>
                            {url[1]}
                            <div className='arrow-icon'>
                                <IoIcons.IoChevronForwardSharp />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SpecialCategory
