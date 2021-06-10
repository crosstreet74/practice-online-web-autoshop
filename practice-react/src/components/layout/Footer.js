export default function Footer() {
    return (
        <div className="footer container-fluid px-5">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-12 col-md-2 footerWidget">
                        <h3>ACompany</h3>
                        <p>ⓒ 2021 ACompany <br />All Rights Reserved</p>
                    </div>
                    <div className="col-12 col-md-2 footerWidget">
                        <h4>ABOUT US</h4>
                        <ul>
                            <li>About us</li>
                            <li>Store location</li>
                            <li>Contacts</li>
                            <li>Orders tracking</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-2 footerWidget">
                        <h4>USEFUL LINKS</h4>
                        <ul>
                            <li>Returns</li>
                            <li>Support Policy</li>
                            <li>Size guide</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-2 footerWidget">
                        <h4>FOLLOW US</h4>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Youtube</li>
                        </ul>
                    </div>
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