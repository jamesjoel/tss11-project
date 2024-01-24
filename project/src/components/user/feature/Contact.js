import React from 'react';

const Contact = () => {
  return (
    <>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Contact Us</h5>
                    <h1 className="mb-5">Contact For Any Query</h1>
                </div>
                <div className="row g-4">
                    <div className="col-12">
                        <div className="row gy-4">
                            <div className="col-md-4">
                                <h5 className="section-title ff-secondary fw-normal text-start text-primary">Booking</h5>
                                <p><i className="fa fa-envelope-open text-primary me-2"></i>book@example.com</p>
                            </div>
                            <div className="col-md-4">
                                <h5 className="section-title ff-secondary fw-normal text-start text-primary">General</h5>
                                <p><i className="fa fa-envelope-open text-primary me-2"></i>info@example.com</p>
                            </div>
                            <div className="col-md-4">
                                <h5 className="section-title ff-secondary fw-normal text-start text-primary">Technical</h5>
                                <p><i className="fa fa-envelope-open text-primary me-2"></i>tech@example.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                        </div>
                    <div className="col-md-6">
                        <div className="wow fadeInUp" data-wow-delay="0.2s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: "150px"}}></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact;