import Item from "./Item.js"
import { Fragment } from "react"

export default function Catalog() {
    return (
        <Fragment>
            <Item brand="Land Rover" model="Range Rover"></Item>
            <Item brand="Kia" model="Stinger"></Item>
            <Item brand="Porsche" model="Cayenne" ></Item>
            <Item brand="Mercedes-Benz" model="GT 4-Door Coupe" ></Item>
            <Item brand="Jeep" model="Renegade Longitude"></Item>
        </Fragment>
    )
}