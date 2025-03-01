import React from "react";
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
// import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const App = () => {
 
  return (
  //   <div>
  //     <Navbar />
    
  // </div>
    <Router>
      <Navbar />
       <Home  />
       <About  />
       <Contact />
  
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>  */}
       {/* <Footer />*/}
    </Router>
  );
};

export default App;
