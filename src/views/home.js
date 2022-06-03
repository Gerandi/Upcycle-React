import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Upcycle Albania</title>
        <meta
          name="description"
          content="The next big thing in sustainable fashion. Coming Soon."
        />
        <meta property="og:title" content="Upcycle Albania" />
        <meta
          property="og:description"
          content="The next big thing in sustainable fashion. Coming Soon."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/678d5a1b-063d-4e3c-8c30-01740c18ee29/4d0768c5-d646-4512-9bf1-384bef98c153?org_if_sml=1"
        />
      </Helmet>
      <div className="home-navbar navbar-container">
        <div className="max-width">
          <div className="home-logo">
            <img
              alt="image"
              src="/playground_assets/beige%2520and%2520brown%2520minimalist%2520elegant%2520wardr-200h.png"
              className="home-image"
            />
          </div>
          <div className="home-burger-menu navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="hero-container section-container home-hero">
        <div className="home-max-width1 max-width">
          <div className="home-content">
            <span className="home-subtitle before-Heading">
              UPCYCLE CLOTHES AND SAVE MONEY!
            </span>
            <h1 className="home-title">
              <span className="home-text">
                The next big thing in
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text1">
                sustainable
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text2">fashion</span>
            </h1>
            <span className="home-description">Coming Soon!</span>
          </div>
          <div className="home-image1">
            <img
              alt="image"
              src="/playground_assets/photo-1532453288672-3a27e9be9efd1-600w.jpg"
              className="home-hero-image"
            />
            <img
              alt="image"
              src="/playground_assets/union-400w.png"
              className="home-graphic-top"
            />
            <img
              alt="image"
              src="/playground_assets/group%2018-1200w.png"
              className="home-image2"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
