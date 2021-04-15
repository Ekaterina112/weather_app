import styles from './clock.module.css'
import React, {useState} from "react";

export default function Clock() {
    let time = new Date().toLocaleTimeString()
    let [currentTime, setCurrentTime] = useState(time)

    const updateTime = () => {
        time = new Date().toLocaleTimeString()
        setCurrentTime(time)
    }
    setInterval(updateTime, 1000)
    return <div className={styles.clock}>
        {time}
    </div>
}