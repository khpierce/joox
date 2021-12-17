import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 20px;
    color: ${({color}) => color};
    outline: none;
    background: ${({background}) => background};
    font-size: 0.875rem;
    font-weight: 500;
    border: 0px;
    letter-spacing: 0.41px;
    padding: 7px 20px 5px 20px;
    border: 1px solid ${({border}) => border};
    transition: 0.3s;
    height: ${({height}) => height};
    min-width: 58px;

    &:hover {
        background: ${({hoverB}) => hoverB};
        color: ${({hoverC}) => hoverC};
        cursor: pointer;
    }
`

const Button = ({ children, background, border, color, hoverB, hoverC, height }) => {
    return (
        <Container background={background} border={border} color={color} hoverB={hoverB} hoverC={hoverC} height={height}>
            {children}
        </Container>
    )
}

export default Button
