import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import * as Icon from 'react-feather';
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>payFlow</title>
        <meta name="description" content="Find what your employees earn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">payFlow 1.0!</a>
        </h1>

        <p className={styles.description}>
          Get started by uploading your CSV
        </p>

       <Link href={"/dashboard"}>
           <div className={styles.grid}>
               <div className={styles.card}>
                   <div style={{
                       display: 'flex',
                   }}>
                       <p>Click to upload  File</p>
                       <Icon.File/>
                   </div>
               </div>

           </div>
       </Link>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright &#169; 2022
        </a>
      </footer>
    </div>
  )
}

export default Home
