import './styles/home.css';


function App() {
  return (
    <div>
            <section id="showcase" style={{backgroundImage: 'url(/img/main-background.jpg)'}}>
          
                <div className="container">
               <div className='afford'>Affordable Professional Web Design</div>
               <p className='par'>We design websites for global business. Whether you are a start up or an established businesss, we are ready to assist you at every stage of the software development life cycle</p>
                </div>
            </section>
            
            <section id="newsletter">
                <div className="container sub">
                 <div>Subscribe To Our Newsletter</div>
                 <form className='contForm'>
                   <input type="email" placeholder="Enter Email..." id="enter" required />
                   <button type="submit" className="button">Subscribe</button>
                 </form>
                </div>
            </section>
            
            <section id="boxes">
                <div className="container imgClass">
                    <div className="box">
                        <img src="/img/1st-bacground.jpg" />
              <div>HTML5 Markup</div>
       <p>This has to do with HTML as it is skeleton of each web development process</p>
              </div>
              
              <div className="box">
                        <img src="/img/second-background.jpg" />
              <div>CSS3 Styling</div>
       <p>This entails what CSS is all about. It gives the viewer an insight of CSS, then prepares whoever eants to lesrn for what's ahead</p>
              </div>
              
              <div className="box">
                        <img src="/img/painter.jpg" />
              <div>React development</div>
       <p>This has to do with the development process of each stage of Front-End Web Development</p>
              </div>
                </div>
            </section>
            
            

    
    </div>
  );
}

export default App;
