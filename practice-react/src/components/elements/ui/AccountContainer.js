import React from 'react';
import AccountEdit from './AccountEdit'
import PswdChange from './PswdChange'
import AddressModify from './AddressModify'

export default function AccountContainer() {
    return (
        <div class="myaccount-area pb-80 pt-100">
            <div class="container">
                <div class="row">
                    <div class="ml-auto mr-auto col-lg-9">
                        <div class="myaccount-wrapper">
                            <div class="accordion" id="accordionPanelsStayOpenExample">
                                <AccountEdit />
                                <PswdChange />
                                <AddressModify />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
