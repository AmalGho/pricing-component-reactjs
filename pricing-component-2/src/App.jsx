import './App.css';
import styled from 'styled-components'
import Pricing from './components/Pricing';
import Toggle from './components/Toggle';

function App() {

  return (
    <div className="App">
      <MainContainer>

        <Header>
          Pricing
        </Header>
        <Toggle />
        <CardContainer>

          <Pricing 
            color= '#ffccd5c3'
            shadow = '#ffffff80'
            headerText='Basic'
            currency='$'
            duration='m'
            price={0}
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
            duration='m'
            price={15}
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
            duration='m'
            price={25}
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
  margin-bottom: 2rem;
  position: absolute;
  top: 2rem;
`;

export default App;
