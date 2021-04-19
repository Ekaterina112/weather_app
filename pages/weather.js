import React, {useEffect, useState} from "react";
import styles from './../styles/weather.module.css'
import st_link from "../styles/home.module.css"
import {MainLayout} from "../components/MainLayout";
import {InputCustom} from "../components/buttonCustom/inputCustom";
import ButtonCustom from "../components/buttonCustom/buttonCustom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css';
import Link from "next/link";


library.add(fas);


export const API_key = "cec9a26ad731dd80c87fe414f1dc7256"

export default function Weather({initialWeather}) {

    let [startWeather, startWeatherSet] = useState(initialWeather)
    let [weatherIcon, weatherIconSet] = useState("sun")
    let [error, setError] = useState('')


    useEffect(() => {
        getWeatherIcon(startWeather.weather[0].id)
    }, [startWeather.weather[0].id])

    function getWeatherIcon(id) {
        switch (true) {
            case id >= 200 && id <= 232:
                weatherIconSet("cloud-rain")
                break
            case id >= 300 && id <= 321:
                weatherIconSet("cloud-rain")
                break
            case id >= 500 && id <= 531:
                weatherIconSet("cloud-rain")
                break
            case id >= 600 && id <= 622:
                weatherIconSet("snowflake")
                break
            case id >= 700 && id <= 781:
                weatherIconSet("smog")
                break
            case id = 800:
                weatherIconSet("sun")
                break
            case id > 800 && id <= 804:
                weatherIconSet("cloud")
                break
            default:
                weatherIconSet("sun")

        }
    }


    const getWeatherHandler = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value
        const country = e.target.elements.country.value

        if (city && country) {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_key}`)
            if (response.status === 200) {
                const start = await response.json();
                startWeatherSet(start)
                setError('')
            } else {
                e.target.elements.city.value = ""
                e.target.elements.country.value = ""
                setError('Your response is not valid. \n Please, try again')
            }
        } else {
            setError('Please, fill all fields')
        }
    };


    return <MainLayout>
        <div className={styles.weatherContainer}>
            <form className={styles.formStyle} onSubmit={getWeatherHandler}>
                <InputCustom type={'text'} placeholder={'country'}
                             name={'country'}/>
                <InputCustom type={'text'} placeholder={'city'}
                             name={'city'}/>
                <ButtonCustom title={'find'}/>
            </form>
            <div className={styles.blockError}>{error && error}</div>
            <div className={styles.weatherBlock}>
                <h1>{startWeather.sys.country}, {startWeather.name}</h1>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={["fas", `${weatherIcon}`]}
                                     className={styles.icon}/>
                </div>
                <h2>{Math.round(startWeather.main.temp)}&deg;</h2>
                <div>
                    <span>{Math.round(startWeather.main.temp_min)}&deg;  - {Math.round(startWeather.main.temp_max)}&deg;</span>
                </div>
                <h3>{startWeather.weather[0].description}</h3>
            </div>
            <span>
              More detail Information You can find   <Link href={`/detailWeather/[id]`}
                                                           as={`/detailWeather/${startWeather.id}`}><a
                className={st_link.link}>here</a></Link>
            </span>
        </div>
    </MainLayout>
}

//initial state in next.js
//Static method, doing on a server
Weather.getInitialProps = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Minsk&units=metric&appid=${API_key}`)
    const initialWeather = await response.json()
    return {
        initialWeather
    }
}


