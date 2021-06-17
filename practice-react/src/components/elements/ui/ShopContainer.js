import React, { useState, useEffect } from 'react';
import ShopSideBar from '../widgets/shop/ShopSideBar'
import ShopTopBar from '../widgets/shop/ShopTopBar'
import ShopItem from '../widgets/shop/ShopItem'

export default function ShopContainer() {

    const [columnNum, setColumnNum] = useState(4)
    const [sliceNum, setSliceNum] = useState(4)
    const [itemData, setItemData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    // const [pageNum, setPageNum] = useState(0)
    const [category, setCategory] = useState([])

    let process = require('../../../assets/config/myProcess.json')

    useEffect(() => {
        fetch(`http://${process.IP}:${process.PORT}/product`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setItemData(data)
            })
    }, [process.IP, process.PORT])

    useEffect(() => {
        setSliceNum(() => {
            if (columnNum == 4)
                return 15
            else if (columnNum == 6)
                return 10
            else if (columnNum == 12)
                return 5
        })
    }, [columnNum])

    useEffect(() => {
        setFilteredData(() => {
            console.log(category)
            if (category.length === 0 || category == 'all category')
                return (itemData)
            else
                return (
                    itemData.filter(item => item.category.filter(single => single === category)[0])
                )
        })
    }, [category])

    return (
        <div className="shop-area pt-95 pb-100">
            <div className="container">
                <div className="row">
                    <ShopSideBar category={category} setCategory={setCategory} />
                    <div className="col-lg-9 order-1 order-lg-2">
                        <div className="shop-top-bar mb-35">
                            <div className="select-shoing-wrap">
                                <div className="shop-select">
                                    <select>
                                        <option value="default">Default</option>
                                        <option value="priceHighToLow">Price - High to Low</option>
                                        <option value="priceLowToHigh">Price - Low to High</option>
                                    </select>
                                </div>
                                <p>Showing {sliceNum} of 144{/* the number of filtered datas */} result</p>
                            </div>
                            {/** */}
                            <ShopTopBar setSliceNum={setSliceNum} setColumnNum={setColumnNum} />
                        </div>
                        <div className="shop-bottom-area mt-35">
                            <div className="row grid three-column">
                                <ShopItem dataProp={filteredData} sliceProp={sliceNum} columnProp={columnNum} />
                            </div>
                        </div>
                        <div className="pro-pagination-style text-center mt-30">
                            <ul className="mb-0 mt-0">
                                <li className="page-item active"><button className="page-link">1</button></li>
                                <li className="page-item null"><button className="page-link">2</button></li>
                                <li className="page-item null"><button className="page-link">3</button></li>
                                <li className="page-item null"><button className="page-link">4</button></li>
                                <li className="page-item null"><button className="page-link">5</button></li>
                                <li className="page-item null"><button className="page-link">6</button></li>
                                <li className="page-item null"><button className="page-link">7</button></li>
                                <li className="page-item"><button className="page-link">»</button></li>
                                <li className="page-item null"><button className="page-link">10</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
