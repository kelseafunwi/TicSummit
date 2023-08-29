import { Col, Container, Row } from 'react-bootstrap';
import programRight from '../assets/img/program-right.png';

export const Program = () => {
    return (
        <section className="program section-dark" id="program">
            <Container data-aos="fade-up">
                <div className="section-title">
                    <h2>Program</h2>
                </div>

                <Row className="align-items-center  justify-content-center">
                    <Col lg={9} md={10}>
                        <Row className="gy-4 gx-5 align-items-center justify-content-between">
                            <Col md={6} className="order-2 order-md-1">
                                <h4 className="date">May 18</h4>
                                <p className="description">CROCUS CITY HALL: UMMIT DAY</p>
                                <ul>
                                    <li>Acquaintance of speakers with organizers, partners and each other</li>
                                    <li>Presentation of partnership projects for speakers</li>
                                    <li>Selection of projects by speakers foe supervision</li>
                                </ul>
                            </Col>
                            <Col md={6} className="order-1 order-md-2">
                                <div className="position-relative">
                                    <div className="slides-1-1 swiper">
                                        <div className="swiper-wrapper">
    
                                            <div className="swiper-slide">
                                                <img data-aos="fade-left" className="img-fluid" src={programRight} alt="" />
                                            </div>
                                        </div>
                                        <div className="swiper-pagination"></div>
                                    </div>
                                    <div className="swiper-button-prev prev1"></div>
                                    <div className="swiper-button-next next1"></div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="mt-5 align-items-center  justify-content-center">
                    <Col lg={10} md={10}e>
                        <Row className="gy-4 gx-5 align-items-center justify-content-between">
                            <Col md={6} data-aos="zoom-in" data-aos-delay="200">
                                <div className="position-relative">
                                    <div className="slides-1-2 swiper position-relative">
                                        <div className="swiper-wrapper position-relative">
                                            <div className="swiper-slide">
                                                <img className="img-fluid" src={programRight} alt="" />
                                            </div>
                                        </div>
                                        <div className="swiper-pagination"></div>
                                    </div>
                                    <div className="swiper-button-prev prev2"></div>
                                    <div className="swiper-button-next next2"></div>
                                </div>
                            </Col>
                            <Col md={6} data-aos="fade-left" data-aos-delay="300">
                                <h4 className="date">May 18</h4>
                                <p className="description">AGALAROV ESTATE: NO TIE DINNER</p>
                                <ul>
                                    <li>Speakers Speeches</li>
                                    <li>Panel discussion on digital economics, developement of  Blockchain technology, Legalization, application of  technology in real economy, manufacturing and services, Problems, Solutions and evaluation decisions 
                                    </li>
                                    <li>Interaction with audience, where they set a task for speakers to apply Blockchain in various areas, and speakers have to come uo with several options of using it</li>
                                    <li>Opposition duels. The bout of speakers, one of which protects Blockchain Legalization and its widespread use, and second one, who has a radically opposite position</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}