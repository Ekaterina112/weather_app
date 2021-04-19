import React from "react";
import styled from 'styled-components'


const StyledButton = styled.button`
  padding: 0 26px;
  min-height: 40px;
  line-height: 39px;
  border: 1px solid #000000;
  border-radius: 3px;
  color: #000000;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  transition: 0.4s ease-in-out;
  background: transparent;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    background: #000000;
    border: 1px solid #000000;
  }
`

export default function  ButtonCustom  ({title, handler}) {
    return <StyledButton onClick={handler}>
        {title}
    </StyledButton>
}