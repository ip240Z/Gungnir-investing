import TickerSearchForm from "./TickerSearchForm"
import ArticleSection from "./ArticleSection";
import React, { useState } from "react";
import "./css/StockBody.css"
import "./css/TickerSearchForm.css"
import { Link, Route, Routes } from "react-router-dom";

let StockBody = () => {

    const [tickerName, setTickerName] = useState("");

    const [tickerNewsData, setTickerNews] = useState();

    const [chartData, setChartData] = useState();

    return (
        <section className="mainRenderArea">
            <header>
                <TickerSearchForm passTicker={setTickerName} passChartData={setChartData} />
                <nav className="navBtnWrapper">
                    <p className="tickerDisplay">{tickerName}</p>
                    <Link className="navLink" to={`/chart/${tickerName}`}>
                        Chart
                    </Link>
                    <Link className="navLink" to={`/news/${tickerName}`} >
                        News
                    </Link>
                </nav>
            </header>
            <article>
                <Routes>
                    
                    {/* <Route
                    path={`/chart/${tickerName}`}
                    element={<Chart />} 
                    /> */}

                    <Route
                    path={`/news/${tickerName}`}
                    element={<ArticleSection tickerNewsData={tickerNewsData} tickerName={tickerName} passTickerNews={setTickerNews} />} 
                    />
                </Routes>
            </article>
        </section>
    )
}

export default StockBody;