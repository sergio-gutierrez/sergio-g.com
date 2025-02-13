import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>sergio-g.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='top-bar'>
          <span className="name">Sergio G.</span>
          <div className="button-container">
            <button className="button">Home</button>
            <button className="button">Projects</button>
            <button className="button">Contact Me</button>
          </div>
        </div>
        
        <Header title="Hello and Welcome!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>


      </main>

      <Footer />
    </div>
  )
}
