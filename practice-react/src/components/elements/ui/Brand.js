import CardBrand from "../widgets/brand/CardBrand"

export default function Brand(){
    return(
        <section id="brand">
            <div className="container">
                <div className="row">
                    <CardBrand></CardBrand>
                    <CardBrand></CardBrand>
                    <CardBrand></CardBrand>
                    <CardBrand></CardBrand>
                </div>
            </div>
        </section>
    )
}