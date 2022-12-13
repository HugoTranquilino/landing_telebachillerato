import React from "react";
import Container from 'react-bootstrap/Container';
import { Banner } from "../components/Banner/Banner";
import { Menu } from "../components/menu/Menu";
import Publications from "../components/Publications/Publications";
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
        <Container>
          <Publications/>
        </Container>
      </main>
      <footer></footer>
    </div>
  );
}

export {App};
