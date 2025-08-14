import React from 'react'
import './Education.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'

const Education = () => {
  return (
    <div id='education' className='education'>
        <div className="education-title">
            <h1>My Educations</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="education-container">
            {Services_Data.map((service,index)=>{
                return <div key={index} className="education-format">
                    <h1>{service.Title}</h1>
                    <h2><u>{service.Date}</u></h2>
                    <p>{service.College}</p>
                    <p1>GPA:  {service.GPA}</p1>

                </div>
            })}

        </div>
      
    </div>
  )
}

export default Education
