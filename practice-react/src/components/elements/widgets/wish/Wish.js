import React from 'react';

export default function Wish() {
    return (
        <>
            <tr>
                <td className="product-thumbnail"><a href="/product/2"><img className="img-fluid" src="assets/img/product/fashion/2.jpg" alt="" /></a></td>
                <td className="product-name text-center"><a href="/product/2">Lorem ipsum coat</a></td>
                <td className="product-price-cart"><span className="amount old">$18.50</span><span className="amount">$15.72</span></td>
                <td className="product-wishlist-cart"><a href="/product/2">Select option</a></td>
                <td className="product-remove"><button><i className="fa fa-times"></i></button></td>
            </tr>
            <tr>
                <td className="product-thumbnail"><a href="/product/3"><img className="img-fluid" src="assets/img/product/fashion/3.jpg" alt="" /></a></td>
                <td className="product-name text-center"><a href="/product/3">Lorem ipsum jacket</a></td>
                <td className="product-price-cart"><span className="amount old">$17.45</span><span className="amount">$10.47</span></td>
                <td className="product-wishlist-cart"><a href="/product/3">Select option</a></td>
                <td className="product-remove"><button><i className="fa fa-times"></i></button></td>
            </tr>
            <tr>
                <td className="product-thumbnail"><a href="/product/4"><img className="img-fluid" src="assets/img/product/fashion/4.jpg" alt="" /></a></td>
                <td className="product-name text-center"><a href="/product/4">Lorem ipsum fashion coat</a></td>
                <td className="product-price-cart"><span className="amount">$15.50</span></td>
                <td className="product-wishlist-cart"><a href="/product/4">Select option</a></td>
                <td className="product-remove"><button><i className="fa fa-times"></i></button></td>
            </tr>
        </>
    );
}