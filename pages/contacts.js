import {MainLayout} from "../components/MainLayout";
import React from "react";
import styles from "../styles/contacts.module.css"

export default function Contacts() {
    return <MainLayout>
        <div className={styles.contactContainer}>
                <h1>Contact me</h1>

            <div className={styles.informBlock}>
                <div className={styles.address}>
                    <h3>Address</h3>
                    <p>Belarus, Gomel, 246013 </p>
                    <p>Belarus, Minsk, 206010</p>
                </div>
                <div className={styles.contacts}>
                    <h3>Contacts</h3>
                    <p>@ekaterinan112@gmail.com</p>
                    <p>+375-29-807-50-50</p>
                </div>
            </div>
            <h3 className={styles.footer}>
                Communication can make hard work to easy. We are ready 24 hours to help you.
            </h3>
        </div>

    </MainLayout>
}