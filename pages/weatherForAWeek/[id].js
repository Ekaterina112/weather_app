import React from "react";
import {MainLayout} from "../../components/MainLayout";
import {API_key} from "../weather";
import {useRouter} from "next/router";

export default function WeatherForAWeek({ initialWeather}) {
 const router =  useRouter()
    console.log(router.query)
    console.log(initialWeather)
    return <MainLayout>
        <h3>graphic with weather</h3>
    </MainLayout>
}
WeatherForAWeek.getInitialProps = async (ctx) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?id=${ctx.query.id}&cnt={7}&appid=${API_key}`)
    const initialWeather = await response.json()

    return {
        initialWeather
    }
}

