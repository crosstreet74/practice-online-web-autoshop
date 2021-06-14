import React from "react"
// import menuData from "../../../assets/data/side.json"

export default function NavMenu() {
    // const menuList = menuData.menu.map((item, index) =>
    //     <li key={index} className="nav-link px-2"><i className={item.icon}></i></li>
    // )

    return (
        <div class="col-xl-2 col-lg-2 col-md-6 col-8">
            <div class="header-right-wrap ">
                <div class="same-style header-search d-none d-lg-block">
                    <button class="search-active"><i class="las la-search"></i></button>
                    <div class="search-content">
                        <form action="#">
                            <input type="text" placeholder="Search" />
                            <button class="button-search"><i class="las la-search"></i></button>
                        </form>
                    </div>
                </div>
                <div class="same-style account-setting d-none d-lg-block">
                    <button class="account-setting-active"><i class="las la-user-circle"></i></button>
                    <div class="account-dropdown">
                        <ul>
                            <li><a href="/login-register">Login</a></li>
                            <li><a href="/login-register">Register</a></li>
                            <li><a href="/my-account">my account</a></li>
                        </ul>
                    </div>
                </div>
                <div class="same-style header-compare">
                    <a href="/compare"><i class="las la-random"></i><span class="count-style">1</span></a>
                </div>
                <div class="same-style header-wishlist">
                    <a href="/wishlist"><i class="las la-bookmark"></i><span
                        class="count-style">2</span></a>
                </div>
                <div class="same-style cart-wrap d-none d-lg-block">
                    <button class="icon-cart"><i class="las la-shopping-bag"></i><span
                        class="count-style">0</span></button>
                    <div class="shopping-cart-content">
                        <p class="text-center">No items added to cart</p>
                    </div>
                </div>
                <div class="same-style cart-wrap d-block d-lg-none">
                    <a class="icon-cart" href="/cart"><i class="las la-shopping-bag"></i><span
                        class="count-style">0</span></a>
                </div>
                <div class="same-style mobile-off-canvas d-block d-lg-none">
                    <button class="mobile-aside-button"><i class="las la-bars"></i></button>
                </div>
            </div>
        </div>
    )
}