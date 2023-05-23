import { useState } from "react"

let NewsArticle = (props) => {

    const [data, setData] = useState(props.data)

    return (
        <article>
            <section className="imgWrapper">
                Article img header
            </section>
            <div className="summaryWrapper">
                {data}
            </div>
        </article>
    )
}

export default NewsArticle