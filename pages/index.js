import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>sergio-g.com</title>
        
      </Head>

      <main>
        <div className='top-bar'>
          <div className='name'>Sergio G.</div>
          {/*
          <div className="button-container">
            <button className="button">Home</button>
            <button className="button">Projects</button>
            <button className="button">Contact</button>
            <button className="button">CV</button>
          </div>
          */}
        </div>
        

{/*
        <div className='selfie-container'>
          <img 
            src='temp_picture.png'
            alt='Sergio Gutierrez'
            className='circle-photo'
            />
        </div>
*/}
        {/*<Header title="Sergio Gutierrez" />*/}
        {/*
        <p className="bio">
          Hello and Welcome to my website! <br/>
          My name is Sergio Gutierrez! <br/>
          I am a Computer Science student at SUNY Oneonta!<br/>
          Feel free to reach out or check out my projects!
        </p>
        */}
      </main>

    </div>
  )
}
