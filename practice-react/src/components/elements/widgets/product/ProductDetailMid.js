import React, {useEffect, useState} from 'react';
import ProductOption from './ProductOption';
import { useParams } from 'react-router-dom';

export default function ProductDetailMid() {
    var process = require("../../../../assets/config/myProcess.json");

    const { id } = useParams();
    const [ varData, setVardata ] = useState([]);


    useEffect(() => {
        fetch(`http://${process.IP}:${process.PORT}/product/${id}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setVardata(data);
                console.log(data.variation);
            });
    }, [process.IP, process.PORT, id]);
    
    return (
        <>
            <ProductOption
                vData={varData.variation}
            />
            <div className="pro-details-quality">
                <div className="cart-plus-minus">
                    <button className="dec qtybutton">-</button>
                    <input className="cart-plus-minus-box" type="text" readOnly=""></input>
                    <button className="inc qtybutton">+</button>
                </div>
                <div className="pro-details-cart btn-hover">
                    <button> Add To Cart </button>
                </div>
                <div className="pro-details-cart btn-hover ml-0">
                    <a href="//www.amazon.com" rel="noopener noreferrer" target="_blank">Buy Now</a>
                </div>
                <div className="prodetails-wishlist">
                    <button className="" title="Add to wishlist">
                        <i className="las la-bookmark"></i>
                    </button>
                </div>
                <div className="pro-details-compare">
                    <button className="" title="Add to compare">
                        <i className="las la-random"></i>
                    </button>
                </div>
            </div>
        </>
    );
}