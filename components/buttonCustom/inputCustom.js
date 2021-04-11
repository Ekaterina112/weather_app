import React from "react";
import styles from "./inputCustom.module.css"

export function InputCustom ({type,placeholder}) {
    return <input type={type} placeholder={placeholder} className={styles.customInput}/>
}