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
                <DealTap category= {category} setCategory={setCategory}></DealTap>
                <CardItem category={category}></CardItem>
            </div>
        </section>
    )
}