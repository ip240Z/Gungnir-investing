import NewsArticle from "./NewsArticle"
import React, { useEffect, useState } from "react";
import "./css/ArticleSection.css"

let ArticleSection = (props) => {

    let APIKEY = process.env.REACT_APP_APIKEY

    let APIKEY2 = process.env.REACT_APP_APIKEY2


    const [tickerName, setTickerName] = useState(props.tickerName);

    const [tickerNewsData, setTickerNewsData] = useState([]);

    const passTickerNews = (data) => {
        props.passTickerNews(data)
    };

    useEffect(() => {
        fetch(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${tickerName}&apikey=${APIKEY2}`)
        .then(r => r.ok ? r.json() : null)
        .then(data => {
            console.log("News articles fetched")
            setTickerNewsData(data.feed)
            passTickerNews(data)
        })
    },[])

    let relevantArticles = tickerNewsData.map((article) => {
        const { ticker_sentiment: tickerSentiments} = article;
        const relevantSentiment = tickerSentiments.find((sentiment) => 
            sentiment.ticker === tickerName && parseFloat(sentiment.relevance_score) > .6
        );

        if (relevantSentiment) {
            return {...article, relevant_sentiment: relevantSentiment};
        };
        return null;
    }).filter(Boolean);

    return (
        <section>
            <header>Related articles for {tickerName}</header>
            <section className="articleSectionWrapper">
                {tickerName[0] ? relevantArticles.map((articleData, index) => <NewsArticle data={articleData} key={index} />) : `Please search a ticker first.`}
            </section>
        </section>
    )
}

export default ArticleSection