import styles from './clock.module.css'
import React, {useState} from "react";

export default function Clock({timeZone, title}) {
    let time = new Date().toLocaleTimeString("en-US", {timeZone: timeZone})
    let [currentTime, setCurrentTime] = useState(time)

    const updateTime = () => {
        time = new Date().toLocaleTimeString("en-US", {timeZone: timeZone})
        setCurrentTime(time)
    }
    setInterval(updateTime, 1000)
    return <div className={styles.clock}>
        <h3>{title}</h3>
        {time}
    </div>
}