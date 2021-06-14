import { useEffect, useState } from "react"

export default function DealTap({ category, setCategory }) {

    const [categoryData, setCategoryData] = useState([])

    useEffect(() => {
        fetch("http://localhost:3005/category")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setCategoryData(data);
            })
        //.catch(error => console.log(error))
    }, []);


    const handleClick = (e) => {
        setCategory(e.target.value)
    }

    return (
        <div id="dealNav" className="row mb-5">
            <ul className="col-12 col-md-6 offset-md-3 nav justify-content-center text-center">
                {
                    categoryData.map((item, index) =>
                        <li key={index}>
                            <button
                                // {active ? "nav-link active" : "nav-link"}
                                onClick={handleClick} value={item.name}>
                                {item.name}
                            </button>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}