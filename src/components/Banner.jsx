import { Col, Container, Row } from "react-bootstrap";
import Aos from "aos";
import { useEffect } from "react";



export const Banner = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <section id="hero" className="hero  d-flex justify-content-center">
            <Container>
                <Row className="d-flex flex-column h-100 justify-content-between align-items-stretch">
                    <Row>

                    </Row>

                    <Row className="justify-content-center">
                        <Row className="hero-txt d-flex">
                            <Col sm={8} lg={8} className="d-flex align-items-center">
                                <div className="intro-complete " >
                                    <h2>DIGITAL ECONOMY & <br />
                                        BLOCKCHAIN TECHNOLOGY</h2>
                                    
                                    <p>THE TiC SUMMIT: Digital Economy & Blockchain
                                        Technology will be 2019’s most exciting industry gathering
                                        during Global Economy Transformation and upcoming
                                        Fourth Industrial Revolution</p>
        
                                    <a href="#tickets" className="btn btn-buy-a-ticket">buy a ticket</a>
                                </div>
                            </Col>

                            <Col sm={4} className="text-end position-relative">
                                <Col className="date-join">
                                    <h2>the TiC summit.</h2>
                                    <h5>18-19 MAR 2024</h5>
                                    <p>Crocus City Hall Yaounde, Cameroon</p>

                                    <a href="#become-a-partner" className="btn btn-outline-light become">become a partner</a>
                                </Col>
                            </Col>
                        </Row>
                    </Row>

                    <Row>
                        <Row className="mt-4 mt-md-0 justify-content-center">
                            <Col sm={12} lg={8} >
                                <Row className="d-flex gy-2 justify-content-between">
                                    <Col xs={4} sm={3} xl={2} className="item">
                                        <h5 className="name"><span>Sergey</span> Blazev</h5>
                                        <h4 className="position">President’s Advisor</h4>
                                    </Col>
        
                                    <Col xs={4} sm={3}  xl={2} className="item">
                                        <h5 className="name">John Doe</h5>
                                        <h4 className="position">Qiwi</h4>
                                    </Col>
        
                                    <Col xs={4} sm={3} xl={2} className="item">
                                        <h5 className="name">Mark Terstegen</h5>
                                        <h4 className="position">Genesis Mining</h4>
                                    </Col>
        
                                    <Col xs={4} sm={3} xl={2} className="item">
                                        <h5 className="name">Thomas Edison</h5>
                                        <h4 className="position">Etherum</h4>
                                    </Col>
        
                                    <Col xs={4} sm={3} xl={2} className="item">
                                        <h5 className="name">Sergey <span>Blazev</span></h5>
                                        <h4 className="position">Advisor</h4>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Row>
                </Row>
            </Container>
        </section>
    );
}