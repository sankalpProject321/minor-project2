import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Success from './Pages/Success/Success';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Qualities from './components/Qualities';
import Menu from './components/Menu';
import WhoAreWe from './components/WhoAreWe';
import Team from './components/Team';
import Reservation from './components/Reservation';
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />

          {/* Individual Section Routes */}
          <Route path="/hero" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/qualities" element={<Qualities />} /> */}
          <Route path="/menu" element={<Menu />} />
          {/* <Route path="/whoarewe" element={<WhoAreWe />} /> */}
          <Route path="/team" element={<Team />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
};

export default App;
