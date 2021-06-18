import React from 'react';

export default function WishlistOption() {
    return (
        <>
            <div className="cart-shiping-update-wrapper">
                <div className="cart-shiping-update">
                    <a href="/shop-grid-standard">Continue Shopping</a>
                </div>
                <div className="cart-clear"><button>Clear Wishlist</button></div>
            </div>
        </>
    );
}