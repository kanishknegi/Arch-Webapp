import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
// import styled from 'styled-components';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        {/* <Route path="/healthcare" element={<Healthcare />}></Route>
        <Route path="/enterprise" element={<Enterprise />}></Route>
        <Route path="/thinking" element={<Thinking />}></Route> */}
        <Route></Route>
      </Routes>
      <Footer />
    </>
  );
}
export default App;
