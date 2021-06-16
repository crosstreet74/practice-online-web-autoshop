import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

export default function ProductOption({ setColor, setSize }) {

    const { id } = useParams();
    const [vData, setVData] = useState([])
    const [selectedColor, setSelectedColor] = useState('')
    const [sizeData, setSizeData] = useState([])

    let process = require('../../../../assets/config/myProcess.json')
    useEffect(() => {
        fetch(`http://${process.IP}:${process.PORT}/product/${id}`)
            .then(res => {
                return res.json()
            }).then(data => {
                setVData(data.variation)
                // setSelectedColor(data.variation[0].color)
                setSizeData(data.variation[0].size)
            })
    }, [])

    const handleColorSelection = (color) => {
        setSelectedColor(color)
        for (let i = 0; i < vData.length; i++)
            if (vData[i].color == color)
                setSizeData(vData[i].size)
            console.log(sizeData)
    }

    return (
        <div className="pro-details-size-color">
            <div className="pro-details-color-wrap">
                <span>Color</span>
                <div className="pro-details-color-content">
                    {
                        vData ? vData.map(item => (
                            <label key={item.color} className={`pro-details-color-content--single ${item.color}`}>
                                <input type="radio" name="product-color" value={item.color} onClick={() => handleColorSelection(item.color)} />
                                <span className="checkmark"></span>
                            </label>
                        ))
                            : <p style={{ fontSize: "0.7rem" }}>no color</p>
                    }
                </div>
            </div>
            <div className="pro-details-size">
                <span>Size</span>
                <div className="pro-details-size-content">
                    {
                        sizeData.map(item => {
                            return (
                                <label className="pro-details-size-content--single">
                                    <input type="radio" value={item.name} />
                                    <span className="size-name">{item.name}</span>
                                </label>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}