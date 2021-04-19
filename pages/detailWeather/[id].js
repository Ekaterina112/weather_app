import React from "react";
import {MainLayout} from "../../components/MainLayout";
import {API_key} from "../weather";
import styles from "./../../styles/detailWeather.module.css"


export default function DetailWeather({initialWeather}) {
    //const router = useRouter()
    return <MainLayout>
        <div className={styles.detailWeather}>
            <div className={styles.imageBlock}>
                {/*here image*/}
            </div>
            <div className={styles.weatherBlock}>
                <h3>Your weather forecast for today</h3>
                <table>
                    <tbody>
                    <tr>
                        <td> Temperature</td>
                        <td>{initialWeather.main.temp}&deg;</td>
                    </tr>
                    <tr>
                        <td>Feels Like</td>
                        <td>{initialWeather.main.feels_like}&deg;</td>
                    </tr>
                    <tr>
                        <td>Humidity</td>
                        <td>{initialWeather.main.humidity}%</td>
                    </tr>
                    <tr>
                        <td>Atmospheric pressure</td>
                        <td>{initialWeather.main.pressure} hPa</td>
                    </tr>
                    <tr>
                        <td>Cloudiness</td>
                        <td>{initialWeather.clouds.all}%</td>
                    </tr>
                    <tr>
                        <td>Wind speed</td>
                        <td>{initialWeather.wind.speed} meter/sec</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </MainLayout>
}
DetailWeather.getInitialProps = async (ctx) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${ctx.query.id}&units=metric&appid=${API_key}`)
    const initialWeather = await response.json()

    return {
        initialWeather
    }
}

