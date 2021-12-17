import React  from 'react'
import Slider from 'react-slick';
import './TopSlider.css'
import SliderItem from './SliderItem'
import * as IoIcons from 'react-icons/io5'

const IMAGE = [
    'https://imgcache.joox.com/music/joox/photo_th_th/focus_1000/8/0/d3cf8041e1226df91cc7b5e75c915e80.jpg',
    'https://imgcache.joox.com/music/joox/photo_th_th/focus_1000/a/4/40012273eb61060fb323fce6e793a5a4.jpg',
    'https://imgcache.joox.com/music/joox/photo_th_th/focus_1000/a/4/c06efb3e4829521175339e7bbc8252a4.jpg',
    'https://imgcache.joox.com/music/joox/photo_th_th/focus_1000/c/c/7f4afe38e15209dc15f3db287497dccc.jpg',
    'https://imgcache.joox.com/music/joox/photo_th_th/focus_1000/3/4/19c1da762666171b683535a2b9e9b234.jpg',
]

const TopSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        // focusOnSelect: true,
        variableWidth: true,
        autoplay: true,
        // autoplaySpeed: 5000,
        pauseOnHover: true,
        nextArrow: <IoIcons.IoChevronForwardSharp size={32} />,
        prevArrow: <IoIcons.IoChevronBackSharp size={32} />
    };

    return (
        <div className='slider-container'>
            <Slider {...settings}>
                {IMAGE.map((url, index) => (
                    <SliderItem url={url} key={index} />
                ))}
            </Slider>
        </div>
    )
}

export default TopSlider

