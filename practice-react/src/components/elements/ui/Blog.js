import BlogTitle from "./BlogTitle"
import CardBlog from "../widgets/blog/CardBlog"

export default function Blog() {
    return (
        <section id="blog">
            <div className="container">
                <BlogTitle></BlogTitle>
                <div className="row">
                    <CardBlog></CardBlog>
                </div>
            </div>
        </section>
    )
}