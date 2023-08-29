import netflixLogo from '../assets/img/netflix logo.svg';
import visaLogo from '../assets/img/visa logo.svg';
import adobeLogo from '../assets/img/Adobe logo.svg';
import adobeLogo1 from '../assets/img/Adobe logo(1).svg';
import adobeIllustrator from '../assets/img/adobe-illustrator logo.svg';
import group1 from '../assets/img/Group(1).svg';

export const MediaPartner = () => {
    return (
        <section className="media-partner position-relative section-dark" id="organizers" data-aos="fade-up">
            <div className="section-title">
                <h2 className="lined">Media Partner</h2>
            </div>

            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-9">
                        <div className="row gy-5 align-items-center justify-content-between">
                            <div className="col">
                                <img src={netflixLogo} alt="" />
                            </div>

                            <div className="col">
                                <img src={visaLogo} alt="" />
                            </div>

                            <div className="col">
                                <img src={adobeLogo} alt="" />
                            </div>

                            <div className="col">
                                <img src={adobeLogo1} alt="" />
                            </div>

                            <div className="col">
                                <img src={adobeIllustrator} alt="" />
                            </div>

                            <div className="col">
                                <img src={group1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}