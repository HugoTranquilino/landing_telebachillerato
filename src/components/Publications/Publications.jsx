import React from 'react';
import { Card, Col, Row } from "react-bootstrap";
import '../../assets/styles/publications.css'
// const photos2 = require.context('../../assets/images/otro', true );
const publications_photos = require.context('../../assets/images/photos', true );

function Publications() {
  return (
    <section className="publications-section">
        <div className='title-section'>
            <h1>Avisos</h1>
        </div>
        <Row className="publications-section-home">
            <Col xs={12} md={6} className="section-image">
                <img className="img-principal" src={publications_photos('./student.jpg')} alt="imagen de anuncio"/>
            </Col>
            <Col xs={12} md={6}>
                <h1>"Superación academia al alcance de tus manos"</h1>
                <div className="sub_message">
                    <p>Inscribiéndote el 18 y 19 de julio en las instalaciones del mismo plantel.</p>
                </div>
                <p className='fot_message'>Preinscripciones abiertas</p>
            </Col>
        </Row>
        <div className='title-section'>
            <h1>Conoce Nuestra <span className='title-red'>Oferta Educativa</span></h1>
        </div>
        <div className="publications">
            <Card >
                <div className='imgage'>
                    <Card.Img variant="top" src={publications_photos('./alumnos_01.jpg')} />
                </div>
                <Card.Body>
                    <Card.Title>Químico - Biológico</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card >
                <div className='imgage'>
                    <Card.Img variant="top" src={publications_photos('./alumnos_02.jpg')} />
                </div>
                <Card.Body>
                    <Card.Title>Físico - Matemático</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card >
                <div className='imgage'>
                    <Card.Img variant="top" src={publications_photos('./alumnos_03.jpg')} />
                </div>
                <Card.Body>
                    <Card.Title>Económico - Administrativo</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    </section>
  );
}

export default Publications;