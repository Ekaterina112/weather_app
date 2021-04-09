import styles from './footer.module.css'

export default function Footer() {
    return <div className={styles.footerContainer}>
        <div className={styles.copyRights}>
            ©2019 RainBow. All Rights Reserved.
        </div>
        <div className={styles.links}>
            FB | DB | Be | Tw | Co
        </div>
    </div>
}