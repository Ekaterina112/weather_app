import React, {useEffect, useState} from "react";
import {MainLayout} from "../components/MainLayout";
import Weather, {API_key} from "./weather";
import Clock from "../components/clock/clock";

export default function Time({timeZone}) {
    let [timeInString, setTimeInString] = useState('')
console.log(timeZone)
    const dateBuilder = (timezone) => {

        const nowInLocalTime = Date.now()  + 1000 * (timezone / 3600);
        const millitime = new Date(nowInLocalTime);
        const dateFormat = millitime.toLocaleString();

        let day = millitime.toLocaleString("en-US", {weekday: "long"});
        let month = millitime.toLocaleString("en-US", {month: "long"});
        let date = millitime.toLocaleString("en-US", {day: "numeric"});
        let year = millitime.toLocaleString("en-US", {year: "numeric"});
        let hours = millitime.toLocaleString("en-US", {hour: "numeric"});
        let minutes = millitime.toLocaleString("en-US", {minute: "numeric"});

        setTimeInString(`${day} ${date} ${month} ${year} ${hours}:${minutes}`) ;
    }

useEffect(()=>{dateBuilder(timeZone)},[])



    return <MainLayout>
        <h3>{timeInString}</h3>
        <Clock/>
    </MainLayout>
}

Time.getInitialProps = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Gomel&units=metric&appid=${API_key}`)
    const initialWeather = await response.json()
    const timeZone= await initialWeather.timezone
    return {
        timeZone
    }
}