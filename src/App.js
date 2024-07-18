import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home';
import About from './about';
import NavBar from "./navBar";
import Footer from './footer';
import Services from './services';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
