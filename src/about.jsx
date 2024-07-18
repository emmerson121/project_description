import React from 'react'
import './styles/home.css';

const About = () => {
  return (
    <div>
 {/* <header>
                <div className="container">
                    <div id="branding">
                    <div><span className="highlight">Emmerson</span> Web Development</div>
                    </div>
                    
                    <nav>
                        <ul>
                  <li><a href="Index.html">Home</a></li>
          <li class="current"><a href="About Us.html">About Us</a></li>
          <li><a href="Services.html">Services</a></li>
                        </ul>
                    </nav>
                    
                </div>
            </header> */}
            
            <section id="newsletter">
                <div className="container sub">
                 <div>Subscribe To Our Newsletter</div>
                 <div>
                 <form className='forM'>
                   <input className='inputform' type="email" placeholder="Enter Email..." required />
                   <button type="submit" className="button">Subscribe</button>
                 </form>
                 </div>
                </div>
            </section>

          <div className='foot'>  
            <section id="main" className='aboutUs'>
                <div className="name">
                 <article id="main-column">
                  <h1 class="page-title">About Us</h1>
           <p className='para'>We are on a mission to accelerate the pace and consolic edficacy of the educational system at a whole level imagination... Our softwares are designed to make your work productive, accurate and timely</p>
       <p className="dark">
          We have been into developing and maintaining softwares for clients in the past few months. In a couple of months, we'll be celebrating our first anniversary as a team</p>
       </article>
       </div>
       
       <div className='dev'>
       <aside id="side">
        <div className="dark">
         <h3>What We Do</h3>
         <p>We are into development and maintenance of all kind of softwares and we are always a beep away from you.</p>
        </div>
       </aside>
       </div>
     </section>
     </div>
         
    </div>
  )
}

export default About
