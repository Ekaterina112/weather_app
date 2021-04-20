import React from "react";
import styled from 'styled-components'
import {MainLayout} from "../components/MainLayout";
import {MainContainer, StyledTitleOne, StyledTitleThree} from "./index";

export default function Contacts() {
    return <MainLayout>
        <MainContainer align ='center'>
            <StyledTitleOne>Contact me</StyledTitleOne>
            <StyledInformBlock>
                <div>
                    <StyledTitleThree>Address</StyledTitleThree>
                    <p>Belarus, Gomel, 246013 </p>
                    <p>Belarus, Minsk, 206010</p>
                </div>
                <div>
                    <StyledTitleThree>Contacts</StyledTitleThree>
                    <p>@ekaterinan112@gmail.com</p>
                    <p>+375-29-807-50-50</p>
                </div>
            </StyledInformBlock>
            <h3>
                Communication can make hard work to easy. We are ready 24 hours to help you.
            </h3>
        </MainContainer>
    </MainLayout>
}




const StyledInformBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  margin-top: 30px;
  width: 100%;
  & h3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 20px; 
  }
`
