import React, { useEffect, useState } from "react"

export default function SideMenu() {
    const [sideMenuData, setSideMenuData] = useState([])
    // const menuList = menuData.menu.map((item, index) =>
    //     <li key={index} classNameName="nav-link px-2"><i classNameName={item.icon}></i></li>
    // )


    useEffect(() => {
        fetch("http://localhost:3005/sidemenu").then(res => {
            return res.json()
        }).then(data => {
            setSideMenuData(data);
            // console.log(data);
        })
    }, [])

    return (
        <div className="col-xl-2 col-lg-2 col-md-6 col-8">
            <div className="header-right-wrap ">

                {/* sidemenu-search */}
                <div className="same-style d-none d-lg-block header-search ">
                    <button className="search-active"><i className="las la-search"></i></button>
                    <div className="search-content">
                        <form action="#">
                            <input type="text" placeholder="Search" />
                            <button className="button-search"><i className="las la-search"></i></button>
                        </form>
                    </div>
                </div>
                
                {/* sidemenu-account */}
                <div className="same-style d-none d-lg-block account-setting">
                    <button className="account-setting-active"><i className="las la-user-circle"></i></button>
                    <div className="account-dropdown">
                        <ul>
                            <li><a href="/login-register">Login</a></li>
                            <li><a href="/login-register">Register</a></li>
                            <li><a href="/my-account">my account</a></li>
                        </ul>
                    </div>
                </div>

                {/* sidemenu-compare */}
                <div className="same-style header-compare">
                    <a href="/compare"><i className="las la-random"></i><span className="count-style">1</span></a>
                </div>

                {/* sidemenu-wishlist */}
                <div className="same-style header-wishlist">
                    <a href="/wishlist"><i className="las la-bookmark"></i><span
                        className="count-style">2</span></a>
                </div>

                
                {/* sidemenu-cart */}
                <div className="same-style cart-wrap d-none d-lg-block">
                    <a className="icon-cart" href="/cart" ><i className="las la-shopping-bag"></i><span
                        className="count-style">0</span></a>
                    <div className="shopping-cart-content">
                        <p className="text-center">No items added to cart</p>
                    </div>
                </div>
                
                <div className="same-style cart-wrap d-block d-lg-none">
                    <a className="icon-cart" href="/cart"><i className="las la-shopping-bag"></i><span
                        className="count-style">0</span></a>
                </div>
                
                <div className="same-style mobile-off-canvas d-block d-lg-none">
                    <button className="mobile-aside-button"><i className="las la-bars"></i></button>
                </div>
            </div>
        </div>
    )
}