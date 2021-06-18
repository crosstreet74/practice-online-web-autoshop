import React from 'react';
import ProductLeft from './ProductLeft'
import ProductRight from './ProductRight'

export default function ProductTop(props) {
    return (
        <div className="shop-area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <ProductLeft productData={props.productData}></ProductLeft>
                    <ProductRight></ProductRight>
                </div>
            </div>
        </div>
    );
}
