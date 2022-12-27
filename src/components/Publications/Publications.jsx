import React from 'react';
import { Button, Card, Col, Row } from "react-bootstrap";
import '../../assets/styles/publications.css'
const photos2 = require.context('../../assets/images/otro', true );

function Publications() {
  return (
    <section className="publications-section">
        <h1>Avisos</h1>
        <Row className="publications-section-home">
            <Col xs={12} md={6}>
                <img className="img-principal" src={photos2('./banner1.jpg')} alt="imagen de anuncio"/>
            </Col>
            <Col xs={12} md={6}>
                <label>Té ofrecemos</label>
                <ul>
                    <li>CENTRO DE COMPUTO</li>
                    <li>ACTIVIDADES CULTURALES Y DEPORTIVAS</li>
                    <li>INTERNET</li>
                    <li>LABORATORIO</li>
                    <li>ATENCION MEDICA GRATUITA IMSS</li>
                </ul>
            </Col>
        </Row>
        <div className="publications">
            <Card >
                <div className='imgage'>
                    <Card.Img variant="top" src={photos2('./banner1.jpg')} />
                </div>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card >
                <div className='imgage'>
                    <Card.Img variant="top" src={photos2('./banner2.jpg')} />
                </div>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card >
                <div className='imgage'>
                    <Card.Img variant="top" src={photos2('./banner3.jpg')} />
                </div>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card >
                <div className='imgage'>
                    <Card.Img variant="top" src={photos2('./banner1.jpg')} />
                </div>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card >
                <div className='imgage'>
                    <Card.Img variant="top" src={photos2('./banner3.jpg')} />
                </div>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card >
                <div className='imgage'>
                    <Card.Img variant="top" src={photos2('./banner2.jpg')} />
                </div>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    </section>
  );
}

export default Publications;