import React from 'react';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../assets/styles/publications.css'
const photos2 = require.context('../../assets/images/otro', true );

function Publications() {
  return (
    <section className='publications-section'>
        <h1>Avisos</h1>
        <Row>
            <Col xs={6} md={2} lg={3} className='publications-section-item'>
                <div className='section-info'>
                    <div className='section-info_img'>
                        <img src={photos2('./banner1.jpg')} alt='banner'/>
                    </div>
                    <div className='section-info_description'>
                        <label>Lorem ipsum dolor sit amet</label>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit amet cursus.</p>
                    </div>
                </div>
            </Col>
            <Col xs={6} md={2} lg={3} className='publications-section-item'>
                <div className='section-info'>
                    <div className='section-info_img'>
                        <img src={photos2('./banner2.jpg')} alt='banner'/>
                    </div>
                    <div className='section-info_description'>
                        <label>Lorem ipsum dolor sit amet</label>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit amet cursus.</p>
                    </div>
                </div>
            </Col>
            <Col xs={6} md={2} lg={3} className='publications-section-item'>
                <div className='section-info'>
                    <div className='section-info_img'>
                        <img src={photos2('./banner3.jpg')} alt='banner'/>
                    </div>
                    <div className='section-info_description'>
                        <label>Lorem ipsum dolor sit amet</label>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit amet cursus.</p>
                    </div>
                </div>
            </Col>
            <Col xs={6} md={2} lg={3} className='publications-section-item'>
                <div className='section-info'>
                    <div className='section-info_img'>
                        <img src={photos2('./banner4.jpg')} alt='banner'/>
                    </div>
                    <div className='section-info_description'>
                        <label>Lorem ipsum dolor sit amet</label>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit amet cursus.</p>
                    </div>
                </div>
            </Col>
        </Row>
    </section>
  );
}

export default Publications;