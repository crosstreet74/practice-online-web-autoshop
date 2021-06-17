import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import ProductRating from '../../ui/ProductRating'

// TODO: filter item following the selected item options (category etc)
export default function ShopItem({ dataProp, sliceProp, columnProp }) {
    const [sliceNum, setSliceNum] = useState(15)
    const [itemData, setItemData] = useState([])
    
    useEffect(()=>{
        setItemData(()=>{
            if(typeof(dataProp)!=undefined)
                return(dataProp)
        })
    })

    const itemList = itemData.map(item => {
        return (
            <div key={item.id} className={`col-xl-${columnProp} col-sm-6`}>
                <div className="product-wrap mb-25">
                    <div className="product-img">
                        <Link to={`/products/${item.id}`}>
                            <img className="default-img" src="assets/img/product/fashion/8.jpg" alt="" />
                            <img className="hover-img" src="/assets/img/product/fashion/6.jpg" alt="" />
                        </Link>
                        <div className="product-img-badges">
                            {item.discount > 0 ? <span className="pink"> -{item.discount}%</span> : ''}
                            {item.new ? <span className="purple">new</span> : ''}

                        </div>
                        <div className="product-action">
                            <div className="pro-same-action pro-wishlist">
                                <button className="" title="Add to wishlist"><i className="las la-bookmark"></i></button>
                            </div>
                            <div className="pro-same-action pro-cart">
                                <button disabled="" className="active">Out of Stock</button>
                            </div>
                            <div className="pro-same-action pro-quickview">
                                <button title="Quick View"><i className="las la-eye"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="product-content text-center">
                        <h3><a href="/product/8">{item.name}</a></h3>
                        <ProductRating rateValue={item.rating} />
                        <div className="product-price">
                            <span>
                                {item.discount > 0 ? '$' + (item.price * ((100 - item.discount) / 100)).toFixed(2) : ''}
                            </span>
                            <span className="old">${item.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }).slice(0, sliceProp)

    return (
        <>
            {itemList}
        </>
    );
}