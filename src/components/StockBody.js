import TickerSearchForm from "./TickerSearchForm"
import ArticleSection from "./ArticleSection";
import React, { useState } from "react";
import "./css/StockBody.css"
import "./css/TickerSearchForm.css"
import { Link, Route, Routes } from "react-router-dom";
import ChartComponent from "./ChartComponent";
import Header from "./Header";

let StockBody = () => {

    const [tickerName, setTickerName] = useState("");

    const [tickerNewsData, setTickerNews] = useState();

    const [chartData, setChartData] = useState();

    console.log(chartData)
    console.log(tickerName)

    return (
        <section className="mainRenderArea">
                <Header />
            <header className="searchFormWrapper">
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
            <main className="contentWrapper">
                <article>
                    <Routes>    
                        <Route
                        path={`/chart/${tickerName}`}
                        element={<ChartComponent chartData={chartData} />} 
                        />
                        <Route
                        path={`/news/${tickerName}`}
                        element={<ArticleSection tickerNewsData={tickerNewsData} tickerName={tickerName} passTickerNews={setTickerNews} />} 
                        />
                    </Routes>
                </article>
            </main>
        </section>
    )
}

export default StockBody;