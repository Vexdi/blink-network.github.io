import React from 'react'

import { Helmet } from 'react-helmet'

import './store.css'

const Store = (props) => {
  return (
    <div className="store-container1">
      <Helmet>
        <title>Store - Euphoric Lighthearted Scorpion</title>
        <meta
          property="og:title"
          content="Store - Euphoric Lighthearted Scorpion"
        />
      </Helmet>
      <div className="store-banner-container">
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          loading="eager"
          className="store-corner-logo"
        />
        <span className="store-main-text">BLINK NETWORK</span>
        <button
          type="button"
          disabled={false}
          autoFocus={false}
          className="store-store-button1 button"
        >
          <span className="store-store-button2">
            <span>Store</span>
            <br></br>
          </span>
          Store
        </button>
        <button
          type="button"
          disabled={false}
          autoFocus={false}
          className="store-news-button1 button"
        >
          <span className="store-news-button2">
            <span>Store</span>
            <br></br>
          </span>
          Store
        </button>
        <button
          type="button"
          disabled={false}
          autoFocus={false}
          className="store-about-button button"
        >
          <span className="store-news-button3">
            <span>Store</span>
            <br></br>
          </span>
          Store
        </button>
      </div>
      <span className="store-text7">Store will be here</span>
      <div className="store-container2">
        <span className="store-text8">©Blink-Studios</span>
      </div>
    </div>
  )
}

export default Store
