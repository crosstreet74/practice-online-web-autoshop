import CardItem from "../widgets/deal/CardDeal"
import DealTitle from "./DealTitle"
import DealTap from "./DealTap"
import { useState } from "react"

export default function Deal() {

    const [category, setCategory] = useState("Sedan")

    return (
        <section id="deal">
            <div className="container">
                <DealTitle></DealTitle>
                <DealTap setCategory={setCategory}></DealTap>
                <CardItem category={category}></CardItem>
            </div>
        </section>
    )
}