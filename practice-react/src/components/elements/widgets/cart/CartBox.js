import React from 'react';
import CartOption from "../../ui/CartOption"
import CartItem from "../../widgets/cart/CartItem"

export default function CartBox() {
    return (
        <div class="cart-main-area pt-90 pb-100">
            <div class="container">
                <h3 class="cart-page-title">Your cart items</h3>
                <div class="row">
                    <div class="col-12">
                        <div class="table-content table-responsive cart-table-content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product Name</th>
                                        <th>Unit Price</th>
                                        <th>Qty</th>
                                        <th>Subtotal</th>
                                        <th>action</th>
                                    </tr>
                                </thead>
                                <CartItem></CartItem>
                            </table>
                        </div>
                    </div>
                </div>
                <CartOption></CartOption>
            </div>
        </div>
    );
}
