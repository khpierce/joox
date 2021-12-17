import React from 'react'
import styled from 'styled-components'
import CTRL, { StateControl } from 'react-nc'
import './Sidebar.css'
import { LowerSidebarData, UpperSidebarData, About } from './SidebarData'
import Button from '../Button'
import LangDropdown from './LangDropdown'
import { NavLink } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: ${({open}) => open ? '214.906px' : '65px'};
    max-width: ${({open}) => open ? '214.906px' : '65px'};
    height: calc(100vh - 113px);
    top: 58px;
    bottom: 0;
    background: rgb(16, 16, 16);
    overflow-y: auto;
    z-index: 99;

    &::-webkit-scrollbar{
        display: none;
    }
`

const Sidebar = () => {
    return (
        <Container open={CTRL.state.open}>
            <div className={CTRL.state.open ? 'container3' : 'container1-closed'}>
                <ul className='ul-browse'>
                    {UpperSidebarData.map((item, index) => {
                        return (
                            <NavLink activeClassName='active' to={item.path} className='li-browse' key={index} exact>
                                <div className='li-icon-container'>
                                    {item.icon}
                                </div>
                                <div className={CTRL.state.open ? 'li-name-bold' : 'none'}>{item.title}</div>
                            </NavLink>
                        )
                    })}
                </ul>
            </div>
            <div className={CTRL.state.open ? 'container2' : 'none'}>
                <img alt='' src='https://cdn.i-joox.com/static/di/download/joox-desktop02.png' width='185' height='104' style={{marginTop: '10px'}} />
                <div className='btn-wrap'>
                    <Button background={'#09de6e'} border={'#09de6e'} color={'#000'} hoverB={'hsl(148.5, 92.2%, 58.9%)'} height={'12px'}>
                        <div className='download-text'>
                            Download App
                        </div>
                    </Button>
                </div>
            </div>
            <div className={CTRL.state.open ? 'container3' : 'container3-closed'}>
                <strong className={CTRL.state.open ? 'browse' : 'none'}>
                    Browse
                </strong>
                <ul className='ul-browse'>
                    {LowerSidebarData.map((item, index) => {
                        return (
                            <NavLink activeClassName='active' to={item.path} className='li-browse' key={index}>
                                <div className='li-icon-container' style={{background: item.background}}>
                                    {item.icon}
                                </div>
                                <div className={CTRL.state.open ? 'li-name' : 'none'}>{item.title}</div>
                            </NavLink>
                        )
                    })}
                </ul>
            </div>
            <div className={CTRL.state.open ? 'container4' : 'none'}>
                <strong className={CTRL.state.open ? 'browse-no-margin' : 'none'}>
                    Login benefits
                </strong>
                <ul className='ul-benefits'>
                    <li className='li-benefits'>
                        Create your own playlsit
                    </li>
                    <li className='li-benefits'>
                        Sync playlist with any devices
                    </li>
                    <li className='li-benefits'>
                        No Ads interuption
                    </li>
                </ul>
                <div>
                    <Button border={'#bcbcbc'} color={'#e5e5e5'} hoverB={'#fff'} hoverC={'#000'} height={'22px'}>
                        Log in now!
                    </Button>
                </div>
            </div>
            <div className={CTRL.state.open ? 'container3' : 'none'}>
                <ul className='ul-benefits'>
                    <li className='li-about'>
                        <div className='li-about-text'>Download</div>
                    </li>
                    <li className='li-about'>
                        <LangDropdown title={'ภาษา/Lang.'} />
                    </li>
                    <li className='li-about'>
                        <div className='li-about-text'>FAQ</div>
                    </li>
                    <li className='li-about'>
                        <div className='li-about-text'>Contact Us</div>
                    </li>
                    <li className='li-about'>
                        <div className='li-about-text'>Feedback</div>
                    </li>
                </ul>
                <div className='about-icon-container'>
                    {About.map((item, index) => {
                        return (
                            <div className='about-icon' key={index}>
                                {item.icon}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={CTRL.state.open ? 'container5' : 'none'}>
                <div className='foot'>
                    Term of Service
                </div>
                <div className='foot'>
                    JOOX User Agreement
                </div>
                <div className='foot'>
                    Privacy Policy
                </div>
                <div className='foot'>
                    Cookie Policy
                </div>
                <div className='foot' style={{marginBottom: '15px'}}>
                    Take-Down Policy
                </div>
                <div className='footer'>
                    <span>© 2011 - 2021 Tencent.</span>
                    <span>All Rights Reserved</span>
                </div>
            </div>
        </Container>
    )
}

export default StateControl(Sidebar)
