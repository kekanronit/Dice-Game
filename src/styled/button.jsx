import styled from "styled-components";

export const Button = styled.button`
padding: 10px 15px;
color: #FFFFFF;
background: #000000ff;
background-radius: 8px;
min-width: 220px;
border: none;
font-size: 16px;
border: 1px solid transparent;
transition: 0.4s background ease-in;
cursor: pointer;

&:hover {
background-color: #ffffffff;
border: 1px solid black;
color: black;
transition: 0.3s background ease-in;


}`;

export const OutlineButton = styled(Button)`
&:hover {
background-color: white;
border: 1px solid black;
color: black;
transition: 0.3s background ease-in;


}

}
`;
