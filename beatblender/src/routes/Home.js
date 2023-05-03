import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import heroImg from "../components/image/hero.jpg"

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero
    cName="hero"
    heroImg = {heroImg}
    title='Match your mood with our temp-based tunes!'
    text="Login to get started"
    buttonText="Login"
    url="/login"
    btnClass="show"
    />
 
      </>
  )
}

export default Home