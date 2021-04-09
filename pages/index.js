import Head from "next/head";
import {MainLayout} from "../components/MainLayout";

export default function Index() {
    return <MainLayout>
        <Head>
            {/* for better SEO
            can and need  use on any page*/}
            <title>
                Rain Info
            </title>
            <meta name='keywords' content='flowers, cozy'/>
            <meta name='description' content='shop flowers, test shop'/>
            <meta charSet='utf-8'/>
        </Head>
    </MainLayout>
}