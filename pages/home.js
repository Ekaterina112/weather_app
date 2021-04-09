import Header from "./header";
import styles from "./home.module.css";
import {MainLayout} from "../components/MainLayout";

export default function Home() {
   return<MainLayout>
       <div className={styles.homeContainer}>
           Main
       </div>
   </MainLayout>

}