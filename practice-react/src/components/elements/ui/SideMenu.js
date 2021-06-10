import React from "react"
import menuData from "../../../assets/data/side.json"

export default function NavMenu() {
    const menuList = menuData.menu.map(item =>
        <li className="nav-link px-2"><i className={item.icon}></i></li>
    )

    const iconName = "fas fa-portrait fa-lg px-2"

    return (
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        {menuList}    
        </ul>
    )
}