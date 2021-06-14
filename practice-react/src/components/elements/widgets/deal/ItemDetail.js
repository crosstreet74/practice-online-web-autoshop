import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../../layout/Header';
import Footer from '../../../layout/Footer';

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
                console.log(data);
            });
    }, [id]);

    return (
        <>
            <Header />
            <h3 className="text-center my-5">{productData.name}</h3>
            <Footer />
        </>
    );
}