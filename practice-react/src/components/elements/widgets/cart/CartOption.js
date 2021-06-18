import React from 'react';
import { Link } from 'react-router-dom';

export default function CartOption({ clearCart }) {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="cart-shiping-update-wrapper">
                    <div className="cart-shiping-update">
                        <Link to="/">Continue Shopping</Link>
                    </div>
                    <div className="cart-clear">
                        <button onClick={() => { clearCart() }}>Clear Shopping Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}