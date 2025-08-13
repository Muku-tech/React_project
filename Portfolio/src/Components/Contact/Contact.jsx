// import React from 'react'
// import './Contact.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
// import mail_icon from '../../assets/mail_icon.svg'
// import location_icon from '../../assets/location_icon.svg'
// import call_icon from '../../assets/call_icon.svg'

// const Contact = () => {
//     const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append("access_key", "64ca40f0-b246-4b94-a5bd-524376dff2ea");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: json
//     }).then((res) => res.json());

//     if (res.success) {
//       console.log("Success", res);
//     }
//   };



//   return (
//     <div id='contact' className='contact'>
//         <div className="contact-title">
//             <h1>Get in touch</h1>
//             <img src={theme_pattern} alt="" />
//         </div>
//         <div className="contact-section">
//             <div className="contact-left">
//                 <h1>Let's talk</h1>
//                 <p>I'm currently available to take on new projects, so feel free to send me message about anything that you want me to work on. You can contact me anytime.</p>
//                 <div className="contact-details">
//                     <div className="contact-detail">
//                         <img src={mail_icon} alt="" /><p>mahatmuku567@gmail.com</p>
//                     </div>
//                     <div className="contact-detail">
//                         <img src={call_icon} alt="" /><p>+977 9762870120</p>
//                     </div>
//                     <div className="contact-detail">
//                         <img src={location_icon} alt="" /><p>Kathmandu,Nepal</p>
//                     </div>
//                 </div>
//             </div>
//             <form onSubmit={onSubmit} className="contact-right">
//                 <label htmlFor="">Your Name:</label>
//                 <input type="text" placeholder='Enter Your Name Here' name='name'/>
//                 <label htmlFor="">Your Email:</label>
//                 <input type="email" placeholder='Enter Your Email Here' name='email'/>
//                 <label htmlFor="">Write your message here:</label>
//                 <textarea name="message" rows="8" placeholder='Enter Your Message Here'></textarea>
//                 <button type='submit' className='contact-submit'>Submit</button>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Contact


import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // stop page reload
    setStatus('Sending...');

    const formData = new FormData(event.target);
    formData.append("access_key", "64ca40f0-b246-4b94-a5bd-524376dff2ea");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await res.json();

      if (data.success) {
        setStatus('✅ Message sent successfully!');
        event.target.reset(); // clear form
      } else {
        setStatus(`❌ ${data.message}`);
      }
    } catch (error) {
      setStatus('❌ Something went wrong. Please try again.');
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to send me 
            a message about anything that you want me to work on. You can contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /><p>mahatmuku567@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /><p>+977 9762870120</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /><p>Kathmandu, Nepal</p>
            </div>
          </div>
        </div>

        {/* Same-page submission form */}
        <form onSubmit={handleSubmit} className="contact-right">
          <label>Your Name:</label>
          <input type="text" placeholder='Enter Your Name Here' name='name' required />

          <label>Your Email:</label>
          <input type="email" placeholder='Enter Your Email Here' name='email' required />

          <label>Write your message here:</label>
          <textarea name="message" rows="8" placeholder='Enter Your Message Here' required></textarea>

          <button type='submit' className='contact-submit'>Submit</button>

          {/* Status message */}
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </div>
  )
}

export default Contact

