import styles from '../styles/footer.module.css'
import React from "react";

export default function Footer() {
    return <div className={styles.footerContainer}>
        <div className={styles.copyRights}>
            ©2021 RainBow. All Rights Reserved.
        </div>
        <div className={styles.links}>
            FB | DB | Be | Tw | Co
        </div>
    </div>
}