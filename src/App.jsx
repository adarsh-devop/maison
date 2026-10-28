import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Collction from "./pages/Collction";
import About from "./components/About";
import Ourstory from "./pages/Ourstory"
import Discover from "./components/Discover ";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Layout/>}/>
          <Route path="/dis" element={<Discover/>}/>
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
