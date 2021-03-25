import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          https://www.eda.gov/oie/buildtoscale/capital/2020/

          <br/>
          www.eda.gov/oie/buildtoscale/.
          <br/>
          Current Closing Date for Applications: Applications are due April 29, 2021 at 11:59pm ET.
          <br/>

          <br/>
          https://ilsr.org/the-states-of-distributed-solar/

      </main>

      <footer className={styles.footer}>
        <a>
          Powered by{' '}
          &#8599;
        Forward Progress

        </a>
      </footer>
    </div>
  )
}
