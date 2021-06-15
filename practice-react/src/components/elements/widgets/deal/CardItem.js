import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import ProductRating from "../../ui/ProductRating"

export default function CardItem({ category }) {
    const [dealItemData, setDealItemData] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3005/product")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setDealItemData(data);
            })
        //.catch(error => console.log(error))
    }, []);

    // console.log(dealItemData)

    const filteredData = category
        ? dealItemData.filter(
            item => item.tag.filter(single => single === category)[0]
        )
        : dealItemData;

    const itemList = filteredData.map((item, index) => {
        return (
            <div key={index} className="col-12 col-md-3 mb-4">
                <Link to={`/productdetail/${item.id}`}>
                    <img className="modelImg mb-3" style={{ backgroundImage: `url(${item.item_img})`, backgroundSize: "cover", backgroundPositionX: "center" }}></img>
                    <p className="modelTitle mb-1">{item.name}</p>
                </Link>
                <p className="modelBrand mb-2">{item.category[0]}</p>
                <p className="modelRate">
                    {/* render ProductRating following the data */}
                    {item.rating && item.rating > 0 ? (
                        <ProductRating rateValue={item.rating}></ProductRating>
                    ) : ("")
                    }
                </p>
                <p className="modelPrice">
                    {item.discount > 0 ? (item.price * ((100 - item.discount) / 100)).toFixed(2) : item.price}
                    <span className="px-2">
                        {item.discount > 0 ? item.price : ''}
                    </span>
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