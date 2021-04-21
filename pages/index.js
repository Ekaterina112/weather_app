import Head from "next/head";
import {MainLayout} from "../components/MainLayout";
import React from "react";
import Link from "next/link";
import styled from 'styled-components'
import img from './../public/assets/bg-image.jpg';


export default function Index() {
    return <MainLayout>
        <Head>
            {/* for better SEO
            can and need  use on any page*/}
            <title>
                Rain Info
            </title>
            <meta name='keywords' content='weather, time'/>
            <meta name='description' content='weather app'/>
            <meta charSet='utf-8'/>
        </Head>
        <MainContainer>
            <StyledTitleThree>welcome</StyledTitleThree>
            <StyledTitleOne>Rainfo App</StyledTitleOne>
            <StyledContent>Here you can find the <Link href={'/weather'}><StyledLink>current
                weather</StyledLink></Link> and <Link href={'/time'}><StyledLink>current time</StyledLink></Link> around
                the world.</StyledContent>
        </MainContainer>
    </MainLayout>
}


export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:  ${props => props.align || 'stretch'};
  text-align:  ${props => props.text || 'stretch'};
  flex-wrap: wrap;
  padding: 50px;
  min-height: 70vh;
  box-sizing: border-box;
  background-image: url(${img});
  background-position: center center;
  background-size: cover;
  color: #2e2e2d;
  @media (max-width: 576px) {
    padding: 10px;
  }
`
export const StyledTitleThree = styled.h3`
  font-size: 70px;
  font-weight: 300;
  line-height: 100px;
  margin-bottom: 8px;
  margin-top: 0;
  @media (max-width: 576px) {
    font-size: 60px;
  }
`
export const  StyledTitleOne = styled.h1`
  color: #000000;
  font-size: 70px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 40px;
`
export const StyledContent = styled.p`
  color: #2e2e2d;
  font-weight: 300;
  line-height: 30px;
  font-size: 18px;
  margin: 0;
`
export const StyledLink = styled.a`
  text-decoration: none;
  color: #000000;
  position: relative;
  &::after {
    width: 0;
    background: #000000 none repeat scroll 0 0;
    content: "";
    height: 1px;
    left: 0;
    position: absolute;
    top: 100%;
    transform: translate(-0, -50%);
    transition: all .3s ease-in-out;
  }
  &:hover:after,
  &:focus:after {
    width: 100%;
  }
`


