import React, {useState} from 'react';
import './App.css';
import styled from 'styled-components'
import Pricing from './components/Pricing';
import Toggle from './components/Toggle/Toggle';
import Arrow from './images/arrow.png'


function App() {

  const [currentPrice, setPrice] = useState(false);
  const monthly = [0, 15, 25];
  const annually = [0, 150, 250];
  const priceChanged = currentPrice ? annually : monthly;


  return (
    <div className="App">
      <MainContainer>

        <Header>
          Pricing
        </Header>

        <ArrowSection>
          <ArrowImage>
            <img src={Arrow} alt=''/>
          </ArrowImage>
          <ArrowSpan>
            save 20%
          </ArrowSpan>
        </ArrowSection>

        <Toggle currentPrice={currentPrice} setPrice={setPrice} />

        <CardContainer>

          <Pricing 
            color= '#ffccd5c3'
            shadow = '#ffffff80'
            headerText='Basic'
            currency='$'
            duration= {monthly.includes(priceChanged[1]) ? 'm' : 'y'}
            price={priceChanged[0]}
            buttonContent='Get Started'
            data= {[
              {text: "Store up to 20 song"},
              {text: "2 collaborators"},
              {text: "Unlimited shares"},
              {text: "Unlimited shares"},
              {text: "128 bit AES encryption"},
              {text: "Mac, PC, Android, iOS, and Browser"}
            ]}
          />
          <Pricing 
            color= '#ecf39ec3'
            shadow = '#ffffff80'
            headerText='Professional'
            currency='$'
            duration= {monthly.includes(priceChanged[1]) ? 'm' : 'y'}
            price={priceChanged[1]}
            buttonContent='Get Started'
            data= {[
              {text: "Everything in Basic"},
              {text: "250GB of song storage"},
              {text: "250GB of asset storage"},
              {text: "2 collaborators"},
              {text: "128 bit AES encryption"},
              {text: "Share link password protection"}
            ]}
          />
          <Pricing 
            color= '#ff9a42c3'
            shadow = '#ffffff80'
            headerText='Team'
            currency='$'
            duration= {monthly.includes(priceChanged[2]) ? 'm' : 'y'}
            price={priceChanged[2]}
            buttonContent='Get Started'
            data= {[
              {text: "Everything in Professional"},
              {text: "workspace with up to 10 users"},
              {text: "Custom storage plans"},
              {text: "Custom branding by team"}
            ]}
          />
        </CardContainer>

      </MainContainer>

    </div>
  );
}

const MainContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Tajawal:wght@200;300;400;500;700;800;900&family=Varela+Round&display=swap');
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  background-color: #000;
  position: relative;
`;

const ArrowSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #fff;
  position: absolute;
  right: 15rem;
  top: 6rem;
  animation: shake 3s infinite;

  @keyframes shake {
    10%, 90% {
        transform: translate3d(-1px, 0, 0);
    }
    
    20%, 80% {
        transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
        transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
        transform: translate3d(4px, 0, 0);
    }
  }
`;

const ArrowImage = styled.div`
  img {
    width: 30%;
    transform: rotate(10deg);
  }
`;

const ArrowSpan = styled.div`
  font-size: 1.5rem;
  position: absolute;
  right: 7rem;
  top: -1rem;
  font-family: 'Caveat', cursive;
  transform: rotate(10deg);
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
`;

const Header = styled.div`
  color: #fff;
  font-size: 3rem;
  letter-spacing: 0.1rem;
  position: absolute;
  top: 2rem;
`;

export default App;
