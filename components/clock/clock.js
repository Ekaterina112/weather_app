import React, {useState} from "react";
import styled from 'styled-components'


const StyledClock = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px 10px 60px 10px;
  box-shadow: 0 1px 5px rgba(5, 5, 6, 0.15);
  -webkit-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  margin: 20px;
  font-size: 20px;

  &:hover {
    box-shadow: 0 4px 15px rgba(5, 5, 6, 0.1);
    -webkit-box-shadow: 0 3px 20px rgba(5, 5, 6, 0.10);
  }
`

export default function Clock({timeZone, title}) {
    let time = new Date().toLocaleTimeString("en-US", {timeZone: timeZone})
    let [currentTime, setCurrentTime] = useState(time)

    const updateTime = () => {
        time = new Date().toLocaleTimeString("en-US", {timeZone: timeZone})
        setCurrentTime(time)
    }
    setInterval(updateTime, 1000)
    return <StyledClock>
        <h3>{title}</h3>
        {time}
    </StyledClock>
}