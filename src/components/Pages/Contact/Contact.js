import React from 'react';

const Contact = () => {
    return (
        <div>
            <hr></hr>
            <h2>Do you need to know anything?</h2>
            <br />
            <br />
            <h5>Contact Us</h5>
            <form className="row g-3 needs-validation mx-5 mb-5" novalidate>
                <div className="col-md-4">
                    <label for="validationCustom01" className="form-label">First name</label>
                    <input type="text" className="form-control" id="validationCustom01" required />
                </div>
                <div className="col-md-4">
                    <label for="validationCustom02" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" required />
                </div>
                <div className="col-md-4">
                    <label for="validationCustomUsername" className="form-label">Your email</label>
                    <div className="input-group has-validation">
                        {/* <span class="input-group-text" id="inputGroupPrepend"></span> */}
                        <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                    </div>
                </div>
                <div className="col-md-6">
                    <label for="validationCustom03" className="form-label text-center">Your address</label>
                    <input type="text" className="form-control" id="validationCustom03" required />
                </div>
                <div className="col-md-6">
                    <label for="validationCustom03" className="form-label text-center">Phone number</label>
                    <input type="text" className="form-control" id="validationCustom03" required />
                </div>
                <div className="col-12 button">
                    <button className="btn btn button px-3" type="">Contact Now</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;