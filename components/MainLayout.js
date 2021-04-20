import React from "react";
import Header from "../pages/header";
import Footer from "../pages/footer";

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