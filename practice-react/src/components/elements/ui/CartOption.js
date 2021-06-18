import React from 'react';

export default function CartOption(props) {
    return (
        <div class="row">
            <div class="col-lg-4 col-md-6">
                <div class="cart-tax">
                    <div class="title-wrap">
                        <h4 class="cart-bottom-title section-bg-gray">Estimate Shipping And Tax</h4>
                    </div>
                    <div class="tax-wrapper">
                        <p>
                            Enter your destination to get a shipping estimate.
                        </p>
                        <div class="tax-select-wrapper">
                            <div class="tax-select">
                                <label>* Country</label>
                                <select class="email s-email s-wid">
                                    <option>Bangladesh</option>
                                    <option>Albania</option>
                                    <option>Åland Islands</option>
                                    <option>Afghanistan</option>
                                    <option>Belgium</option>
                                </select>
                            </div>
                            <div class="tax-select">
                                <label>* Region / State</label>
                                <select class="email s-email s-wid">
                                    <option>Bangladesh</option>
                                    <option>Albania</option>
                                    <option>Åland Islands</option>
                                    <option>Afghanistan</option>
                                    <option>Belgium</option>
                                </select>
                            </div>
                            <div class="tax-select">
                                <label>* Zip/Postal Code</label>
                                <input type="text" />
                            </div>
                            <button class="cart-btn-2" type="submit">Get A Quote</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="discount-code-wrapper">
                    <div class="title-wrap">
                        <h4 class="cart-bottom-title section-bg-gray">Use Coupon Code</h4>
                    </div>
                    <div class="discount-code">
                        <p>Enter your coupon code if you have one.</p>
                        <form>
                            <input type="text" required="" name="name" />
                            <button class="cart-btn-2" type="submit">Apply Coupon</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-12">
                <div class="grand-totall">
                    <div class="title-wrap">
                        <h4 class="cart-bottom-title section-bg-gary-cart">Cart Total</h4>
                    </div>
                    <h5>Total products <span>$73.13</span></h5>
                    <h4 class="grand-totall-title">Grand Total <span>$73.13</span></h4>
                    <a href="/checkout">Proceed to Checkout</a>
                </div>
            </div>
        </div>
    );
}