import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Project from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Shared/Footer';
import './components/Shared/Fontawesome';
import ContactPage from './components/Contact';

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/projects' element={<Project />} />
          <Route exact path='/experience' element={<Experience />} />
          <Route exact path='/contact' element={<ContactPage/>} />

        </Routes>
        <Footer/>
      </>
    </Router>
  );
}

export default App;
