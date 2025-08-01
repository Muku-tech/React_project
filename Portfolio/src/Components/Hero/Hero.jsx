import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile-pic.png'

const Hero = () => {
  return (
    <div className='hero'>
       <img src={profile_img} alt="" height={250}/>
       <h1><span>I'am Mukunda Mahat,</span> frontend developer.</h1>
       <p>I am currently a Bsc.CSIT student and a frontend developer.I love doing these stuffs and this is how I would like to showcase my portfolio.</p>
       <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
       </div>
      
    </div>
  )
}

export default Hero
