import React from "react"
import menuData from "../../../assets/data/side.json"

export default function NavMenu() {
    const menuList = menuData.menu.map((item, index) =>
        <li key={index} className="nav-link px-2"><i className={item.icon}></i></li>
    )

    return (
        <div className="col-md-2">
            <ul className="nav justify-content-end px-4">
                {menuList}
            </ul>
        </div>
    )
}