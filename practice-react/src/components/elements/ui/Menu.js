import React from 'react';

export default function Menu() {
    return (
        <div class="col-xl-8 col-lg-8 d-none d-lg-block">
            <div class=" main-menu  ">
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/shop-grid-standard"> Shop<i class="fa fa-angle-down"></i></a>
                            <ul class="mega-menu">
                                <li>
                                    <ul>
                                        <li class="mega-menu-title"><a href="/shop-grid-standard">Shop
                                            Layout</a></li>
                                        <li><a href="/shop-grid-standard">Shop Grid Standard</a></li>
                                        <li><a href="/shop-grid-filter">Shop Grid Filter</a></li>
                                        <li><a href="/shop-grid-two-column">Shop Grid Two Column</a></li>
                                        <li><a href="/shop-grid-no-sidebar">Shop Grid No Sidebar</a></li>
                                        <li><a href="/shop-grid-full-width">Shop Grid Full Width</a></li>
                                        <li><a href="/shop-grid-right-sidebar">Shop Grid Right Sidebar</a>
                                        </li>
                                        <li><a href="/shop-list-standard">Shop List Standard</a></li>
                                        <li><a href="/shop-list-full-width">Shop List Full Width</a></li>
                                        <li><a href="/shop-list-two-column">Shop List Two Column</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li class="mega-menu-title"><a href="/product/1">Product Details</a>
                                        </li>
                                        <li><a href="/product/1">Product Tab Bottom</a></li>
                                        <li><a href="/product-tab-left/1">Product Tab Left</a></li>
                                        <li><a href="/product-tab-right/1">Product Tab Right</a></li>
                                        <li><a href="/product-sticky/1">Product Sticky</a></li>
                                        <li><a href="/product-slider/1">Product Slider</a></li>
                                        <li><a href="/product-fixed-image/1">Product Fixed Image</a></li>
                                        <li><a href="/product/8">Product Simple</a></li>
                                        <li><a href="/product/1">Product Variation</a></li>
                                        <li><a href="/product/9">Product Affiliate</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li class="mega-menu-img"><a href="/shop-grid-standard"><img
                                            src="/assets/img/banner/banner-12.png" alt=""></img></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="/shop-grid-standard">Collection</a></li>
                        <li>
                            <a href="/">Pages<i class="fa fa-angle-down"></i></a>
                            <ul class="submenu">
                                <li><a href="/cart">Cart</a></li>
                                <li><a href="/checkout">Checkout</a></li>
                                <li><a href="/wishlist">Wishlist</a></li>
                                <li><a href="/compare">Compare</a></li>
                                <li><a href="/my-account">My Account</a></li>
                                <li><a href="/login-register">Login / Register</a></li>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                                <li><a href="/not-found">404 Page</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/blog-standard">Blog<i class="fa fa-angle-down"></i></a>
                            <ul class="submenu">
                                <li><a href="/blog-standard">Blog Standard</a></li>
                                <li><a href="/blog-no-sidebar">Blog No Sidebar</a></li>
                                <li><a href="/blog-right-sidebar">Blog Right Sidebar</a></li>
                                <li><a href="/blog-details-standard">Blog Details Standard</a></li>
                            </ul>
                        </li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}