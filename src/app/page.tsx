import Head from "next/head";
import Layout from "../component/Layout/layout";
import Image from "next/image";
import iLoveSleep from "../../public/images/ilovesleep.jpeg";
import styles from "@/app/styles/Home.module.css";

export default function IndexPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Next.js | Microsoft Graph</title>
        </Head>
        <main className={styles.main}>
          <h1>Take a Break Reminder App</h1>
          <h4>
            A step by step tutorial how you can use Microsoft Graph with
            Next.js!
          </h4>
          <div>
            <Image
              priority={true}
              src={iLoveSleep}
              width={560}
              height={315}
              alt="a clock image with a reminder"
            />
          </div>
        </main>
      </div>
    </Layout>
  );
}
