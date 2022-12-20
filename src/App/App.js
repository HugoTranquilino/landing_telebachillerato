import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import { Banner } from "../components/Banner/Banner";
import { Information } from "../components/Information/Information";
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
          <Information />
          <Publications/>
        </Container>
      </main>
      <footer>
        <Container>
          <Row>
            <Col sm={8}>
              <div className='title'>
                <label>Ubicación</label>
              </div>
              <div className='item'>
                <a
                  href="https://www.google.com/maps/place/Tele+bachillerato+Cerro+Azul/@21.2010055,-97.7348249,20.29z/data=!4m18!1m12!4m11!1m3!2m2!1d-97.7346036!2d21.2010336!1m6!1m2!1s0x85d9e3daa1f79433:0xa73fdb910de6d22c!2sAmado+Nervo+55,+Campo+Comercial,+92501+Cerro+Azul,+Ver.!2m2!1d-97.7346057!2d21.2010349!3m4!1s0x85d9e3daa1f79433:0xa73fdb910de6d22c!8m2!3d21.2010349!4d-97.7346057"
                  target="_blank"
                  rel="noreferrer"
                >
                  Amado Nervo 55, Campo Comercial, 92501 Cerro Azul, Ver.
                </a>
              </div>
            </Col>
            <Col sm={4}>
              <div className='title'>
                <label>Horario</label>
              </div>
              <div className='item'>
                <p>Lunes a Viernes </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export {App};
