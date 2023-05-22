import TickerSearchForm from "./TickerSearchForm"
import React, { useState } from "react";
import "./StockBody.css"

let StockBody = (props) => {

    const [searchedTicker, setSearchedTicker] = useState("")

    return (
        <section className="mainRenderArea">
            <header>
                <h4>{searchedTicker}</h4>
                <TickerSearchForm passTicker={setSearchedTicker}/>
            </header>
            <article>
            </article>
        </section>
    )
}

export default StockBody;