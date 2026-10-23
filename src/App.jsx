import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Collction from "./pages/Collction";
import About from "./components/About";
import Ourstory from "./pages/Ourstory"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/coll" element={<Collction/>}/>
          <Route path="/con" element={<About/>}/>
          <Route path="/abo" element={<Ourstory/>}/>
      </Routes>
      <Footer/>
    </div>
  )

};

export default App;





























//  <Navbar/>
//       <Home/>
//       <Contact/>
//       <Collction/>
//       <Footer/>
