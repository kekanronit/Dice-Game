import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button } from "../styled/button";
import { OutlineButton } from "../styled/button";
import Rules from "./Rules";

export const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setshowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("Please select a number before rolling the dice.");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + 1);
    } else {
      setScore((prev) => prev - 1);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);

  }

  

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} error={setError} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <OutlineButton 
        onClick={resetScore}
        >Reset</OutlineButton>
        <Button
        onClick={() => setshowRules((prev) => !prev)}
        >
         { showRules ? "Hide" : "show" }Rules</Button>
      </div>
     {showRules && <Rules/>}
    </MainContainer>
  );
};

const MainContainer = styled.main`
  .top_section {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    align-items: end;
  }
  .btns {
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 20px;
    margin-top: 30px;
    font-weight: 500;
    padding: 25px;
  }
`;
