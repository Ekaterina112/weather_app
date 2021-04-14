import React from "react";
import styles from "./inputCustom.module.css"

export function InputCustom ({type,placeholder,name,value,onChange}) {

    return <div>
        <input type={type} placeholder={placeholder} className={styles.customInput} name={name} autoComplete={'off'} value={value} onChange={onChange}/>
    </div>

}