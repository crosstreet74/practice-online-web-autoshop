import { useState } from "react"
import { Link } from "react-router-dom"
import data from "../../../../assets/data/blog.json"

export default function CardBrand() {
    const [blogData, setBlogData] = useState(data)

    const blogList = blogData.map(item => (
        <div className="col-12 col-md-4 align-items-center">
            <Link to={`/blog_article/${item.id}`}>
                <div className="blogImage" style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover" }}></div>
            </Link>
            <div className="blogText">
                <Link to={`/blog_article/${item.id}`}>
                    <div className="blogTitle">{item.title}</div>
                </Link>
                <Link to={`/blog_article/author/${item.author}`}>
                    <div className="blogAuth">{item.author}</div>
                </Link>
            </div>
        </div>
    )).slice(0, 3)

    return (
        blogList
    )
}