import React from 'react';
import Header from '../../layout/Header';
import Bread from '../../elements/ui/Bread';
import CartTable from '../../elements/widgets/cart/CartTable';
import Footer from '../../layout/Footer';

export default function Cart() {
    return (
        <div>
            <Header />
            <Bread breadName="CART" />
            <CartTable />
            <Footer />
        </div>
    );
}
