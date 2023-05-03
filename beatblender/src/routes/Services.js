import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ServicesImg from "../components/image/servicesimg.jpg"
import "./Services.css"


const Services = () => {
  return (
    <>
      <>
    <Navbar/>
    <Hero
    cName="hero-mid"
    heroImg = {ServicesImg}
    title='Services'
    btnClass="hide"
    />

<div class="cards">
  <div class="card one">
    <div class="cardDetails">
      <div class="cardDetailsHaeder">curate playlists based on the user's mood. </div>
    </div>
  </div>
  <div class="card two">
    <div class="cardDetails">
      <div class="cardDetailsHaeder">Card Header</div>
      <div class="cardDetailsButton">Click me</div>
      <h1>Click me</h1>
    </div>
  </div>
  <div class="card three">
    <div class="cardDetails">
      <div class="cardDetailsHaeder">Card Header</div>
      <div class="cardDetailsButton">Click me</div>
    </div>
  </div>
</div>
 
      </>

    </>
  )
}

export default Services


{/* 
    <h3>
Activity-Based Playlists: BeatBlender can also curate playlists based on the user's activity. For instance, if a user is running, BeatBlender can suggest playlists that feature tracks with a fast tempo to help the user stay motivated.

Customized Playlists: Users can create their own customized playlists on BeatBlender. They can add songs from BeatBlender's vast collection or import their own songs from Spotify or Apple Music.

Social Sharing: Users can share their playlists with friends on social media platforms like Facebook, Twitter, and Instagram.

BeatBlender's services can be useful for a wide range of users, including gym-goers, joggers, music enthusiasts, partygoers, and anyone who wants to enjoy music that matches their mood or activity.</h3> */}