import {MainLayout} from "../components/MainLayout";
import React from "react";
import styles from './../styles/404.module.css'
import ButtonCustom from "../components/buttonCustom/buttonCustom";

export default function ErrorPage() {
    return <MainLayout>
        <div className={styles.errorBlock}>
            <div className={styles.innerBlock}>
                <h2>We’re sorry, the page you have <wbr/> looked for does not exist in our database.</h2>
                <span className={styles.verticalStr}>page not found</span>
                <p>Perhaps you would like to go to our home page?</p>
                <ButtonCustom title={'Go to Home'}/>
            </div>

            <span className={styles.errorBlockSpan}>404</span>
        </div>


    </MainLayout>
}