import React from 'react'
import styled from 'styled-components'
import './Navbar.css'
import CTRL from 'react-nc'
import Button from '../Button'
import * as MdIcons from 'react-icons/md'
import Input from './Input'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 38px;
    right: 0;
    left: 0;
    padding: 10px 24px 10px 24px;
    background: #111111;
    position: fixed;
`

const HamburgerBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 38px;
    width: 41px;
`

const Navbar = () => {
    return (
        <Container>
            <div className='hamLogoContainer'>
                <HamburgerBar>
                    <div className='hamburgerBarContent' onClick={() => CTRL.setState({open: !CTRL.state.open})}>
                        <span className="sidebar-button-line" />
                        <span className="sidebar-button-line line-two" />
                        <span className="sidebar-button-line" />
                    </div>
                </HamburgerBar>
                <img alt='JOOX' src='https://cdn.i-joox.com/static/di/joox-logo-white.png' style={{width: '98px', height: '30px'}} />
            </div>
            <Input />
            <div className='buttonContainer'>
                <Button background={'#09de6e'} border={'#09de6e'} color={'#000'} hoverB={'hsl(148.5, 92.2%, 58.9%)'} height={'22px'}>
                    <MdIcons.MdFileDownload size={20} style={{marginRight: '5px'}} />
                    Get JOOX Desktop App
                </Button>
                <div className='loginContainer'>
                    <Button border={'#bcbcbc'} color={'#e5e5e5'} hoverB={'#fff'} hoverC={'#000'} height={'22px'}>
                        Log In
                    </Button>
                </div>
                <div className='loginContainer'>
                    <Button border={'#bcbcbc'} color={'#e5e5e5'} hoverB={'#fff'} hoverC={'#000'} height={'22px'}>
                        Sign Up
                    </Button>
                </div>
            </div>
        </Container>
    )
}

export default Navbar
