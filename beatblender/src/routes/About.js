import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from "../components/image/aboutimg.jpg"
import "./About.css"


const About = () => {
  return (
    <>
    <Navbar/>
    <Hero
    cName="hero-mid"
    heroImg = {AboutImg}
    title='About Us'
    btnClass="hide"
    />
    <h2 className="about-text">BeatBlender is a music streaming service that provides a unique experience for users by curating music from Spotify and Apple Music based on tempo. 
      BeatBlender's advanced algorithms analyze songs to determine their tempo and curate them into different tempo styles such as chill, energetic, and relaxing. 
      This makes it easier for users to discover new music based on their mood or activity. BeatBlender's user-friendly interface allows users to easily browse and 
      select music that matches their preferences. With access to millions of songs, BeatBlender offers a vast collection of music for users to choose from. Whether 
      users are looking for upbeat tracks to work out to or relaxing music to wind down with, BeatBlender has something for everyone.</h2>
      </>
  )
}

export default About