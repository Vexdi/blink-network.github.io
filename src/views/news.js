import React from 'react'

import { Helmet } from 'react-helmet'

import './news.css'

const News = (props) => {
  return (
    <div className="news-container1">
      <Helmet>
        <title>News - Euphoric Lighthearted Scorpion</title>
        <meta
          property="og:title"
          content="News - Euphoric Lighthearted Scorpion"
        />
      </Helmet>
      <div className="news-banner-container">
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          loading="eager"
          className="news-corner-logo"
        />
        <span className="news-main-text">BLINK NETWORK</span>
        <button
          type="button"
          disabled={false}
          autoFocus={false}
          className="news-store-button1 button"
        >
          <span className="news-store-button2">
            <span>Store</span>
            <br></br>
          </span>
          Store
        </button>
        <button
          type="button"
          disabled={false}
          autoFocus={false}
          className="news-news-button1 button"
        >
          <span className="news-news-button2">
            <span>Store</span>
            <br></br>
          </span>
          Store
        </button>
        <button
          type="button"
          disabled={false}
          autoFocus={false}
          className="news-about-button button"
        >
          <span className="news-news-button3">
            <span>Store</span>
            <br></br>
          </span>
          Store
        </button>
      </div>
      <span className="news-text7">News Will appear here</span>
      <div className="news-container2">
        <span className="news-text8">©Blink-Studios</span>
      </div>
    </div>
  )
}

export default News
