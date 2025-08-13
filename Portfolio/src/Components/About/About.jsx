import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/About_profile.jpg'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            {/* <img className='head' src={theme_pattern} alt="" /> */}
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" height={500}/>
                </div>
                <div className="about-right">
                    <div className="about-paragraph">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam tempora omnis in nesciunt qui reiciendis.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, numquam.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>Django</p><hr style={{width:"40%"}}/></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}}/></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achivements">
            <div className="about-achivement">
                <h1>10+</h1>
                <p>Years of Experience</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>90+</h1>
                <p>Projects Completed</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>15+</h1>
                <p>Happy Clients</p>
            </div>


        </div>
      
    </div>
  )
}

export default About
