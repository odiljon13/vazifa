import React from 'react'
import './Home.css'
import image from '../img/myimage.jpg'
import telegram from '../img/telegram.jpg'
import youtube from '../img/youtube.png'


const Home = () => {
  return (
    <>
  <img src={image} alt="" />
  <h1>Odiljon</h1>
  <p>Mening ismim Odiljon men asaka tumanidagi ixtisoslashgan maktabiga topshirib 7-o'rinda kirdim.</p>
  <a href="https://www.youtube.com/@aisehri"><img src={youtube} alt="" /></a>
  <a href="https://t.me/it_ai_faktlar"><img src={telegram} alt="" /></a>

    </>
  )
}

export default Home