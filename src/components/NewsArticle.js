import { useState } from "react"
import "./css/NewsArticle.css"

let NewsArticle = (props) => {

    const [data, setData] = useState(props.data)

    let imgStyle = {
        backgroundImage: `url(${data.banner_image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "97%",
        height: "100%",
    }
    let sentimentStyle = {
        backgroundColor: data.overall_sentiment_label.toLowerCase().includes("bullish")
        ? "green"
        : data.overall_sentiment_label.toLowerCase().includes("bearish")
        ? "red"
        : "black",
        color: "white",
    }

    return (
        <article className="articleWrapper">
            <a href={`${data.url}`} className="imgWrapper" >
                <section style={imgStyle} className="titleWrapper">
                <p className="artTitle">
                    {data.title}
                </p>
                </section>
            </a>
            <section className="summaryWrapper">
                <span className="artSummary">
                    {data.summary}
                </span>
                <div className="artInfo">
                    <p style={sentimentStyle}>{data.overall_sentiment_label}</p>
                    <p>{data.authors[0]}</p>
                </div>
            </section>
        </article>
    )
}

export default NewsArticle