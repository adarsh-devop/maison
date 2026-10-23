import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import Home from "./components/Home";
import Footer from "./components/footer";
import Collction from "./pages/Collction";
import Contact from "./components/Contact";
import About from "./pages/About"
// import Collction from "./pages/Collction";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/coll" element={<Collction/>}/>
          <Route path="/con" element={<Contact/>}/>
          <Route path="/abo" element={<About/>}/>
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
