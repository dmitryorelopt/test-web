import React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import styles from '../../styles/home.module.css'

const Redirect: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Redirect</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          redirect
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Redirect;
