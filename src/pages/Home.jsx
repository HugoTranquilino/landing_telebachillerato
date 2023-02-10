import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import { Banner } from "../components/Banner/Banner";
import { Information } from "../components/Information/Information";
import { Menu } from "../components/menu/Menu";
import Publications from "../components/Publications/Publications";
// import logo from './logo.svg';

function Home() {
    const location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929.9450512926742!2d-97.73419218816817!3d21.200888613150937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d9e3daa1f79433%3A0xa73fdb910de6d22c!2sTele%20bachillerato%20Cerro%20Azul!5e0!3m2!1ses!2smx!4v1671551314574!5m2!1ses!2smx"
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
                <Col sm={6}>
                    <div className="map">
                        <div dangerouslySetInnerHTML={{ __html: `<iframe src='${location}' width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />`}} />
                    </div>
                </Col>
                <Col sm={6}>
                    <div className='item'>
                        <span className="item-b">Conoce nuestras instalaciones</span>
                        <p>Nos ubicamos en <span className="item-b">
                                <a
                                    href="https://www.google.com/maps/place/Tele+bachillerato+Cerro+Azul/@21.2010055,-97.7348249,20.29z/data=!4m18!1m12!4m11!1m3!2m2!1d-97.7346036!2d21.2010336!1m6!1m2!1s0x85d9e3daa1f79433:0xa73fdb910de6d22c!2sAmado+Nervo+55,+Campo+Comercial,+92501+Cerro+Azul,+Ver.!2m2!1d-97.7346057!2d21.2010349!3m4!1s0x85d9e3daa1f79433:0xa73fdb910de6d22c!8m2!3d21.2010349!4d-97.7346057"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Amado Nervo 55, Campo Comercial, 92501 Cerro Azul, Ver.
                                </a>
                            </span>
                        </p>
                        <p><span className="item-b">Teléfono: </span> 78523065</p>
                        <p><span className="item-b">Correo electrónico: </span> 30ETH0027C@mediasuperior.msev.gob.mx</p> 
                        
                    </div>
                </Col>
            </Row>
            </Container>
        </footer>
        </div>
    );
}

export { Home }
