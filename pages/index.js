import Head from "next/head";
import {MainLayout} from "../components/MainLayout";
import React from "react";
import styleContainer from "../styles/container.module.css";
import styles from "../styles/home.module.css";
import Link from "next/link";

export default function Index() {
    return <MainLayout>
        <Head>
            {/* for better SEO
            can and need  use on any page*/}
            <title>
                Rain Info
            </title>
            <meta name='keywords' content='weather, time'/>
            <meta name='description' content='weather app'/>
            <meta charSet='utf-8'/>
        </Head>
        <div className={styleContainer.mainContainer}>
            <h3 className={styles.inner_h3}>welcome</h3>
            <h1 className={styles.inner_h1}>Rainfo App</h1>
            <p className={styles.content}>Here you can find the <Link href={'/weather'}><a className={styles.link}>current
                weather</a></Link> and <Link href={'/time'}><a className={styles.link}>current time</a></Link> around
                the world.</p>
        </div>
    </MainLayout>
}