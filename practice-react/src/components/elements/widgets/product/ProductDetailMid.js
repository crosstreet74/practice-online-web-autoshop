import React, { useEffect, useState } from 'react';
import ProductOption from './ProductOption';
import { useParams } from 'react-router-dom';

import ProductAdd from './ProductAdd'

export default function ProductDetailMid() {
    var process = require("../../../../assets/config/myProcess.json");

    const { id } = useParams();
    const [varData, setVardata] = useState([]);
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');


    useEffect(() => {
        fetch(`http://${process.IP}:${process.PORT}/product/${id}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setVardata(data);
                // console.log(data.variation);
            });
    }, [process.IP, process.PORT, id]);

    return (
        <>
            <ProductOption
                vData={varData.variation}
                setColor={setColor}
                setSize={setSize}
            />
            <ProductAdd data={varData} size={size} color={color}/>
        </>
    );
}