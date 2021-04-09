import Link from "next/link";
import Image from 'next/image'
import styles from './header.module.css'
import ButtonCustom from "../components/buttonCustom/buttonCustom";

export default function Header() {
    const menuPoints = ["home", "place", "contacts", "about",]
    return <div className={styles.headerContainer}>
        <Image src='/assets/logo.png'
               alt="logo"
               width={120}
               height={46}/>
        <div className={styles.blockMenu}>
            <div className={styles.menu}>
                {menuPoints.map((point, index) => <Link key={index} href={`/${point}`}>
                    <a className={styles.link}>
                        {point}
                    </a>
                </Link>)}
            </div>
            <ButtonCustom title={'Sign In'}/>
            {/* right link in Next.JS, change page, without scroll*/}
        </div>

    </div>
}

//for different pages we can use Layout with children
//and also we can use tag style jsx in a component( ex nav{})