import styled from "styled-components";
import { Button } from "../styled/button";

export const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
      <img src="Images/dices.png" alt="" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        
        <Button
        onClick={toggle}
        >play Now</Button>
      </div>

    </Container>
  )
}

export default StartGame;

const Container = styled.div`
max-width: 1000px;
display: flex;
margin: auto;
height : 100vh;
align-items: center;

.content {
font-size: 40px;
white-space: nowrap;

}

`;








