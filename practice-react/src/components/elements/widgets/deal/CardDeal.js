import { useState } from "react"
import { Link } from "react-router-dom"
import itemData from "../../../../assets/data/catalog.json"
import ProductRating from "../../ui/ProductRating"

export default function CardItem({ category }) {
    const [dealItemData, setDealItemData] = useState(itemData);

    const filteredData = category
        ? dealItemData.filter(
            item => item.type.filter(single => single === category)[0]
        )
        : dealItemData;

    const itemList = filteredData.map((item, index) => {
        return (
            <div key={index} className="col-12 col-md-3 mb-4">
                <Link to={`/item_detail/${item.item_id}`}></Link>
                <img className="modelImg mb-3" style={{ backgroundImage: `url(${item.item_img})`, backgroundSize: "cover", backgroundPositionX: "center" }}></img>
                <p className="modelTitle mb-1">{item.model}</p>
                <p className="modelBrand mb-2">{item.brand}</p>
                <p className="modelRate">
                    {/* render ProductRating following the data */}
                    {item.rating && item.rating > 0 ? (
                        <ProductRating rateValue={item.rating}></ProductRating>
                    ) : ("")
                    }
                </p>
                <p className="modelPrice">
                    {(item.price * ((100 - item.discount) / 100)).toFixed(2)} million ₩~
                    <span>{item.price} million ₩~</span>
                </p>
            </div>
        )
    })
    return (
        <>
            <div className="text-center">
                {category}
            </div>
            <div className="row">
                {itemList}
            </div>
        </>
    )
}