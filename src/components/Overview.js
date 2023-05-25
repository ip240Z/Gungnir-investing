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

    let formatNum = (numStr) => {
        let length = numStr.length;
        let commas = Math.floor((length - 1) / 3);
        let formattedNum = '';
      
        // Handle numbers larger than a trillion
        if (commas > 3) {
          for (let i = 1; i <= commas; i++) {
            let startIndex = length - (i * 3);
            let part = numStr.slice(startIndex, length - ((i - 1) * 3));
            formattedNum = part + (formattedNum ? ',' + formattedNum : '');
          }
          formattedNum = numStr.slice(0, length - (commas * 3)) + ',' + formattedNum;
        }
        // Handle numbers up to a trillion
        else {
          formattedNum = numStr;
        }
      
        return formattedNum;
      }
  console.log(overviewData.CIK)

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
                    <div className="nums">
                        <p>Earnings Per Share: ${overviewData.EPS}</p>
                        <p>Dividend Per Share: {overviewData.DividendPerShare}%</p>
                    </div>
                    <div className="nums">
                        <p>Analyst Target Price: ${overviewData.AnalystTargetPrice}</p>
                        <p>52 Week High: ${overviewData["52WeekHigh"]}</p>
                        <p>52 Week Low: ${overviewData["52WeekLow"]}</p>
                    </div>
                    <div className="nums">
                        <p>Market Cap: ${formatNum(`${overviewData.MarketCapitalization}`)}</p>
                        <p>Float: {formatNum(`${overviewData.SharesOutstanding}`)}</p>
                        <a target={"_blank"} href={`https://react-www.onrender.com/`}><p>Recent Filings Here</p></a>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Overview;