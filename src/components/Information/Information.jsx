import React from "react";
import { Col, Row } from "react-bootstrap";
import "../../assets/styles/information.css"

function Information() {
    return(
        <section className="information">
            <Row>
                <Col xs={12} md={6} xl={6}>
                    <Col className="section-title">
                        <div>
                            <label>Nuestra</label>
                            <h2>Misión</h2>
                        </div>
                    </Col>
                    <Col className="info">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer 
                            took a galley of type and scrambled it to make a type specimen book. 
                        </p>
                    </Col>
                </Col>
                <Col xs={12} md={6} xl={6}>
                    <Col className="section-title">
                        <div>
                            <label>Nuestra</label>
                            <h2>Visión</h2>
                        </div>
                    </Col>
                    <Col className="info">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer 
                            took a galley of type and scrambled it to make a type specimen book. 
                        </p>
                    </Col>
                </Col>
            </Row>
        </section>
    );
}

export {Information}
