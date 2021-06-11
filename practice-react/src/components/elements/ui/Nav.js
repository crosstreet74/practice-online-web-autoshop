import NavMenu from "./NavMenu"
import SideMenu from "./SideMenu"

export default function Nav() {
    return (

        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom"
            style={{ padding: 0, backgroundColor: "gainsboro" }}>

            <div id="logo" className="d-flex align-items-center col-md-2 mb-2 mb-md-0 px-4 text-decoration-none">
                logo
            </div>

            <NavMenu></NavMenu>
            <SideMenu></SideMenu>
        </header>
    )
}