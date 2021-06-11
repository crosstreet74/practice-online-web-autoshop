
import { useState } from "react"
import FooterLogo from "../elements/ui/FooterLogo"
import FooterMenu from "../elements/widgets/Footer/FooterMenu"
import footerMenuData from "../../assets/data/footerMenu.json"


export default function Footer() {
    const [footerMenu, setFooterMenu] = useState(footerMenuData)
    return (
        <div className="footer container-fluid px-5">
            <div className="container">
                <div className="row mb-4">
                    <FooterLogo></FooterLogo>
                    <FooterMenu
                        footerGroup="about"
                        footerMenuList={footerMenu["about"]}
                    ></FooterMenu>
                    <FooterMenu
                        footerGroup="link"
                        footerMenuList={footerMenu["links"]}
                    ></FooterMenu>
                    <FooterMenu
                        footerGroup="contact"
                        footerMenuList={footerMenu["contacts"]}
                    ></FooterMenu>
                    <div className="col-12 col-md-4 footerWidget">
                        <h4>SUBSCRIBE</h4>
                        <p>Get E-mail updates about our latest shop and special offers.</p>
                        <p>Enter your email address</p>
                        <input></input>
                        <a href="#">SUBSCRIBE</a>
                    </div>
                </div>
            </div>
        </div>
    )
}