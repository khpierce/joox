import React from 'react'
import styled from 'styled-components'
import './MusicPlayer.css'
import * as MdIcons from 'react-icons/md'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

const Player = styled.div`
    display: flex;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    background: rgb(16, 16, 16);
    right: 0;
    left: 0;
    /* width: 100%; */
    bottom: 0;
    height: 55px;
    padding: 0px 15px;
    z-index: 9999;
`

const PlayContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 300px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    position: relative;
`

const First = styled.div`
    width: 71px;
    height: 71px;
    background: url('https://cdn.i-joox.com/static/di/jooxPlayer/vinyl.png');
    background-position-x: center;
    background-position-y: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: initial;
    position: relative;
    margin-top: -20px;
    z-index: 999;
`

const Second = styled.div`
    width: 48px;
    height: 48px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
`

const Third = styled.div`
    display: block;
    position: absolute;
    padding: 3px;
    inset: 0px;
`

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(135, 135, 135);
    border: none;
    cursor: pointer;
    transition: color 0.3s ease 0s;
    width: 40px;
    height: 40px;
    position: relative;
    /* background-color: ivory; */
`

const Music = styled.div`
    display: flex;
    flex: 0 0 calc(100% - 560px);
    max-width: 370px;
    position: relative;
    padding-left: 45px;
    padding-right: 45px;
    height: 100%;
    /* background: cornflowerblue; */
`

const Action = styled.div`
    display: flex;
    height: 40px;
    flex: 0 0 250px;
    max-width: 250px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    /* background: cyan; */
`

const MusicPlayer = () => {
    return (
        <Player>
            <PlayContainer>
                <First>
                    <Second>
                        <Third>
                            <img alt='' src='https://cdn.i-joox.com/static/di/default/default-album@300.png' width='42' height='42' style={{borderRadius: '50%'}} />
                        </Third>
                    </Second>
                </First>
                <div style={{display: 'flex', flexDirecton: 'column'}}>
                    <Button>
                        <MdIcons.MdShuffle size={19} />
                    </Button>
                    <Button>
                        <AiIcons.AiFillStepBackward size={19} />
                    </Button>
                    <Button>
                        <AiIcons.AiFillPlayCircle size={32} />
                    </Button>
                    <Button>
                        <AiIcons.AiFillStepForward size={19} />
                    </Button>
                    <Button>
                        <MdIcons.MdRepeat size={19} />
                    </Button>
                </div>
            </PlayContainer>
            <Music>
                <small className='currentTime'>
                    00:00
                </small>
                <div className='bar'>
                    <div className='line' />
                </div>
                <small className='remainTime'>
                    00:00
                </small>
            </Music>
            <Action>
                <div className='volume'>
                    <div className='volume-icon'>
                        <div className='volume-container'>
                            <IoIcons.IoMdVolumeHigh size={22} />
                        </div>
                    </div>
                    <div className='volume-bar'>
                        <div className='volume-bar-line' />
                    </div>
                </div>
                <div className='lyrics'>
                    <div className='lyrics-container'>
                        <RiIcons.RiBook2Line size={20} />
                    </div>
                </div>
                <div className='lyrics'>
                    <div className='music-queue'>
                        <MdIcons.MdFormatListBulleted size={20} />
                    </div>
                </div>
            </Action>
        </Player>
    )
}

export default MusicPlayer
