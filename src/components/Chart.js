import TickerSearchForm from "./TickerSearchForm"
import React, { useState } from "react";

let Chart = (props) => {

    const [searchedTicker, setSearchedTicker] = useState("")

    return (
        <section>
            <header>
                <h4>{searchedTicker}</h4>
            </header>
            <article>
                <TickerSearchForm passTicker={setSearchedTicker}/>
            </article>
        </section>
    )
}

export default Chart;