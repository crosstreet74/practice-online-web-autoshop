import React from 'react';
import Header from '../../layout/Header';
import Bread from '../../elements/ui/Bread';
import CartBox from '../../elements/widgets/cart/CartBox';
import Footer from '../../layout/Footer';

export default function Cart() {
    return (
        <div>
            <Header />
            <Bread breadName="CART" />
            <CartBox />
            <Footer />
        </div>
    );
}
