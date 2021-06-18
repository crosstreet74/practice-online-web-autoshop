import React from 'react';
import Header from '../../layout/Header';
import Bread from '../../elements/ui/Bread';
import WishTable from '../../elements/ui/WishTable';
import Footer from '../../layout/Footer';

export default function Wishlist() {
    return (
        <>
            <Header />
            <h3 className="text-center my-5"></h3>
            <Bread breadName="WISHLIST" />
            <WishTable />
            <Footer></Footer>
        </>
    );
}
