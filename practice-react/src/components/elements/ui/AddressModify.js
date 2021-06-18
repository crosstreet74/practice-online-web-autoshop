import React from 'react';

export default function AddressModify() {
    return (
        <div class="accordion-item single-my-account mb-20 card">
            <div class="panel-heading card-header" id="panelsStayOpen-headingThree">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    <h3 class="panel-title"><span>3 .</span> Modify your address book entries </h3>
                </button>
            </div>
            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse hide" aria-labelledby="panelsStayOpen-headingThree">
                <div class="card-body">
                    <div class="myaccount-info-wrapper">
                        <div class="account-info-wrapper">
                            <h4>Address Book Entries</h4>
                        </div>
                        <div class="entries-wrapper">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                    <div class="entries-info text-center">
                                        <p>John Doe</p>
                                        <p>Paul Park </p>
                                        <p>Lorem ipsum dolor set amet</p>
                                        <p>NYC</p>
                                        <p>New York</p>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                    <div class="entries-edit-delete text-center">
                                        <button class="edit">Edit</button>
                                        <button>Delete</button>
                                    </div>
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