import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
// import AboutImg from "../components/image/aboutimg.jpg"


const About = () => {
  return (
    <>
    <Navbar/>
    <Hero
    cName="hero"
    // heroImg = {AboutImg}
    title='Match your mood with our temp-based tunes!'
    text="Login to get started"
    buttonText="Login"
    url="/login"
    btnClass="show"
    />
 
      </>
  )
}

export default About