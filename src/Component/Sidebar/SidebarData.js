import React from 'react'
import * as FiIcons from 'react-icons/fi'
import * as FaIcons from 'react-icons/fa'
import * as RiIcons from 'react-icons/ri'
import * as Io5Icons from 'react-icons/io5'
import * as IoIcons from 'react-icons/io'
import * as MdIcons from 'react-icons/md'
import * as BsIcons from 'react-icons/bs'
import * as GoIcons from 'react-icons/go'

export const LowerSidebarData = [
    {
        title: 'Artists',
        path: '/Artists',
        icon: <FaIcons.FaUserAlt size={15} color={'#000'} />,
        background: '#56cef8'
    },
    {
        title: 'Albums',
        path: '/Albums',
        icon: <Io5Icons.IoAlbums size={18} color={'#000'} />,
        background: '#fd8791'
    },
    {
        title: 'Playlists',
        path: '/Playlists',
        icon: <MdIcons.MdMusicNote size={18} color={'#000'} />,
        background: '#6cd7a1'
    }, {
        title: 'Charts',
        path: '/Charts',
        icon: <BsIcons.BsFillBarChartFill size={15} color={'#000'} />,
        background: '#ba9cfc'
    },
    {
        title: 'Radio',
        path: '/Radio',
        icon: <GoIcons.GoRadioTower size={17} color={'#000'} />,
        background: '#fec18c'
    },
    {
        title: 'Videos',
        path: '/Videos',
        icon: <IoIcons.IoMdVideocam size={18} color={'#000'} />,
        background: '#ef3c5a'
    }
]

export const UpperSidebarData = [
    {
        title: 'DISCOVER',
        path: '/',
        icon: <FiIcons.FiDisc size={21} />
    },
    {
        title: 'MY LIBRARY',
        path: '/Library',
        icon: <div className='lib-icon'><FiIcons.FiMusic /></div>
    },
    {
        title: 'VIP',
        path: '/VIP',
        icon: <RiIcons.RiVipDiamondFill size={18} />
    }
]

export const About = [
    {
        icon: <FaIcons.FaFacebookF size={22} />
    },
    {
        icon: <FaIcons.FaInstagram size={22} />
    },
    {
        icon: <FaIcons.FaTwitter size={22} />
    },
    {
        icon: <FaIcons.FaYoutube size={22} />
    }
]

export const Lang = [
    {
        id: 1,
        lang: 'ไทย'
    },
    {
        id: 2,
        lang: 'English'
    }
]
