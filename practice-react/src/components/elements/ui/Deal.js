import CardItem from "../widgets/deal/CardDeal"
import DealTitle from "./DealTitle"
import DealTap from "./DealTap"

export default function Deal() {
    return (
        <section id="deal">
            <div className="container">
                <DealTitle></DealTitle>
                <DealTap></DealTap>
                <CardItem></CardItem>
            </div>
        </section>
    )
}