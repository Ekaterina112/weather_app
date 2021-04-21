import React from "react";
import {MainLayout} from "../components/MainLayout";
import Clock from "../components/clock/clock";
import {MainContainer} from "./index";
import styled from 'styled-components'

export default function Time() {
    return <MainLayout>
        <MainContainer text='center'>
            <h1>"Take time to make Your Soul happy"</h1>
            <StyledInnerBlock>
                <Clock title={"London"} timeZone={"Europe/London"}/>
                <Clock title={"Minsk"} timeZone={"Europe/Minsk"}/>
                <Clock title={"Tokyo"} timeZone={"Asia/Tokyo"}/>
            </StyledInnerBlock>
        </MainContainer>
    </MainLayout>
}

export const StyledInnerBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 50px;
`

