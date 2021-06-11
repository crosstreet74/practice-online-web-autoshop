import { useState } from "react"
import data from "../../../../assets/data/category.json"

export default function CardBrand() {
    const [brandData, setBrandList] = useState(data)

    const brandList = brandData.brand.map(item => {

        return (
            <div className="col-12 col-md-3">
                <div className="row ">
                    <div className="brandImage col-12 col-md-4"><i className={`${item.img} fa-5x`}></i></div>
                    <div className="col-12 col-md-auto">
                        <p className="featTitle">{item.name}</p>
                        <p>{item.content}</p>
                    </div>
                </div>
            </div>
        )
    });
    return (
        brandList
    )
}