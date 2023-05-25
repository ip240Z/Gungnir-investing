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

    let datePublished = (rawDate) => {
        let year = rawDate.slice(0,4);
        let month = rawDate.slice(4,6);
        let day = rawDate.slice(6,8);
        return `${month}-${day}-${year}`
    }
    let abrevTitle = (rawTitle) => {
        if (rawTitle.length > 50 ) {
            let titleArr = rawTitle.split('')
            while (titleArr.length > 50) {
                titleArr.pop();
            }
            return `${titleArr.join('')}...`
        }
        else {
            return rawTitle
        }
    }

    return (
        <article className="articleWrapper">
            <a target={"_blank"} href={`${data.url}`} className="imgWrapper" >
                <section style={imgStyle} className="titleWrapper">
                </section>
            </a>
            <section className="summaryWrapper">
                <span className="artSummary">
                    {abrevTitle(data.title)}
                </span>
                <div className="artInfo">
                    <p style={sentimentStyle}>{data.overall_sentiment_label}</p>
                    <p>{data.authors[0]}</p>
                </div>
                <p className="artDate">{datePublished(data.time_published)}</p>
            </section>
        </article>
    )
}

export default NewsArticle