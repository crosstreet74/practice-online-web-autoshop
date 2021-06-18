import { useEffect, useState } from "react"

export default function CardBrand() {
    const [brandData, setBrandList] = useState([])

    useEffect(() => {
        fetch("http://localhost:3005/brand").then(res => {
            return res.json()
        }).then(data => {
            setBrandList(data);
            // console.log(brandData[0]);
        })
    }, [])


    const brandList = brandData.map((item, id) => {

        return (
            <div key={id} className="col-12 col-md-3 mb-3 px-0">
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