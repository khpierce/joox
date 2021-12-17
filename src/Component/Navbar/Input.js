import React from 'react'
import * as FaIcons from 'react-icons/fa'
import './Navbar.css'

const Input = () => {
    return (
        <div className='searchInputContainer'>
            <input type='text' className='searchInput' placeholder='Search Songs, Artists, Albums, Playlists' autoComplete='off' />
            <div className='searchInputIconContainer'>
                <FaIcons.FaSearch className='searchInputIcon' size={20} />
            </div>
        </div>
    )
}

export default Input
