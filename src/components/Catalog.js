import Item from "./Item.js"
import { Fragment, useState } from "react"

export default function Catalog() {
    let [brand, setBrand] = useState([
        "Kia",
        "Porsche",
        "Mercedes-Benz",
        "Jeep",
        "Land Rover"
    ]);

    let [model, setModel] = useState([
        "Stinger",
        "Cayenne",
        "GT 4-Door Coupe",
        "Renegade Longitude",
        "Range Rover"
    ]);

    return (
        <Fragment>
            {
                brand.map((item, index) => {
                    return (
                        <Item brand={item} key={index}></Item>
                    )
                })
            }
        </Fragment>
    )
}