import NewsArticle from "./NewsArticle"
import React, { useEffect, useState } from "react";
import "./css/ArticleSection.css"
import FeaturedArticle from "./FeaturedArticle";

let ArticleSection = (props) => {

    let APIKEY2 = process.env.REACT_APP_APIKEY2


    const [tickerName, setTickerName] = useState(props.tickerName);

    const [tickerNewsData, setTickerNewsData] = useState([]);

    const passTickerNews = (data) => {
        props.passTickerNews(data)
    };

    useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${tickerName}&apikey=${APIKEY2}`)
            if (!response.ok) {
                throw new Error('Error fetching news articles')
            }
            const data = await response.json();
            console.log('News articles fetched', data);
            setTickerNewsData(data.feed)
            passTickerNews(data.feed);
        } catch (error) {
            console.log('An error occurred: ', error)
        }
    }
    fetchData()
    }, []); 
        

    let relevantArticles = tickerNewsData.map((article) => {
        const { ticker_sentiment: tickerSentiments} = article;
        const relevantSentiment = tickerSentiments.find((sentiment) => 
            sentiment.ticker === tickerName && parseFloat(sentiment.relevance_score) > .5
        );

        if (relevantSentiment) {
            return {...article, relevant_sentiment: relevantSentiment};
        };
        return null;
    }).filter(Boolean);

    let featuredArticles = relevantArticles.sort((a,b) => b.relevant_sentiment.relevance_score - a.relevant_sentiment.relevance_score).splice(0,3);
    

    return (
        <main className="articleSectionWrapper">
            <section className="featuredArticles">
                {tickerName[0] ? featuredArticles.map((articleData, index) => <FeaturedArticle data={articleData} key={index + "f"} />) : ""}
            </section>

            <section>
                <h3>Related articles for {tickerName}</h3>
                <section className="relatedArticleWrapper">
                    {tickerName[0] ? relevantArticles.map((articleData, index) => <NewsArticle data={articleData} key={index} />) : `Please search a ticker first.`}
                </section>
            </section>
        </main>
    )
}

export default ArticleSection