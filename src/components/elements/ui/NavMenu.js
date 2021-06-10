import React from "react"
import menuData from "../../../assets/data/nav.json"

export default function NavMenu() {
    const menuList = menuData.menu.map(item =>

        <li className="nav-link"><a href={item.url}>{item.name}</a></li>
    )

    return (
        <ul className="nav col-12 offset-lg-4 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 px-2">
            {menuList}
        </ul>
    )
}