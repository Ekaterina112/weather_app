import React from "react";
import {MainLayout} from "../components/MainLayout";
import {InputCustom} from "../components/buttonCustom/inputCustom";
import styles from './../styles/weather.module.css'
import ButtonCustom from "../components/buttonCustom/buttonCustom";
export default function Weather() {
    return <MainLayout>
        <div className={styles.weatherContainer}>
            <form className={styles.formStyle}>
                <InputCustom type={'text'} placeholder={'country'}/>
                <InputCustom type={'text'} placeholder={'city'}/>
                <ButtonCustom title={'find'} />
            </form>
            <div>
                <h3>here will be weather</h3>
            </div>
        </div>

    </MainLayout>
}