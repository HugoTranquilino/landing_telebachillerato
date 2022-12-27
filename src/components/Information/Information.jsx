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
                            Formar alumnos críticos y propositivos,
                            capaces de enfrentar con eficiencia, orgullo
                            y dignidad los retos y demandas de la sociedad,
                            a través de la implementación de un modelo
                            pedagógico propio, que fomente el compromiso
                            de los actores educativos con el entorno
                            sociocultural. 
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
                            Es una institución consolidada en su estructura,
                            que ofrece un servicio de calidad, donde los
                            actores educativos están comprometidos con su
                            función en aras de una formación integral basada
                            en valores, en el desarrollo de competencias
                            y el uso de las tecnologías modernas de la 
                            información y comunicación (TIC´S).
                        </p>
                    </Col>
                </Col>
            </Row>
        </section>
    );
}

export {Information}
