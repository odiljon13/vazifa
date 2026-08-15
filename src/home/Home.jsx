import React from 'react'
import './Home.css'
import image from '../img/myimage.jpg'
import telegram from '../img/telegram.jpg'
import youtube from '../img/youtube.png'

const Home = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-image-wrapper">
          <img className="profile-image" src={image} alt="Odiljon" />
          <div className="status-indicator"></div>
        </div>
        
        <h1 className="profile-name">Odiljon</h1>
        
        <p className="profile-bio">
          Mening ismim Odiljon, men Asaka tumanidagi ixtisoslashgan maktabiga topshirib 7-o'rinda kirdim.
        </p>
        
        <div className="social-links">
          <a href="https://www.youtube.com/@aisehri" className="social-link youtube" target="_blank" rel="noreferrer">
            <img src={youtube} alt="YouTube" />
          </a>
          <a href="https://t.me/it_ai_faktlar" className="social-link telegram" target="_blank" rel="noreferrer">
            <img src={telegram} alt="Telegram" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home