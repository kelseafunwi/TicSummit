import { Col, Container, Row } from "react-bootstrap"

export const Ticket = () => {
    return (
        <section className="tickets text-dark" id="tickets">
            <Container data-aos="fade-up">
                <div className="section-header">
                    <h2 className="text-dark">Tickets</h2>
                </div>

                <Row className="justify-content-between mt-3">
                    <Col sm={4}>
                        <div className="ticket" data-aos="fade-up" >
                            <h3>Standard</h3>
                            <div className="price-range price-standard align-middle text-center">
                                from $ 200
                            </div>
                            <ul>
                                <li>Acquaintance of speakers with organizers, partners and each other</li>
                                <li>Presentation of partnership projects for teachers</li>
                                <li>Selection of projects by speakers of supervision</li>
                            </ul>

                            <button className="btn btn-buy">BUY</button>
                        </div>
                    </Col>

                    <Col sm={4}>
                        <div className="ticket" data-aos="fade-up" data-aos-delay="100">
                            <h3>Professional</h3>
                                <div className="price-range price-professional align-middle text-center">
                                    from $ 200
                                </div>
                                <ul>
                                    <li>Acquaintance of speakers with organizers, partners and each other</li>
                                    <li>Presentation of partnership projects for teachers</li>
                                    <li>Selection of projects by speakers of supervision</li>
                                    <li>Selection of projects by speakers of supervision</li>
                                </ul>

                                <button className="btn btn-buy">BUY</button>
                        </div>
                    </Col>

                    <Col>
                        <div className="ticket" data-aos="fade-up" data-aos-delay="200">
                            <h3>Business</h3>
                            <div className="price-range price-buisness align-middle text-center">
                                from $ 200
                            </div>
                            <ul>
                                <li>Acquaintance of speakers with organizers, partners and each other</li>
                                <li>Presentation of partnership projects for teachers</li>
                                <li>Selection of projects by speakers of supervision</li>
                                <li>Selection of projects by speakers of supervision</li>
                                <li>Acquaintance of speakers with organizers, partners and each other</li>
                            </ul>

                            <button className="btn btn-buy">BUY</button>
                        </div>
                    </Col>

                    <Col>
                        <div className="ticket" data-aos="fade-up" data-aos-delay="300">
                            <h3>VIP</h3>
                            <div className="price-range price-vip align-middle text-center">
                                from $ 200
                            </div>
                            <ul>
                                <li>Acquaintance of speakers with organizers, partners and each other</li>
                                <li>Presentation of partnership projects for teachers</li>
                                <li>Selection of projects by speakers of supervision</li>
                                <li>Selection of projects by speakers of supervision</li>
                                <li>Acquaintance of speakers with organizers, partners and each other</li>
                                <li>Acquaintance of speakers with organizers, partners and each other</li>
                            </ul>

                            <button className="btn btn-buy">BUY</button>
                        </div>
                    </Col>

                    <Col>
                        <div className="ticket" data-aos="fade-up" data-aos-delay="400">
                            <h3 className="individual">Individual</h3>
                            <ul>
                                <li>Acquaintance of speakers with organizers, partners and each other</li>
                                <li>Presentation of partnership projects for teachers</li>
                                <li>Selection of projects by speakers of supervision</li>
                                <li>Selection of projects by speakers of supervision</li>
                                <li>Acquaintance of speakers with organizers, partners and each other</li>
                                <li>Acquaintance of speakers with organizers, partners and each other</li>
                                <li>Acquaintance of speakers with organizers, partners and each other</li>
                                <button className="btn btn-outline-download">DOWNLOAD THE PRESENTATION</button>
                            </ul>

                            <button className="btn btn-buy btn-contact-manager">BUY</button> 
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )   
}