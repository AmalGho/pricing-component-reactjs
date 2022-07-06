import React from 'react';
import styled from 'styled-components'
import ToggleButton from './ToggleButton';

const Toggle = ({setPrice, currentPrice}) => {
    return (
        <ToggleDiv >
            <span>Monthly</span>
            <ToggleButton setPrice={setPrice} currentPrice={currentPrice}/>
            <span>Annually</span>
        </ToggleDiv>
    );
};


const ToggleDiv = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin-top: 2rem;
    z-index: 999;
    span {
        color: #fff;
        font-size: 1.2rem;
    }
`;


export default Toggle;