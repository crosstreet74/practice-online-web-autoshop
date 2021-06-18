import React, { useEffect, useState } from 'react';

export default function ProductAdd({ data, color, size }) {
    const [prodData, setProdData] = useState([]);

    let process = require('../../../../assets/config/myProcess.json')

    useEffect(() => {
        setProdData(data)
        // console.log(data)
    })

    const handleAddCart = (data) => {
        fetch(`http://${process.IP}:${process.PORT}/cart/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: data.id,
                name: data.name,
                image: data.image,
                price: data.price,
                discount: data.discount,
                color: color,
                size: size
            })
        }).then(
            console.log("cart posted!")
        )
    }

    const handleAddWish = (data) => {
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
    }

    const handleAddCompare = (id) => {
        // TODO: check the number of items in the compare list to be equal or less than three

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
    }

    return (
        <div className="pro-details-quality">
            <div className="cart-plus-minus">
                <button className="dec qtybutton">-</button>
                <input className="cart-plus-minus-box" type="text" readOnly=""></input>
                <button className="inc qtybutton">+</button>
            </div>
            <div className="pro-details-cart btn-hover">
                <button onClick={() => { handleAddCart(data) }}> Add To Cart </button>
            </div>
            <div className="pro-details-cart btn-hover ml-0">
                <a href="//www.amazon.com" rel="noopener noreferrer" target="_blank">Buy Now</a>
            </div>
            <div className="prodetails-wishlist">
                <button className="" title="Add to wishlist" onClick={() => { handleAddWish(data) }}>
                    <i className="las la-bookmark"></i>
                </button>
            </div>
            <div className="pro-details-compare" onClick={() => { handleAddCompare(data) }}>
                <button className="" title="Add to compare">
                    <i className="las la-random"></i>
                </button>
            </div>
        </div>
    );
}