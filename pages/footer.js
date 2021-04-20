import React from "react";
import styled from 'styled-components'


export default function Footer() {
    return <StyledFooterContainer>
        <StyledCopyRights>
            ©2021 RainBow. All Rights Reserved.
        </StyledCopyRights>
        <StyledLinks>
            FB | DB | Be | Tw | Co
        </StyledLinks>
    </StyledFooterContainer>
}


const StyledFooterContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 10vh;
  background: #ececec;
`
const StyledCopyRights = styled.div`
  margin: 0;
  color: #000000;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 400;
`
const StyledLinks = styled.div`
  font-size: 14px;
  color: #717171;
  font-weight: 400;
  -webkit-transition: all .3s;
`