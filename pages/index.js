import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import React, {useState} from 'react'
import {renderContent} from '@components/functions.js'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home'); // State to track the current tab
  
  return (
    <div className="container">
      <Head>
        <title>sergio-g.com</title>
      </Head>

      <main>
        <div className="top-bar">
          <div className="name">Sergio G.</div>
          <div className="button-container">
            <button className="button" onClick={() => setCurrentPage('home')}> Home </button>
            <button className="button" onClick={() => setCurrentPage('projects')}> Projects </button>
            <button className="button" onClick={() => setCurrentPage('contact')}> Contact </button>
            <button className="button" onClick={() => setCurrentPage('cv')}> CV </button>
          </div>
        </div>

        {/* Render the content dynamically based on the selected tab */}
        {renderContent(currentPage)}
      </main>
    </div>
  );
}
