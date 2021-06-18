import React from 'react';
import Header from '../../layout/Header';
import Bread from '../../elements/ui/Bread';
import Footer from '../../layout/Footer';
import ShopContainer from '../../elements/ui/ShopContainer'

export default function Shop() {
    return (
        <>
        <Header/>
        <Bread breadName="shop"/>
        <ShopContainer />
        <Footer/>
        </>
    );
}