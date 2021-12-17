import React from 'react'
import TopSlider from '../Component/Content/TopSlider'
import TopCharts from '../Component/Content/Sliders/TopCharts/TopCharts'
import TrendingTracks from '../Component/Content/Sliders/TrendingTracks/TrendingTracks'
import LatestVideos from '../Component/Content/Sliders/LatestVideos/LatestVideos'
import SpecialCategory from '../Component/Content/SpecialCategory/SpecialCategory'
import PlaylistCategory from '../Component/Content/PlaylistCategory/PlaylistCategory'
import Topic from '../Component/Content/Topic'
import './Homepage.css'

const Homepage = () => {
    return (
        <div className='homepage'>
            <TopSlider />
            <div className='charts-slider'>
                <div className='charts'>
                    <Topic name={'JOOX Top Charts'} />
                    <TopCharts />
                    <Topic name={'Top 10 Trending Tracks [Now]'} />
                    <TrendingTracks />
                    <Topic name={'Latest Videos'} />
                    <LatestVideos />
                    <Topic name={'Special Category'} />
                    <SpecialCategory />
                    <Topic name={'Playlist Category'} />
                    <PlaylistCategory />
                </div>
            </div>
        </div>
    )
}

export default Homepage
