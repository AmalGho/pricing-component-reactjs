import React from 'react'
import styled from 'styled-components'
import Check from '@iconscout/react-unicons/icons/uil-check-circle'
import PropTypes from 'prop-types'

const Pricing = ({
        color,
        shadow,
        headerText, 
        currency, 
        price, 
        duration,
        buttonContent,
        data
    }) => {

    return (
        <MainContainer shadow= {shadow} color={color}>
            <Header>{headerText}</Header>
            <PricingContainer>
                <PriceContainer>
                    <CurrencyContainer>
                        <span>{currency}</span>
                    </CurrencyContainer>
                <Price>
                    <span>{price}</span>
                </Price>
                <Duration>
                    <span>{duration === 'm' ? '/ month' : '/ year'}</span>
                </Duration>
                </PriceContainer>
            </PricingContainer>
            {data && (
                <DataContainer>
                    <ul>
                        {data.map((dt, index) => {
                            return (
                                <li key={index}>
                                    <Check size='1rem' className= 'icon' />
                                    {dt.text}
                                </li>
                            )
                        })}
                    </ul>
                </DataContainer>
            )}
            <ButtonContainer>
                <Button>{buttonContent}</Button>
            </ButtonContainer>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Tajawal:wght@200;300;400;500;700;800;900&family=Varela+Round&display=swap');
    font-family: 'Roboto', sans-serif;
    width: 18rem;
    min-height: 25rem;
    height: max-content;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    box-shadow: 0px 0px 10px ${(props) => props.shadow};
    background-color: ${(props) => props.color};
    margin-top: 6rem;

    &:hover,
    &:nth-child(2) {
        margin-top: 4rem;
    }

    transition: all 0.5s ease-in-out;
    padding: 2rem;
    position: relative;
`;

const Header = styled.div`
    text-transform: uppercase;
    text-align: start;
`;

const PricingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 2rem;
    margin-bottom: 1rem;
`;

const PriceContainer = styled.div`
    display: flex;
`;

const CurrencyContainer = styled.div`
    margin-top: 0.5rem;
    margin-right: 0.2rem;
`;

const Price = styled.div`
    span {
        font-size: 3rem;
    }
`;

const Duration = styled.div`
    margin-top: 2rem;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.5rem 1rem;
    position: absolute;
    bottom: 1%;
    left: 1%;
    right: 1%;
    &:hover {
        opacity: 0.8;
    }
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    border: none;
    border-radius: 0.5rem;
    color: #fff;
    padding: 0.7rem 1rem;
    cursor: pointer;
    width: 20rem;
`;

const DataContainer = styled.div`
    ul {
        list-style-type: none;
        li {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;

            .icon {
                padding-right: 0.3rem;
            }
        }
        margin-left: -2.2rem;
    }
`;

Pricing.propTypes = {
    data: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    duration: PropTypes.oneOf(['y', 'm']).isRequired,
    buttonContent: PropTypes.string.isRequired,
    headerText: PropTypes.string.isRequired
};

export default Pricing