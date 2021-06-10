import Banner from "../elements/ui/Banner"
import Nav from "../elements/ui/Nav"

export default function Header() {
    return (
        <div className="container-fluid">
            <Nav></Nav>
            <Banner></Banner>
        </div>
    )
}