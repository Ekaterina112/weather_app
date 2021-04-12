import React, {useEffect} from "react";
import styles from './../styles/weather.module.css'
import {MainLayout} from "../components/MainLayout";
import {InputCustom} from "../components/buttonCustom/inputCustom";
import ButtonCustom from "../components/buttonCustom/buttonCustom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {faSun} from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css';

library.add(fas);


//delete after using
const API_key = "cec9a26ad731dd80c87fe414f1dc7256"


export default function Weather({startWeather}) {

    /*
        useEffect(
            async function getstartWeather() {
                const response = await fetch('')
                const startWeather = await response.json()
            }, []
        )
    */

    return <MainLayout>
        <div className={styles.weatherContainer}>
            <form className={styles.formStyle}>
                <InputCustom type={'text'} placeholder={'country'}/>
                <InputCustom type={'text'} placeholder={'city'}/>
                <ButtonCustom title={'find'}/>
            </form>
            <div className={styles.weatherContainer}>
                <h1>London</h1>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={["fas", "sun"]} className={styles.icon}></FontAwesomeIcon>
                </div>
                <p>{startWeather.sys.country}, {startWeather.name}</p>
                <h2>{startWeather.main.temp}&deg;</h2>
                <div>
                    <span>{startWeather.main.temp_min}&deg;-{startWeather.main.temp_max}&deg;</span>
                </div>
                <h3>Slow Rain</h3>
            </div>
        </div>
    </MainLayout>
}

//initial state in next.js
//Static method, doing on a server
Weather.getInitialProps = async () => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${API_key}`)
    const startWeather = await response.json()
    console.log(startWeather)
    return {
        startWeather
    }
}
