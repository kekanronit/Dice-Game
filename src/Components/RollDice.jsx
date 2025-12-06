import styled from "styled-components";

const RollDice = ({ rollDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/Images/Dice/dice_${currentDice}.png`} alt="Dice 1" />
      </div>
      <p>Click on dice to Roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 18px;
  }
  .dice {
    cursor: pointer;
  }
`;
