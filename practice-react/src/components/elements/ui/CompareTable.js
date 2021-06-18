import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import ProductRating from '../ui/ProductRating'

export default function CompareTable() {
    const [compareData, setCompareData] = useState([])
    let process = require('../../../assets/config/myProcess.json')

    useEffect(() => {
        fetch(`http://${process.IP}:${process.PORT}/compare`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setCompareData(data)
                // console.log(data)
            })
    }, [process.IP], [process.PORT])

    const handleCompareRm = (id) =>{

    }

    const compareListImage = compareData.map(item => {
        // TODO: check the numbers of item in the compareData & handle 0 case
        return (
            <td className="product-image-title">
                <div className="compare-remove">
                    <button onClick={()=>{handleCompareRm(item.id)}}><i className="las la-trash"></i></button>
                </div>
                <Link className="image" to={`/products/${item.id}`}><img className="img-fluid" src={item.image} alt="" /></Link>
                <div className="product-title">
                    <Link to={`/products/${item.id}`}></Link>
                </div>
                <div className="compare-btn">
                    <Link to={`/products/${item.id}`}>Select Option</Link>
                </div>
            </td>
        )
    })

    const compareListPrice = compareData.map(item => {
        // TODO: check the numbers of item in the compareData & handle 0 case
        return (
            <td className="product-image-title">
                {item.price}
            </td>
        )
    })

    const compareListDesc = compareData.map(item => {
        // TODO: check the numbers of item in the compareData & handle 0 case
        return (
            <td className="product-image-title">
                {item.shortDescription}
            </td>
        )
    })

    const compareListRating = compareData.map(item => {
        // TODO: check the numbers of item in the compareData & handle 0 case
        return (
            <td className="product-image-title">
                <ProductRating rateValue={item.rating}/>
            </td>
        )
    })

    return (
        <>
            <div className="compare-main-area pt-90 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="compare-page-content">
                                <div className="compare-table table-responsive">
                                    <table className="table table-bordered mb-0">
                                        <tbody>
                                            <tr>
                                                <th className="title-column">Product Info</th>
                                                {compareListImage}
                                            </tr>
                                            <tr>
                                                <th className="title-column">Product Info</th>
                                                {compareListPrice}
                                            </tr>
                                            <tr>
                                                <th className="title-column">Product Info</th>
                                                {compareListDesc}
                                            </tr>
                                            <tr>
                                                <th className="title-column">Product Info</th>
                                                {compareListRating}
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
