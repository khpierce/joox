import React from 'react'
import './LatestVideos.css'

const IMAGE = [
    ['https://imgcache.joox.com/music/joox/photo/video_640/2/c/b48c89e04eddd202f96ddd8f41cdba2c.jpg', 'สัมภาษณ์สุด Exclusive จาก VERYVERY ที่ชวนคุณมาคุยถึงเบื้องหลังของเพลง #Trigger', '7 Sep 2021'],
    ['https://imgcache.joox.com/music/joox/photo/video_640/3/8/93fdb859c36364792ac7e849ef8cba38.jpg', 'THE CHAIR | EP.1 (JOOX 100x100 SEASON 3)', '19 Aug 2021'],
    ['https://imgcache.joox.com/music/joox/photo/video_640/e/5/dae0915c70ca93b6f94558fa5e116fe5.jpg', 'THE CHAIR | EP.2 (JOOX 100x100 SEASON 3)', '26 Aug 2021']
]

const LatestVideos = () => {
    return (
        <div className='latest-con1'>
            {IMAGE.map((url, index) => (
                <div className='latest-con2' key={index}>
                    <img alt='' src={url[0]} className='latest-img' />
                    <div className='text-con'>
                        {url[1]}
                    </div>
                    <div className='date-con'>
                        {url[2]}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default LatestVideos
