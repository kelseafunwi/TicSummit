export const BecomePartner = () => {
    return (
        <section id="become-a-partner" className="section-dark m-0 p-0 partner section-dark text-light">
            <div className="d-flex  full-container">
               <div className="pic-left pic">
               </div>
               
               <div className="container-fluid d-flex flex-fill body">
                    <div className="row d-flex align-items-center justify-content-between gy-5">
                        <div className="col-12 col-md-5 text-part">
                             <h2>Become a Partner</h2>
                            <p>THE WAY SUMMIT: Digital Economy & Blockchain Technology will be
                                2024’s most exciting industry gathering during Global Economy
                                Transformation and isupcoming
                            </p>
                            <ul>
                                <li><span><img src="assets/images/tick.svg" alt="" /></span>Speakers speeches</li>
                                <li><span><img src="assets/images/tick.svg" alt="" /></span>Panel discussion on digital economics, developement of Blockchain technology,
                                    Legalization, application of technology in real economy, manufacturing and services.
                                    Problems, solutions and evaluation decisions</li>
                                <li><span><img src="assets/images/tick.svg" alt="" /></span>Interaction with audience, where they set a task for speakers to apply Blockchain in
                                        various areas, and speakers have to come up with several options of</li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-5 form-section bg-light">
                            <div className="form">
                                <h2>Application</h2>

                                <div className="input-group">
                                    <input type="text"  className="form-control border-0 input" placeholder="Name" name="name" />
                                </div>

                                <div className="input-group mt-2">
                                    <input type="text"  className="form-control border-0 input" placeholder="Email" name="email"  />
                                </div>

                                <div className="input-group mt-2">
                                    <input type="text"  className="form-control border-0 input" placeholder="Phone" name="phone" />
                                </div>

                                <div className="button mt-2 ms-2">
                                    <button>submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>

               <div className="pic-right pic">
                </div>
            </div>
        </section>
    )
}