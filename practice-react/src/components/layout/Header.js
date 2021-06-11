import Banner from "../elements/ui/Banner"
import Nav from "../elements/ui/Nav"

export default function Header() {
    return (
        <div className="container-fluid px-0">
            <Nav></Nav>
            <Banner></Banner>
        </div>
    )
}