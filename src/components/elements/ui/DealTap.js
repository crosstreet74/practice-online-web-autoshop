import Category from "../../../assets/data/category.json"

export default function DealTap() {
    const handleClick = (e) => {
        console.log(e.target)
    }

    return (
        <div id="dealNav" className="row mb-5">
            <ul className="col-12 col-md-6 offset-md-3 nav justify-content-center text-center">
                {
                    Category.item.map(item =>
                        <li>
                            <button onClick={handleClick}>
                                {item.name}
                            </button>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}