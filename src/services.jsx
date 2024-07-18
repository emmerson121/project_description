import React, { useState, useEffect } from 'react'
import validator from 'validator';
import axios from 'axios';


const Services = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('')
  const [emailStatment, setEmailStatement] = useState('');
  const [messageStatement, setMessageStatement] = useState('');
  const [getApi, setGetApi] = useState([]);
  
  
  const handleSubmit = (e) => {
    setName(e.target.value)
    if(name === ' ' ) {
      setError('Name cannot be blank')
    }
    else if(name.length <= 5 ) {
      setError('Must not be less than 6 characters');
    }
    else{
      setError('')
    }
  
  }

 const submitForm = () => {
  if(name.length == 0) {
    setError('Name field must not be empty');
  }
  else if(email.length == 0) {
    setEmailStatement('Email field must not be empty');
}
else if(message.length == 0) {
  setMessageStatement('Message field must not be empty')
 }
 else if(name.length <= 5) {
  setError('Username must not be less than 6 characters')
 }
 else if(validator.isEmail(email) !== true) {
    setEmailStatement('Invalid email format')
 }
 else{ }
 }
 

  const handleSubmit1 = (e) => {
    setEmail(e.target.value)
    // var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(validator.isEmail(email) == true)  {
      setEmailStatement("")
    }
    else{
      setEmailStatement("Invalid email, please input the correct email")
    }
  }

  useEffect(() => {
    axios.get('http://localhost:5000').then((response) => {
    setGetApi(response.data)  
    console.log(response.data);
    }).catch((error) => {
      // console.log(error)
    })
  }, [])

  return (
    <div>
         <section id="newsletter">
                <div className="container sub">
                 <div className='subscribe'>Subscribe To Our Newsletter</div>
                 <div>
                 <form className='forM'>
                   <input type="email" placeholder="Enter Email..." required />
                   <button type="submit" className="button">Subscribe</button>
                 </form>
                 </div>
                </div>
            </section>
            
            <div>{getApi}</div>
            <section id="main">
                <div className="container back">
                <article id="main-column">
                  <div className='shift'>
                  <div class="page-title">Services</div>
                  <ul id="services">
                  <li>
                      <div className='top'>Website Design</div>
         <p>We are into design of different functions ranging from registration, product advertisement, investment platforms, etc.</p>
       <p>Pricing: $1,000 - $3,000</p>
    </li>
           <li>
              <div className='top'>Website Maintenance</div>
    <p>As stated earlier, we are into maintenance of different function, we bring out the best from your website for the satisfaction of your customers,clients.</p>
    <p>Pricing: $250 per month</p>
           </li>       
           
     <li>
         <div className='top'>Website Hosting</div>
     <p>We also offer Website hosting and our price range are pocket-friendly as we look forward to satisfying our clients and preventing much expenses</p>
     <p>Pricing: $25 per month</p>
     </li>
      </ul>
      </div>
      </article>
      
      <aside id="sidebar">
        <div className="dark nextBar" id="sidebar">
         <div className='quote'>Get A Quote</div>
         <form action="www.google.com" class="quote" id="form">
        
            <div className="details">
         <label for="Username">Name</label>
         <input type="text" placeholder="Name" id="username" onChange={handleSubmit} />
         <div className="user" id="name">{error}</div>
         </div>

         <div className="details">
             <label for="email">Email</label>
             <input type="email" placeholder="Email address" class="address" id="email" onChange={handleSubmit1} />
             <p className="user" id="email1">{emailStatment}</p>
         </div>

         <div className="details">
             <label for="message">Message</label>
             <textarea placeholder="Message" id="message" onChange={(e) => setMessage(e.target.value)}></textarea>
             <p className='user' id='mess'>{messageStatement}</p>
         </div>

         <div className="details">
            <div className="button_1" id="send" onClick={submitForm} >Send</div>
         </div>

         
         </form>
      </div>
      </aside>
      </div>
         </section>
         
      
    </div>
  )
}

export default Services

{/* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet"></link> */}
