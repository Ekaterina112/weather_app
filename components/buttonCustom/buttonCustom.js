import React from "react";
import styles from './buttonCustom.module.css'


export default function  ButtonCustom  ({title, handler}) {
    return <button onClick={handler} className={styles.btn}>
        {title}
    </button>
}