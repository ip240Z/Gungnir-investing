import React, { useEffect, useState, Component } from "react";
import { Link, Route, Routes } from "react-router-dom";

let TickerSearchForm = (props) => {

    let APIKEY = process.env.REACT_APP_APIKEY

    let APIKEY2 = process.env.REACT_APP_APIKEY2

    const [ticker, setTicker] = useState({tickerValue: ""})

    const [chartData, setChartData] = useState()

    const passTicker = (symbol) => {
        props.passTicker(symbol)
    }

    const passChartData = (data) => {
        props.passChartData(data)
    }

    let getTickerData = (ticker) => {
        return (
            fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=60min&slice=year1month3&adjusted=false&outputsize=compact&apikey=${APIKEY2}`)
            .then(r => r.ok ? r.json() : null)
            .then(data => {
                console.log("Fetched chart data")
            setChartData(data);
            passChartData(chartData);
            })
        );   
    }

    const handleChange = (e) => {
        e.preventDefault();
        setTicker({tickerValue: e.target.value})
    }

    const handleSubmit = (e) => {
            e.preventDefault();
            let tickerValue = ticker.tickerValue.toUpperCase()
            getTickerData(tickerValue);
            passTicker(tickerValue);
            setTicker({tickerValue: ""});
    }

    return (
        <section>
            <form className="searchForm" onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="TickerSearch" placeholder="Search by ticker" value={ticker.tickerValue} onChange={handleChange} />
                </div>
                
                <button to={`/chart/${ticker.tickerValue}`}>Search</button>
            </form>
        </section>
    )
};

export default TickerSearchForm;