import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Euphoric Lighthearted Scorpion</title>
        <meta property="og:title" content="Euphoric Lighthearted Scorpion" />
      </Helmet>
      <div className="home-banner-container">
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          loading="eager"
          className="home-corner-logo"
        />
        <span className="home-main-text">BLINK NETWORK</span>
        <button
          type="button"
          disabled={false}
          autoFocus={false}
          className="home-store-button1 button"
        >
          <span className="home-store-button2">
            <span>Store</span>
            <br></br>
          </span>
          Store
        </button>
        <button
          type="button"
          disabled={false}
          autoFocus={false}
          className="home-news-button1 button"
        >
          <span className="home-news-button2">
            <span>Store</span>
            <br></br>
          </span>
          Store
        </button>
        <button
          type="button"
          disabled={false}
          autoFocus={false}
          className="home-about-button button"
        >
          <span className="home-news-button3">
            <span>Store</span>
            <br></br>
          </span>
          Store
        </button>
      </div>
      <h1 className="home-text7">About Blink Network</h1>
      <h1 className="home-text8">
        Blink Network is a project I began in 2023, though I wasn&apos;t able to
        complete it at that time. Since then, I&apos;ve gained new insights and
        motivation, and now, at 17, I&apos;m relaunching the initiative with the
        support of friends. My goal is to build a Minecraft server that offers a
        unique and engaging experience for players.
      </h1>
      <div className="home-container2">
        <span className="home-text9">©Blink-Studios</span>
      </div>
    </div>
  )
}

export default Home
