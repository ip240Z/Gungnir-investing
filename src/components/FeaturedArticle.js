import React, { useState } from "react";
import "./css/FeaturedArticle.css"

let FeaturedArticle = (props) => {
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



    return (
        <article className="featArtWrapper">
            <a target={"_blank"} href={`${data.url}`} className="featImgWrapper">
                <div style={imgStyle} className="artImage" src={`url(${data.banner_image})`}/>
            </a>
            <section className="featInfoWrapper">
                <span className="featTitle">
                    <a target={"_blank"} className="featLink" href={`${data.url}`}>{data.title}</a>
                </span>
                <p className="featSummary">
                    {data.summary}
                </p>
                <div className="featArtInfo">
                    <p style={sentimentStyle} className="sent" >{data.overall_sentiment_label}</p>
                    <p>{data.authors[0]}</p>
                    <p>{datePublished(data.time_published)}</p>
                </div>
            </section>
        </article>
    )
}

export default FeaturedArticle