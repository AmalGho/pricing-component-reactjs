import React, { useState } from 'react';
import styled from 'styled-components'

const ToggleButton = ({setPrice, currentPrice}) => {

    const [checked, setChecked] = useState(false);
    const active = checked ? '24px' : '0';

    return (
        <ToggleButtonDiv
            onClick={() => {
                setChecked(!checked);
                setPrice(!currentPrice);
            }}
        >
            <ToggleCircleDiv rightMovement={active} />
        </ToggleButtonDiv>
    );
};


const ToggleButtonDiv = styled.div`
    width: 50px;
    height: 25px;
    background: #ffffff30;
    margin: 0;
    border-radius: 50px;
    padding: 3px;
    cursor: pointer;
    box-shadow: 0 0 6px #ffffff70;
`;

const ToggleCircleDiv = styled.div`
    width: 25px;
    height: 25px;
    background-color: #fff;
    border-radius: 50%;
    margin-left: ${({rightMovement}) => rightMovement};
    transition: all 0.3s;
`;


export default ToggleButton;