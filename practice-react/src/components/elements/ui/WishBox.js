import React from 'react';
import Wish from '../widgets/wish/Wish'
import WishlistOption from '../ui/WishlistOption'

export default function WishBox() {
    return (
        <div className="cart-main-area pt-90 pb-100">
        <div className="container">
            <h3 className="cart-page-title">Your wishlist items</h3>
            <div className="row">
                <div className="col-12">
                    <div className="table-content table-responsive cart-table-content">
                        <table>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product Name</th>
                                    <th>Unit Price</th>
                                    <th>Add To Cart</th>
                                    <th>action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <Wish />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <WishlistOption />
                </div>
            </div>
        </div>
    </div>
    );
}
