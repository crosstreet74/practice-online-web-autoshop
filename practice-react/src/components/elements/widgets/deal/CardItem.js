import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import ProductRating from "../../ui/ProductRating"

export default function CardItem({ category }) {

    const [dealItemData, setDealItemData] = useState([]);

    let process = require('../../../../assets/config/myProcess.json')

    useEffect(() => {
        fetch(`http://${process.IP}:${process.PORT}/product/`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setDealItemData(data);
                // console.log(data);
            })
        //.catch(error => console.log(error))
    }, []);

    // console.log(dealItemData)

    const filteredData = category
        ? dealItemData.filter(
            item => item.category.filter(single => single === category)[0]
        )
        : dealItemData;

    const handleDelete = (id) => {
        fetch(`http://${process.IP}:${process.PORT}/wish/${id}`, {
            method: "DELETE"
        }).then(
            console.log("deleted!")
        )
    }

    const handlePutWishList = (id) => {
        fetch(`http://${process.IP}:${process.PORT}/product/${id}`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                fetch(`http://${process.IP}:${process.PORT}/wish/`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        id: data.id,
                        name: data.name,
                        image: data.image,
                        price: data.price,
                        discount: data.discount
                    })
                }).then(
                    console.log("wish posted!")
                )
            })
    }

    const handleAddCompare = (id) => {
        // TODO: check the number of items in the compare list to be equal or less than three
        fetch(`http://${process.IP}:${process.PORT}/product/${id}`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                fetch(`http://${process.IP}:${process.PORT}/compare`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id: data.id,
                        name: data.name,
                        image: data.image,
                        price: data.price,
                        shortDescription: data.shortDescription,
                        rating: data.rating
                    })
                })
            })
    }

    const itemList = filteredData.map((item, index) => (

        <div className="col-xl-3 col-md-6 col-lg-3 col-sm-6 " key={item.id}>
            <div className="product-wrap mb-25">
                <div className="product-img">
                    <Link to={`/products/${item.id}`}>
                        <img className="default-img" src="assets/img/product/fashion/8.jpg" alt="" />
                        <img className="hover-img" src="/assets/img/product/fashion/6.jpg" alt="" />
                    </Link>
                    <div className="product-img-badges">
                        {
                            item.discount > 0 ? <span className="pink">{item.discount}%</span> : ''
                        }
                        {
                            item.new ? <span className="purple">new</span> : ''
                        }
                    </div>
                    <div className="product-action">
                        <div className="pro-same-action pro-wishlist">
                            <button
                                value={item.id}
                                onClick={() => handlePutWishList(item.id)}
                            >
                                <i className="las la-bookmark"></i>
                            </button>
                        </div>
                        <div className="pro-same-action pro-cart">
                            <button disabled="" className="active">Buy</button>
                        </div>
                        <div className="pro-same-action pro-quickview">
                            <button
                                className=""
                                title={item.id}
                                // onClick={() => handleDelete(item.id)}
                                onClick={() => handleAddCompare(item.id)}
                                value={item.id}
                            >
                                <i className="las la-eye"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="product-content text-center">
                    <h3><Link to={`/products/${item.id}`}>{item.name}</Link></h3>
                    <div className="product-rating">
                        {item.rating && item.rating > 0 ? (
                            <ProductRating rateValue={item.rating} />
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="product-price">
                        <span>{(item.price * ((100 + item.discount) / 100)).toFixed(2)}</span>
                        <span className="old">{item.price}</span>
                    </div>
                </div>
            </div>
        </div>

    )).slice(0, 8);
    return (
        <div className="row mt-5">
            {itemList}
        </div>
    )
}