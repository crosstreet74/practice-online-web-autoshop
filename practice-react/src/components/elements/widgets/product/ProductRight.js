import React, { useEffect, useState, } from 'react';
import {useParams} from 'react-router-dom'
import ProductDetailTop from './ProductDetailTop'
import ProductDetailMid from './ProductDetailMid'
// import ProductDetailBottom from './ProductDetailBottom'

export default function ProductRight() {

    const { id } = useParams();

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3005/product/${id}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setDatas(data);
                console.log(data);
            });
    }, []);

    return (
        <div className="col-lg-6 col-md-6">
            <div className="product-details-content ml-70">

                <ProductDetailTop
                    name={datas.name}
                    price={datas.price}
                    rating={datas.rating}
                    txt={datas.shortDescription}
                />
                <ProductDetailMid></ProductDetailMid>

                {/*<ProductMetaShare></ProductMetaShare>*/}
                <div className="pro-details-meta">
                    <span>Categories :</span>
                    <ul>
                        <li><a href="/shop-grid-standard">fashion</a></li>
                        <li><a href="/shop-grid-standard">women</a></li>
                    </ul>
                </div>
                <div className="pro-details-meta">
                    <span>Tags :</span>
                    <ul>
                        <li><a href="/shop-grid-standard">fashion</a></li>
                        <li><a href="/shop-grid-standard">women</a></li>
                        <li><a href="/shop-grid-standard">top</a></li>
                        <li><a href="/shop-grid-standard">sleeveless</a></li>
                    </ul>
                </div>
                <div className="pro-details-social">
                    <ul>
                        <li><a href="//facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="//naver.com"><i className="fab fa-line"></i></a></li>
                        <li><a href="//twitter.com"><i className="fab fa-twitter"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}