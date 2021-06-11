import React from "react"
import { Link } from "react-router-dom"
import menuData from "../../../assets/data/nav.json"

export default function NavMenu() {
    const menuList = menuData.menu.map((item, index) =>

        <li key={index} className="nav-link">
                <Link to={item.url}>{item.name}</Link>
        </li >
    )

    return (
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            {menuList}
        </ul>
    )
}