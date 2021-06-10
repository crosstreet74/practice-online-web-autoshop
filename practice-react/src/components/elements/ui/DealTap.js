import Category from "../../../assets/data/category.json"

export default function DealTap({setCategory}) {
    const handleClick = (e) => {
        setCategory(e.target.value)
    }

    return (
        <div id="dealNav" className="row mb-5">
            <ul className="col-12 col-md-6 offset-md-3 nav justify-content-center text-center">
                {
                    Category.item.map(item =>
                        <li>
                            <button onClick={handleClick} value={item.name}>
                                {item.name}
                            </button>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}