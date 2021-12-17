import React, { useState } from 'react'
import { Lang } from './SidebarData'
import './Sidebar.css'
import * as AiIcons from 'react-icons/ai'
import styled from 'styled-components'

const Dropdown = styled.ul`
    display: flex;
    flex-direction: column;
    background: #000;
    position: relative;
    padding: 15px 20px 5px 35px;
    width: 100%;
    margin-top: 10px;
    left: -25px;
    right: -25px;
    list-style: none;
`

const DropdownLi = styled.li`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    font-size: 0.8125rem;
    margin-bottom: 10px;
    color: ${({ color }) => color ? '#09de6e' : '#fff'};

    &:hover {
        cursor: pointer;
    }
`

const LangDropdown = (props) => {

    const [open, setOpen] = useState(false)
    const [select, setSelect] = useState([{id: 2, lang: 'English'}])
    console.log(select)

    const handleOnClick = (item) => {
        if (!select.some(curr => curr.id === item.id)) {
            setSelect([item])
        }
    }

    const isSelected = (item) => {
        if (select.find(curr => curr.id === item.id)) {
            return true
        }
        return false
    }

    return (
        <>
            <div className='li-about-text-100' onClick={() => setOpen(!open)}>
                {props.title}
                {open ? <AiIcons.AiOutlineUp /> : <AiIcons.AiOutlineDown />}         
            </div>
            {open && 
                <Dropdown>
                    {Lang.map((item, index) => {
                        return (
                            <DropdownLi key={index} onClick={() => handleOnClick(item)} color={isSelected(item)}>
                                <span>{item.lang}</span>
                                <span>{isSelected(item) && <AiIcons.AiFillCheckCircle />}</span>
                            </DropdownLi>
                        )
                    })}
                </Dropdown>
            }
        </>
    )
}

export default LangDropdown
