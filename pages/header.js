import React from "react";
import Link from "next/link";
import Image from 'next/image'
import styles from '../styles/header.module.css'
import ButtonCustom from "../components/buttonCustom/buttonCustom";


export default function Header() {
    const menuPoints = ["weather", "time", "contacts",]
    return <div className={styles.headerContainer}>
        <Image src='/assets/logo.png'
               alt="logo"
               width={120}
               height={46}/>
        <div className={styles.blockMenu}>
            <div className={styles.menu}>
                {/* right link in Next.JS, change page, without scroll*/}
                <Link href={`/`}>
                    <a className={styles.link}>
                        home
                    </a>
                </Link>
                {menuPoints.map((point, index) => <Link key={index} href={`/${point}`}>
                    <a className={styles.link}>
                        {point}
                    </a>
                </Link>)}
            </div>
            <ButtonCustom title={'Sign In'}/>
        </div>
    </div>
}

//for different pages we can use Layout with children
//and also we can use tag style jsx in a component( ex nav{})