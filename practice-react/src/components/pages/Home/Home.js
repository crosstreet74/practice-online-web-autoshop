import Header from "../../layout/Header"
import Footer from "../../layout/Footer"
import Banner from "../../elements/ui/Banner"
import Brand from "../../elements/ui/Brand"
import Deal from "../../../components/elements/ui/Deal"
import Blog from "../../elements/ui/Blog"

export default function Home() {
    return (
        <>
            <Header />
            <Banner />
            <Brand />
            <Deal />
            <Blog />
            <Footer />
        </>
    )
}