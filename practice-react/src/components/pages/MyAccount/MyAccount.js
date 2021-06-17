import React from 'react';
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import Bread from '../../elements/ui/Bread'
import AccountContainer from '../../elements/ui/AccountContainer' 

export default function MyAccount() {
    return (
        <>
            <Header />
            <Bread breadName="my account"/>
            <AccountContainer />
            <Footer />
        </>
    );
}