import React, { useState } from 'react';
import footerMenuData from "../../../../assets/data/footerMenu.json"

export default function FooterMenu({ footerGroup,
    footerMenuList
}) {

    /* using json data from props */

    const [newList, setNewList] = useState(footerMenuList);
    console.log(newList)
    const menuList = newList.map(item => (
        <li key={item.id}>{item.name}</li>
    ))

    /* using only string to filter the json data read from component'FooterMenu' level */

    // const menuList = footerMenuData[footerGroup].map(item => (
    //     < li key={item.id} > {item.name}</li >
    // ))

    return (
        <div className="col-12 col-md-2">
            <p className="menuTitle">{footerGroup}</p>
            <ul>
                {menuList}
            </ul>
        </div>
    );
}