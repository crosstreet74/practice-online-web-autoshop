import itemData from "../../../../assets/data/catalog.json"
import ProductRating from "../../ui/ProductRating"

export default function CardItem({ category }) {
    const itemList = itemData.item.map(item => {
        if (item.type.includes(category))
            return (
                <div className="col-12 col-md-3 mb-4">
                    <img className="modelImg mb-3" src={item.item_img}></img>
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