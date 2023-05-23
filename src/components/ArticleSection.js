import NewsArticle from "./NewsArticle"
import React, { useEffect, useState } from "react";

let ArticleSection = (props) => {

    let APIKEY = process.env.REACT_APP_APIKEY

    const [tickerName, setTickerName] = useState(props.tickerName);

    const [tickerNewsData, setTickerNewsData] = useState([]);

    const passTickerNews = (data) => {
        props.passTickerNews(data)
    };

    useEffect(() => {

        fetch(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${tickerName}&apikey=${APIKEY}`)
        .then(r => r.ok ? r.json() : null)
        .then(data => {
            setTickerNewsData(data.feed)
            passTickerNews(data)
        })
    },[])

    return (
        <section>
            <header>Related articles for {tickerName}</header>
            {tickerName[0] ? tickerNewsData.map((article, index) => console.log(article.title)) : `Please search a ticker first.`}

        </section>
    )
}

export default ArticleSection