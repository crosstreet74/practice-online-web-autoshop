import NavMenu from "./NavMenu"
import SideMenu from "./SideMenu"

export default function Nav() {
    return (

        <header className="py-1 d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
            style={{ padding: 0, backgroundColor: "gainsboro" }}>

            <div id="logo" className="px-2">
                logo
            </div>
            
            <NavMenu></NavMenu>
            <SideMenu></SideMenu>
        </header>
    )
}