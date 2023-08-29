import { Col, Container, Row } from "react-bootstrap"
import githubLogo from '../assets/img/GitHub logo.svg';
import libreCreditImg from '../assets/img/libre-credit-card-mastercard logo.svg';

export const OurPartner = () => {
    return (
        <section className="our-partners position-relative section-dark" id="organizers" data-aos="fade-down">
            <div className="section-title">
                <h2 className="lined">Partners</h2>
            </div>

            <Container className="container">
                <Row className="align-items-center justify-content-center d-flex">
                    <Col md={6}>
                        <Row className="row justify-content-between">
                            <Col xs={4} sm={4} md={4}>
                                <img className="img-fluid" src={githubLogo} alt="" />
                            </Col>

                            <Col xs={4} sm={4} md={4}>
                                <img src={libreCreditImg} alt="" />
                            </Col>

                            <Col xs={4} sm={4} md={4}>
                                <img src={libreCreditImg} alt="" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}