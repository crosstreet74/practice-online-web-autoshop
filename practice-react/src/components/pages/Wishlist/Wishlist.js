import React from 'react';
import Header from '../../layout/Header';
import Bread from '../../elements/ui/Bread';
import WishBox from '../../elements/ui/WishBox';
import Footer from '../../layout/Footer';

export default function Wishlist(props) {
    return (
        <>
            <Header />
            <h3 className="text-center my-5"></h3>
            <Bread breadName="WISHLIST" />
            <WishBox />
            <Footer></Footer>
        </>
    );
}
