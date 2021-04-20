import React from "react";
import Link from "next/link";
import Image from 'next/image'
import styled from 'styled-components'


export default function Header() {
    const menuPoints = ["weather", "time", "contacts",]
    return <StyledContainer>
        <Image src='/assets/logo.png'
               alt="logo"
               width={120}
               height={46}/>
        <StyledBlockMenu>
            <StyledMenu>
                {/* right link in Next.JS, change page, without scroll*/}
                <Link href={`/`}>
                    <StyledLink>home</StyledLink>
                </Link>
                {menuPoints.map((point, index) => <Link key={index} href={`/${point}`}>
                    <StyledLink>
                        {point}
                    </StyledLink>
                </Link>)}
            </StyledMenu>
        </StyledBlockMenu>
    </StyledContainer>
}

//for different pages we can use Layout with children
//and also we can use tag style jsx in a component( ex nav{})

const StyledContainer = styled.div`
  padding: 35px 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

const StyledBlockMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const StyledMenu = styled.div`
  display: flex;
  flex-direction: row;
`
const StyledLink = styled.div`
  margin: 0 17px;
  text-transform: uppercase;
  color: #000000;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  transition: all 0.4s ease-in-out 0s;
  text-decoration: none;
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

  @media screen and (max-width: 575.98px) {
    margin: 0 10px
  }`