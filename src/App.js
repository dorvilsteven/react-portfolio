import React, { useState } from "react";
// import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Bio from "./pages/Bio/Bio";
import Portfolio from "./pages/Portfolio/Portfolio"
import Connect from "./pages/Connect/Connect";

function App() {
  const [bioSelected, setBioSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [connectSelected, setConnectSelected] = useState(false);

  return (
    <div className="App">
      <Nav 
        bioSelected={bioSelected}
        setBioSelected={setBioSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        connectSelected={connectSelected}
        setConnectSelected={setConnectSelected}
      />
      <Header />
      <div className="main">
          {bioSelected && <Bio />}
          {portfolioSelected && <Portfolio />}
          {connectSelected && <Connect />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
