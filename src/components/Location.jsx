import locationImage from '../assets/img/rectangle-280.jpeg';

export const Location = () => {
    return (
        <section className="location position-relative section-dark" id="organizers" data-aos="zoom-in">
            <div className="section-title">
                <h2 className="lined">Location</h2>
            </div>

            <div className="location-image">
                <img className="img-fluid" src={locationImage} alt="" />
            </div>
        </section>
    )
}