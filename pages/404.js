import {MainLayout} from "../components/MainLayout";
import React from "react";
import styleContainer from "../styles/container.module.css";
import styles from './../styles/404.module.css'
import Link from "next/link";
import stylesOfLink from '../styles/header.module.css'

export default function ErrorPage() {
    return <MainLayout>
        <div className={styleContainer.mainContainer} style={{position: "relative"}}>
            <div className={styles.innerBlock}>
                <h2>We’re sorry, the page you have looked for does not exist in our database.</h2>
                <span className={styles.verticalStr}>page not found</span>
                <p>Perhaps you would like to go to our home page?</p>
                <p>Go back to <Link href={`/`}><a className={stylesOfLink.link} style={{margin:0}}>Home</a></Link></p>
            </div>
            <span className={styles.errorBlockSpan}>404</span>
        </div>
    </MainLayout>
}