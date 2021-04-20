import {MainLayout} from "../components/MainLayout";
import React from "react";
import Link from "next/link";
import styled from 'styled-components'
import {MainContainer, StyledLink} from "./index";


export default function ErrorPage() {
    return <MainLayout>
        <MainContainer style={{position: "relative"}}>
            <StyledInnerBlock>
                <h2>We’re sorry, the page you have looked for does not exist in our database.</h2>
                <StyledVerticalStr>page not found</StyledVerticalStr>
                <p>Perhaps you would like to go to our home page?</p>
                <p>Go back to <Link href={`/`}><StyledLink style={{margin: 0}}>Home</StyledLink></Link></p>
            </StyledInnerBlock>
            <StyledErrorBlockSpan>404</StyledErrorBlockSpan>
        </MainContainer>
    </MainLayout>
}

const StyledVerticalStr = styled.span`
  margin: 3px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  position: absolute;
  -webkit-transform: rotate(-90deg) translateX(-100%);
  -ms-transform: rotate(-90deg) translateX(-100%);
  transform: rotate(-90deg) translateX(-100%);
  -webkit-transform-origin: left bottom;
  -ms-transform-origin: left bottom;
  transform-origin: left bottom;
  left: 0;
  top: -12px;
`
const StyledErrorBlockSpan = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 24vw;
  line-height: 1;
  font-weight: 700;
  -webkit-text-stroke: 2px currentColor;
  -webkit-text-fill-color: transparent;
`
const StyledInnerBlock = styled.div`
  position: absolute;
  top: 15%;
  left: 0;
`

