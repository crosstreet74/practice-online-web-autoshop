import Item from "./Item.js"
import { Fragment } from "react"
import data from "../assets/data/catalog.json"

export default function Catalog() {
    return (
        <Fragment>
            {
                data.items.map(item => {
                    return (
                        <div>
                            <img src={item.img_url}></img>
                            <p>{item.brand}</p>
                            <p>{item.model}</p>
                        </div>
                    )
                })
            }
        </Fragment>
    )
}