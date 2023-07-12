import React from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
import Header from "./Components/header/Header";
import Nav from "./Components/nav/Nav";
import About from "./Components/about/About";
import Experience from "./Components/experience/Experience";
import Services from "./Components/services/Services";
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      {/* <BrowserRouter>
    <Routes>
    <Route path="/" element={<Header />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/experience" element={<Experience />}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/contact" element={<Contact />}/>
      
    </Routes>
  </BrowserRouter> */}
  
    </>
  );
}

export default App;
