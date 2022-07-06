import React, { useState } from 'react'
import styled from 'styled-components';

const Toggle = ({setPrice, currentPrice}) => {

    const [checked, setChecked] = useState(false);
    const active = checked ? '0' : '24px';

    return (
        <div>
            <ToggleButtonDiv
            onClick={() => {
                setChecked(!checked);
                setPrice(!currentPrice);
            }}
            >
                <ToggleCircleDiv rightMovement={active} />
            </ToggleButtonDiv>
        </div>
    )
}

const ToggleButtonDiv = styled.div`
    display: block;
    position: relative;
    -webkit-appearance: none;
    width: 100px;
    height: 50px;
    border-radius: 100px;
    border: 3px solid #555;
    cursor: pointer;
    transition: all 0.3s;
`;

const ToggleCircleDiv = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: #555;
    border-radius: 50%;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    transition: all 0.3s;
`;

export default Toggle