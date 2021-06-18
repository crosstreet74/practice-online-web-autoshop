import React from 'react';

export default function AccountEdit() {
    return (
        <div class="accordion-item single-my-account mb-20 card">
            <div class="panel-heading card-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    <h3 class="panel-title"><span>1 .</span> Edit your account information </h3>
                </button>
            </div>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div class="card-body">
                    <div class="myaccount-info-wrapper">
                        <div class="account-info-wrapper">
                            <h4>My Account Information</h4>
                            <h5>Your Personal Details</h5>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="billing-info">
                                    <label>First Name</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="billing-info">
                                    <label>Last Name</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12">
                                <div class="billing-info">
                                    <label>Email Address</label>
                                    <input type="email" />
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="billing-info">
                                    <label>Telephone</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="billing-info">
                                    <label>Fax</label>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                        <div class="billing-back-btn">
                            <div class="billing-btn">
                                <button type="submit">Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}