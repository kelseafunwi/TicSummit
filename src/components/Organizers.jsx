import { Container, Row } from "react-bootstrap"

export const Organizers = () => {
    return (
        <section className="organizers position-relative section-dark" id="organizers">
            <div className="section-title">
                <h2 className="lined">Organizers</h2>
            </div>

            <Container>
                <Row className="align-items-center justify-content-center">
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <div className="item d-flex align-items-center justify-content-center">
                            Crocus Group
                        </div>

                        <div className="item ms-4 d-flex align-items-center justify-content-center">
                            Crocus Group
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}