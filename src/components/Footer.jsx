import { Col, Container, Row } from "react-bootstrap";
import { Logo } from "./Logo";
import { Twitter } from "react-bootstrap-icons";
import { Facebook } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";
import { Google } from "react-bootstrap-icons";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center pt-3 justify-content-center">
                    <Col xs={12} md={10}>
                        <Row className="justify-content-between">
                            <Col xs={4} md={3}>
                                <Logo />
                            </Col>

                            <Col xs={6} md={3} id="contacts" className="contact">
                                <h2>CONTACTS</h2>

                                <p>info@TiCsummit.org</p>
                                <p>+XXX XXX XX XX</p>
                            </Col>

                            <Col xs={4} md={3} className="menu">
                                <h2>Menu</h2>

                                <ul>
                                    <li><a href="#main">Main</a></li>
                                    <li><a href="#program">Program</a></li>
                                    <li><a href="#partner">Partner</a></li>
                                    <li><a href="#tickets">Tickets</a></li>
                                    <li><a href="#become-a-parner">Become a partner</a></li>
                                </ul>
                            </Col>

                            <Col xs={12} md={3} className="mt-5 mt-md-0 text-end icons">
                                <a href="#"><span><Twitter /></span></a>
                                <a href="#"><span><Linkedin /></span></a>
                                <a href="#"><span><Facebook /></span></a>
                                <a href="#"><span><Google /></span></a>
                                <a href="#"><span><Instagram /></span></a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}