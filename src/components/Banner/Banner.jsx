import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const photos = require.context('../../assets/images/photos', true );

function Banner() {
  return (
    <Carousel>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={photos('./economico-administrativo.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Economico - Administrativo</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={photos('./fisico-matematico.jpg')}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Fisico - Matematico</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photos('./humanidades-sociales.jpg')}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Humanidades - Sociales</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photos('./quimico-biologico.jpg')}
          alt="Four slide"
        />
        <Carousel.Caption>
          <h3>Quimico - Biologico</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export { Banner };