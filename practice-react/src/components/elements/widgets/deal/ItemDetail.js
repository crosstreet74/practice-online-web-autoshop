import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../../layout/Header';
import Footer from '../../../layout/Footer';
import Bread from '../../ui/Bread'
import ProductTop from '../product/ProductTop'
import ProductBottom from '../product/ProductBottom'

export default function ItemDetail() {

    const { id } = useParams();
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3005/product/${id}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setProductData(data);
                // console.log(data);
            });
    }, [id]);

    return (
        <>
            <Header />
            <h3 className="text-center my-5">{productData.name}</h3>
            <Bread
                productId={productData.id}
                productName={productData.name}
                productUrl={`/productdetail/${productData.id}`}
            />
            <ProductTop
                productData={productData}
            />
            {/* <ProductBottom /> */}
            <Footer />
        </>
    );
}