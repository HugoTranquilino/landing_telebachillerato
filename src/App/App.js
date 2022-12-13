import React from "react";
import { Banner } from "../components/Banner/Banner";
import { Menu } from "../components/menu/Menu";
// import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      <Menu/>
      <main>
        <Banner/>
      </main>
      <footer></footer>
    </div>
  );
}

export {App};
