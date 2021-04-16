import React from "react";
import {MainLayout} from "../components/MainLayout";
import Clock from "../components/clock/clock";
import styles from '../styles/time.module.css'


export default function Time() {

    return <MainLayout>
        <div className={styles.timeContainer}>
            <h1 className={styles.head}>"Take time to make Your Soul happy"</h1>
            <div className={styles.timeBlock}>
                <Clock title={"London"} timeZone={"Europe/London"}/>
                <Clock title={"Minsk"} timeZone={"Europe/Minsk"}/>
                <Clock title={"Tokyo"} timeZone={"Asia/Tokyo"}/>
            </div>
        </div>


    </MainLayout>
}

