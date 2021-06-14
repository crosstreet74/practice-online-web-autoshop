import { Fragment } from "react"
import Nav from "../elements/ui/Nav"

export default function Header() {
    return (
        <Fragment>
            <header class="header-area clearfix">
                <Nav></Nav>
                <div class="offcanvas-mobile-menu" id="offcanvas-mobile-menu">
                    <button class="offcanvas-menu-close" id="mobile-menu-close-trigger"><i class="pe-7s-close"></i></button>
                    <div class="offcanvas-wrapper">
                        <div class="offcanvas-inner-content">
                            <div class="offcanvas-mobile-search-area">
                                <form action="#">
                                    <input type="search" placeholder="Search ..."></input>
                                    <button type="submit"><i class="fa fa-search"></i></button>
                                </form>
                            </div>
                            <nav class="offcanvas-navigation" id="offcanvas-navigation">
                                <ul>
                                    <li class="menu-item-has-children">
                                        <a href="/">Home</a>
                                        <span class="menu-expand"><i></i></span>
                                        <ul class="sub-menu">
                                            <li class="menu-item-has-children">
                                                <a href="/">Home Group One</a>
                                                <span class="menu-expand"><i></i></span>
                                                <ul class="sub-menu">
                                                    <li><a href="/home-fashion">Home Fashion</a></li>
                                                    <li><a href="/home-fashion-two">Home Fashion Two</a></li>
                                                    <li><a href="/home-fashion-three">Home Fashion Three</a></li>
                                                    <li><a href="/home-fashion-four">Home Fashion Four</a></li>
                                                    <li><a href="/home-fashion-five">Home Fashion Five</a></li>
                                                    <li><a href="/home-fashion-six">Home Fashion Six</a></li>
                                                    <li><a href="/home-fashion-seven">Home Fashion Seven</a></li>
                                                    <li><a href="/home-fashion-eight">Home Fashion Eight</a></li>
                                                    <li><a href="/home-kids-fashion">Home Kids Fashion</a></li>
                                                    <li><a href="/home-cosmetics">Home Cosmetics</a></li>
                                                    <li><a href="/home-furniture">Home Furniture</a></li>
                                                    <li><a href="/home-furniture-two">Home Furniture Two</a></li>
                                                    <li><a href="/home-furniture-three">Home Furniture Three</a></li>
                                                    <li><a href="/home-furniture-four">Home Furniture Four</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <a href="/">Home Group Two</a>
                                                <span class="menu-expand"><i></i></span>
                                                <ul class="sub-menu">
                                                    <li><a href="/home-furniture-five">Home Furniture Five</a></li>
                                                    <li><a href="/home-furniture-six">Home Furniture Six</a></li>
                                                    <li><a href="/home-furniture-seven">Home Furniture Seven</a></li>
                                                    <li><a href="/home-electronics">Home Electronics</a></li>
                                                    <li><a href="/home-electronics-two">Home Electronics Two</a></li>
                                                    <li><a href="/home-electronics-three">Home Electronics Three</a></li>
                                                    <li><a href="/home-book-store">Home Book Store</a></li>
                                                    <li><a href="/home-book-store-two">Home Book Store Two</a></li>
                                                    <li><a href="/home-plants">Home Plants</a></li>
                                                    <li><a href="/home-flower-shop">Home Flower Shop</a></li>
                                                    <li><a href="/home-flower-shop-two">Home Flower Shop Two</a></li>
                                                    <li><a href="/home-organic-food">Home Organic Food</a></li>
                                                    <li><a href="/home-organic-food-two">Home Organic Food Two</a></li>
                                                    <li><a href="/home-onepage-scroll">Home Onepage Scroll</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <a href="/">Home Group Three</a>
                                                <span class="menu-expand"><i></i></span>
                                                <ul class="sub-menu">
                                                    <li><a href="/home-grid-banner">Home Grid Banner</a></li>
                                                    <li><a href="/home-auto-parts">Home Auto Parts</a></li>
                                                    <li><a href="/home-cake-shop">Home Cake Shop</a></li>
                                                    <li><a href="/home-handmade">Home Handmade</a></li>
                                                    <li><a href="/home-pet-food">Home Pet Food</a></li>
                                                    <li><a href="/home-medical-equipment">Home Medical Equipment</a></li>
                                                    <li><a href="/home-christmas">Home Christmas</a></li>
                                                    <li><a href="/home-black-friday">Home Black Friday</a></li>
                                                    <li><a href="/home-black-friday-two">Home Black Friday Two</a></li>
                                                    <li><a href="/home-valentines-day">Home Valentines Day</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="/shop-grid-standard">Shop</a>
                                        <span class="menu-expand"><i></i></span>
                                        <ul class="sub-menu">
                                            <li class="menu-item-has-children">
                                                <a href="/shop-grid-standard">Shop Layout</a>
                                                <span class="menu-expand"><i></i></span>
                                                <ul class="sub-menu">
                                                    <li><a href="/shop-grid-standard">Shop Grid Standard</a></li>
                                                    <li><a href="/shop-grid-filter">Shop Grid Filter</a></li>
                                                    <li><a href="/shop-grid-two-column">Shop Grid Two Column</a></li>
                                                    <li><a href="/shop-grid-no-sidebar">Shop Grid No Sidebar</a></li>
                                                    <li><a href="/shop-grid-full-width">Shop Grid Full Width</a></li>
                                                    <li><a href="/shop-grid-right-sidebar">Shop Grid Right Sidebar</a></li>
                                                    <li><a href="/shop-list-standard">Shop List Standard</a></li>
                                                    <li><a href="/shop-list-full-width">Shop List Full Width</a></li>
                                                    <li><a href="/shop-list-two-column">Shop List Two Column</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <a href="/product/1">Product Details</a>
                                                <span class="menu-expand"><i></i></span>
                                                <ul class="sub-menu">
                                                    <li><a href="/product/1">Product Tab Bottom</a></li>
                                                    <li><a href="/product-tab-left/1">Product Tab Left</a></li>
                                                    <li><a href="/product-tab-right/1">Product Tab Right</a></li>
                                                    <li><a href="/product-sticky/1">Product Sticky</a></li>
                                                    <li><a href="/product-slider/1">Product Slider</a></li>
                                                    <li><a href="/product-fixed-image/1">Product Fixed Image</a></li>
                                                    <li><a href="/product/1">Product Simple</a></li>
                                                    <li><a href="/product/1">Product Variation</a></li>
                                                    <li><a href="/product/1">Product Affiliate</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="/shop-grid-standard">Collection</a></li>
                                    <li class="menu-item-has-children">
                                        <a href="/">Pages</a>
                                        <span class="menu-expand"><i></i></span>
                                        <ul class="sub-menu">
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
                                    <li class="menu-item-has-children">
                                        <a href="/blog-standard">Blog</a>
                                        <span class="menu-expand"><i></i></span>
                                        <ul class="sub-menu">
                                            <li><a href="/blog-standard">Blog Standard</a></li>
                                            <li><a href="/blog-no-sidebar">Blog No Sidebar</a></li>
                                            <li><a href="/blog-right-sidebar">Blog Right Sidebar</a></li>
                                            <li><a href="/blog-details-standard">Blog Details Standard</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/contact">Contact Us</a></li>
                                </ul>
                            </nav>
                            <div class="mobile-menu-middle">
                                <div class="lang-curr-style">
                                    <span class="title mb-2">Choose Language </span>
                                    <select>
                                        <option value="en">English</option>
                                        <option value="fn">French</option>
                                        <option value="de">Germany</option>
                                    </select>
                                </div>
                                <div class="lang-curr-style">
                                    <span class="title mb-2">Choose Currency</span>
                                    <select>
                                        <option value="USD">USD</option>
                                        <option value="EUR">EUR</option>
                                        <option value="GBP">GBP</option>
                                    </select>
                                </div>
                            </div>
                            <div class="offcanvas-widget-area">
                                <div class="off-canvas-contact-widget">
                                    <div class="header-contact-info">
                                        <ul class="header-contact-info__list">
                                            <li><i class="fa fa-phone"></i> <a href="tel://12452456012">(1245) 2456 012 </a>
                                            </li>
                                            <li><i class="fa fa-envelope"></i> <a
                                                href="mailto:info@yourdomain.com">info@yourdomain.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="off-canvas-widget-social">
                                    <a href="//twitter.com" title="Twitter"><i class="fa fa-twitter"></i></a>
                                    <a href="//instagram.com" title="Instagram"><i class="fa fa-instagram"></i></a>
                                    <a href="//facebook.com" title="Facebook"><i class="fa fa-facebook"></i></a>
                                    <a href="//pinterest.com" title="Pinterest"><i class="fa fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                                    class="fas fa-times"></i></button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment >
    )
}