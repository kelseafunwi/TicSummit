import { Col, Container, Row } from "react-bootstrap";
import rectangle304 from '../assets/img/rectangle-304.png';
import rectangle305 from '../assets/img/rectangle-305.jpeg';

export const Speaker = () => {
    return (
        <section className="speakers position-relative section-dark" id="speaker">
            <div className="speaker-chevron-up">
                <a href="#">
                    <svg width="63" height="1716" viewBox="0 0 63 1716" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="38" cy="18" r="18" fill="#1D2022"/>
                        <rect x="30.75" y="22.0815" width="1.09001" height="12.0279" rx="0.545005" transform="rotate(-133.582 30.75 22.0815)" fill="#D9D9DD"/>
                        <rect x="37.9141" y="13.7532" width="1.09001" height="12.0279" rx="0.545005" transform="rotate(-43.5815 37.9141 13.7532)" fill="#D9D9DD"/>
                      </svg>
                </a>
            </div>
            <Container data-aos="fade-up">
                <div className="section-title">
                    <h2>Speaker</h2>
                </div>
            

                <Row className="justify-content-center align-items-center">
                    <Col  md={10} lg={8}>
                        <Row className="row gx-3">
                            <Col md={4} sm={6} className="mt-4 mt-md-0">
                                <div className="speaker-info overflow-hidden">
                                    <Row className="overflow-hidden">
                                        <Col md={6} className="d-flex align-items-center justify-content-center">
                                            <img src={rectangle304} alt="" />
                                        </Col>
                                        <Col className="my-auto">
                                            <h2>John Doe</h2>
                                            <p>Chinese business
                                                magnate, investor 
                                                and philantropist</p>
                                        </Col>
                                    </Row>  
                                </div>
                            </Col>

                            <Col md={4} sm={6} className="mt-4 mt-md-0">
                                <div className="speaker-info overflow-hidden">
                                    <Row className="overflow-hidden">
                                        <Col md={6} className="d-flex align-items-center justify-content-center">
                                            <img  className="" src={rectangle304} alt="" />
                                        </Col>
                                        <Col md={6} className="my-auto">
                                            <h2>John Doe</h2>
                                            <p>Chinese business
                                                magnate, investor 
                                                and philantropist</p>
                                        </Col>
                                    </Row>  
                                </div>
                            </Col>

                            <Col  md={4} sm={12} className="mt-4 mt-md-0">
                                <div className="speaker-info overflow-hidden">
                                    <Row className="overflow-hidden">
                                        <Col md={6} className="d-flex align-items-center justify-content-center">
                                            <img  src={rectangle304} alt="" />
                                        </Col>
                                        <Col md={6} className="my-auto">
                                            <h2>John Doe</h2>
                                            <p>Chinese business
                                                magnate, investor 
                                                and philantropist</p>
                                        </Col>
                                    </Row>  
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={8}  className="mb-4 mt-5">
                        <Row className="person-row gx-5 d-flex align-items-center">
                            <Col xs={6} sm={4} lg={2}>
                                <div  className="person position-relative">
                                    <div className="image">
                                        <img src={rectangle305} className="img-fluid" alt="" />
                                    </div>
                                    <div className="person-info text-center">
                                        <span className="name">Sergey Solonin</span>
                                        <span className="position d-block">Qiwil</span>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={6} sm={4} lg={2}>
                                <div  className="person position-relative">
                                    <div className="image">
                                        <img src={rectangle305} className="img-fluid" alt="" />
                                    </div>
                                    <div className="person-info text-center">
                                        <span className="name">Sergey Solonin</span>
                                        <span className="position d-block">Qiwil</span>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={6}  sm={4} lg={2}>
                                <div  className="person position-relative">
                                    <div className="image">
                                        <img src={rectangle305} className="img-fluid" alt="" />
                                    </div>
                                    <div className="person-info text-center">
                                        <span className="name">Sergey Solonin</span>
                                        <span className="position d-block">Qiwil</span>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={6}  sm={4} lg={2}>
                                <div  className="person position-relative">
                                    <div className="image">
                                        <img src={rectangle305} className="img-fluid" alt="" />
                                    </div>
                                    <div className="person-info text-center">
                                        <span className="name">Sergey Solonin</span>
                                        <span className="position d-block">Qiwil</span>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={6}  sm={4} lg={2}>
                                <div  className="person position-relative">
                                    <div className="image">
                                        <img src={rectangle305} className="img-fluid" alt="" />
                                    </div>
                                    <div className="person-info text-center">
                                        <span className="name">Sergey Solonin</span>
                                        <span className="position d-block">Qiwil</span>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={6}  sm={4} lg={2}>
                                <div  className="person position-relative">
                                    <div className="image">
                                        <img src={rectangle305} className="img-fluid" alt="" />
                                    </div>
                                    <div className="person-info text-center">
                                        <span className="name">Sergey Solonin</span>
                                        <span className="position d-block">Qiwil</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}