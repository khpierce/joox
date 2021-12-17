import React from 'react'
import Slider from 'react-slick'
import * as IoIcons from 'react-icons/io5'
import * as AiIcons from 'react-icons/ai'


const IMAGE = [
    ['https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/0/a/5f369c609d6adba56e9220ebf1df6d0a.jpg', 'เอาปากกามาวง - BELL WARISARA'],
    ['https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/1/8/3c760986cc303af8e46da19671439c18.jpg', 'ท้องฟ้า - Paper'],
    ['https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/6/e/3773f3bb8a93445bee76b9d1b3865d6e.jpg', 'วันดีดี (All the Happiness) [JOOX Exclusive] - เอิ๊ต ภัทรวี, NONT TANONT'],
    ['https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/2/f/beacfd7b220cf6831645f8df423eaa2f.jpg', 'ยิ้มแห้ง - บอย Peacemaker'],
    ['https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/c/c/54293be9ced1b23a3bbe466d2cea3dcc.jpg', 'ຕື່ນຈາກຝັນ ( ตื่นจากฝัน ) - BAY6IX'],
    ['https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/e/9/f9ccb15cc22e380907c219c01137afe9.jpg', 'ครึ่งที่เห็น (BROKEN) - UrboyTJ, Waii'],
    ['https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/6/8/3df001f117de0e7fc5c165fe09646d68.jpg', 'abcdefu - Gayle'],
    ['https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/6/1/ad17287a38c0510defc2a17ed44b5b61.jpg', 'LIFE AIN\'T OVER - TRINITY'],
    ['https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/0/9/0893b90f343c03df70a84ca4e350e709.jpg', 'MAYDAY MAYDAY - ATLAS'],
    ['https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/2/e/ff527550cb4cb80ac2eb2e168777262e.jpg', 'Lavender - Patrickananda']
]

const TrendingTracks = () => {

    const setting = {
        dots: false,
        speed: 500,
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 3,
        variableWidth: true,
        nextArrow: <IoIcons.IoChevronForwardSharp />,
        prevArrow: <IoIcons.IoChevronBackSharp />
    }

    return (
        <div className='slider-container2'>
            <Slider {...setting}>
                {IMAGE.map((url, index) => (
                    <div key={index}>
                        <div className='slider-container-img-container3'>
                            <img alt='' src={url[0]} />
                            <div className='player-icon-container3' />
                            <AiIcons.AiFillPlayCircle className='icon' />
                        </div>
                        <div className='song-name'>
                            {url[1]}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default TrendingTracks
