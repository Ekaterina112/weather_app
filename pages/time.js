import React from "react";
import {MainLayout} from "../components/MainLayout";
import Clock from "../components/clock/clock";
import {MainContainer} from "./index";
import styled from 'styled-components'

export default function Time() {
    return <MainLayout>
        <MainContainer>
            <StyledTitleOne>"Take time to make Your Soul happy"</StyledTitleOne>
            <StyledInnerBlock>
                <Clock title={"London"} timeZone={"Europe/London"}/>
                <Clock title={"Minsk"} timeZone={"Europe/Minsk"}/>
                <Clock title={"Tokyo"} timeZone={"Asia/Tokyo"}/>
            </StyledInnerBlock>
        </MainContainer>
    </MainLayout>
}

export const StyledTitleOne = styled.h1`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
export const StyledInnerBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 50px;
`

