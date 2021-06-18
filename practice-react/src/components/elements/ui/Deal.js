import CardItem from "../widgets/deal/CardItem"
import DealTitle from "./DealTitle"
import DealTap from "./DealTap"
import { useState } from "react"

export default function Deal() {

    const [category, setCategory] = useState("women")

    return (
        <section id="deal">
            <div className="container">
                <DealTitle title="Hot Deal" />
                <DealTap category={category} setCategory={setCategory}></DealTap>
                <CardItem category={category}></CardItem>
            </div>
        </section>
    )
}