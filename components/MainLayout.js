import React from "react";
import Header from "../pages/header";
import Footer from "../pages/footer";
import styles from "../styles/container.module.css";


export function MainLayout({children}) {
    return (<>
        <nav>
            <Header/>
        </nav>
        <main>
            {children}
        </main>
        <footer>
            <Footer/>
        </footer>
    </>)
}