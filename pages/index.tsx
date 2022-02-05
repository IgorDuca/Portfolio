import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import technologist from '../assets/technologist.png'

import Header from '../components/header'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Igor Duca</title>
        <meta name="description" content="Igor Duca - Junior FullStack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <Image src={technologist}/>

        <h1 className={styles.title} >Igor Duca</h1>
        <h2>Junior FullStack Developer</h2>

        <div className={styles.infoDiv} id="infoDiv" >
          <h2>Working at:</h2> 
          <a href="https://virtualcart.app/"><h2 style={{marginLeft: 5, color:"#3278cf", cursor:"pointer"}}>VirtualCart</h2></a>
        </div>
      </main>
    </div>
  )
}

export default Home
