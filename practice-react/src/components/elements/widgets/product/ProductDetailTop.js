import React from 'react';
import ProductRating from '../../ui/ProductRating'

export default function ProductDetailTop({name,price,rating,txt}) {
    return (
        <>
            <h2> {name}</h2>
            <div className="product-details-price">
                <span>{price}</span>
            </div>
            <div className="pro-details-rating-wrap">
                <ProductRating rateValue={rating}></ProductRating>
                {/* <div className="pro-details-rating">
                    <i className="fas fa-star yellow"></i>
                    <i className="fas fa-star yellow"></i>
                    <i className="fas fa-star yellow"></i>
                    <i className="fas fa-star yellow"></i>
                    <i className="far fa-star"></i>
                </div> */}
            </div>
            <div className="pro-details-list">
                <p>{txt}</p>
            </div>
        </>
    );
}