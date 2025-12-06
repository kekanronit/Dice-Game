import React from 'react'
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play the Dice games </h2>
      <div className='text'>
        <p>Select any number</p>
        <p>Click on the dice Images</p>
        <p>After clicking on dice If selected number is equal to dice number you will get some point on dice If you get wrong guess then 2 poit will be deducted</p>
      </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
max-width: 600px;
margin: 20px auto;

background-color: #fbf1f1;
padding: 20px;
h2{
font-size: 24px;

}
.text{
margin-top: 10px;

}

`