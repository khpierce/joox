import React from 'react'
import './PlaylistCategory.css'

const IMAGE = [
    ['https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/a/6/b1a6abe1e6fb6f89cccdf2fdd88399a6.jpg', 'What\'s Hot Today'],
    ['https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/b/6/6eaf9e47ed44ff7833019b205b9f3fb6.jpg', 'New Releases'],
    ['https://cdn.i-joox.com/static/di/topPlaylist/English.jpg', 'English'],
    ['https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/d/2/a209eeba4f21092c513cd2d82ec42cd2.jpg', 'Korean'],
    ['https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/3/d/abad4a741efeff39bec51c0b11c9493d.jpg', 'PODCAST'],
    ['https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/3/2/01329554250c8c10c17fb0cf2ea59032.jpg', 'Luk Thung']
]

const PlaylistCategory = () => {
    return (
        <div className='playlist-con1'>
            {IMAGE.map((url, index) => (
                <div className='playlist-all' key={index}>
                    <div className='playlist-con2'>
                        <img alt='' src={url[0]} />
                    </div>
                    <div className='playlist-text'>
                        {url[1]}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PlaylistCategory
