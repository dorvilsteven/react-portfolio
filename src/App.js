import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const navMenu = document.querySelector("#nav-menu");
  const navButton = document.querySelector("#menu-bars");
  const navExitButton = document.querySelector("#exit");

  // when button is clicked, show and hide nav menu in mobile mode
  navButton.addEventListener("click", showMenu);
  navExitButton.addEventListener("click", hideMenu);

  function showMenu() {
      navMenu.style.display = "flex";
      navButton.style.display = "none"
  }

  function hideMenu() {
      navMenu.style.display = "";
      navButton.style.display = "";
  }
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
