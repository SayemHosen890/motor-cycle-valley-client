import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="text-center text-lg-start bg-light text-muted">
                <section
                    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >
                    {/* <!-- Left --> */}
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    {/* <!-- Left --> */}

                    {/* <!-- Right --> */}
                    <div>
                        <a href="www.facebook.com" className="me-4 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="www.twitter.com" className="me-4 text-reset">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="www.google.com" className="me-4 text-reset">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="www.instagram.com" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                    {/* <!-- Right --> */}
                </section>
                {/* <!-- Section: Social media --> */}

                {/* <!-- Section: Links  --> */}
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        {/* <!-- Grid row --> */}
                        <div className="row mt-3">
                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* <!-- Content --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Bike Store
                                </h6>
                                <p>
                                    Top Bike Brands in India · Honda BMW · Indian Hero Electric · TVS Hero Moto Corp · Royal Enfield Yamaha · Mahindra Bajaj
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Our Sells Men
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Elina Kartus</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Antenio Marus</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Facebook</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Instagram</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Twitter</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><i className="fas fa-home me-3"></i> Mirpur-10,Dhaka,Bangladesh</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    bikeStore@gmail.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 01 234 567 56</p>
                                <p><i className="fas fa-print me-3"></i> + 01 234 567 60</p>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!-- Grid row --> */}
                    </div>
                </section>
                {/* <!-- Section: Links  --> */}

                {/* <!-- Copyright --> */}
                <div className="text-center p-4">
                    © 2021 Copyright:
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> bikeStore@gmail.com</a>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </div>
    );
};

export default Footer;