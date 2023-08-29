import { Col, Container, Row } from "react-bootstrap"

export const Description = () => {
    return (
        <section className="description">
            <Container data-aos="fade-up">
                <Row className="justify-content-center align-items-center ">
                    <Col lg={6}>
                        <div className="description-text text-center text-dark">
                            <h2 data-aos="fade-up">the TiC summit.</h2>
                            <h4>DIGITAL ECONOMY & BLOCKCHAIN TECHNOLOGY</h4>
                            <p data-aos="fade-right"  data-aos-delay="200">THE TiC SUMMIT 2024 will bring together leading businessmen from around the worls.
                                Opinion leaders and successful entrepreneurs will share knowledge about hoe they see the
                                future of global transformation, tell where successful companies are investing and hoe the
                                blockchain technology can be a breakthrough in the developement of society. Hear practical
                                “hoe-to” case-studies from global companies already leveraging distributed ledger technology
                                Government authorities will talk about the role of the state and how it will heavily invest in the
                                “digital economy” and the creation of favorable conditions for businesses </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}