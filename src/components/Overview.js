import React, { useState, useEffect } from "react"
import "./css/Overview.css"

let Overview = (props) => {

    let APIKEY3 = process.env.REACT_APP_APIKEY3

    const [tickerName, setTickerName] = useState(props.tickerName)
    const [overviewData, setOverviewData] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${tickerName}&apikey=${APIKEY3}`)
                if (!response.ok) {
                    throw new Error('Error fetching company overview')
                }
                const data = await response.json();
                console.log('Company overview fetched', data);
                setOverviewData(data)
            } catch (error) {
                console.log('An error occurred: ', error)
            }
        }
        fetchData()
    }, []); 

    return (
        <main className="overviewWrapper">
            <header className="header">
                <h2 className="compName">
                    {overviewData.Name}
                </h2>
                <div className="tradeInfo">
                    <p>{overviewData.Symbol}</p>
                    <p>{overviewData.Exchange}</p>
                    <p>{overviewData.Sector}</p>
                </div>
            </header>
            <section className="descArea">
                <div>
                    <p className="ind">{overviewData.Industry}</p>
                    <p className="desc">{overviewData.Description}</p>
                </div>
                <article className="numsWrapper">
                    <div className="nums1">
                        <p>Analyst Target Price: ${overviewData.AnalystTargetPrice}</p>
                        <p>Earnings Per Share: ${overviewData.EPS}</p>
                        <p>Dividend Per Share: {overviewData.DividendPerShare}%</p>
                    </div>
                    <div className="nums2">
                        <p>52 Week High: ${overviewData["52WeekHigh"]}</p>
                        <p>52 Week Low: ${overviewData["52WeekLow"]}</p>
                        <p></p>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Overview;