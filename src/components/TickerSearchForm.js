import React, { useEffect, useState, Component } from "react";
import {APIKEY, StockDataAPIKEY} from "../APIKEY";
import "./TickerSearchForm.css"
// require('dotenv').config()



let TickerSearchForm = (props) => {

    let APIKEY = process.env.REACT_APP_APIKEY

    const [ticker, setTicker] = useState({tickerValue: ""})

    const passTicker = (data) => {
        props.passTicker(data)
    }

    let getTickerData = (ticker) => {
        return (fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=60min&slice=year1month3&adjusted=false&outputsize=compact&apikey=${APIKEY}`)
            .then(r => r.ok ? r.json() : null)
            .then(data => {
            console.log(data)
            }));   
        }

    const handleChange = (e) => {
        e.preventDefault();
        setTicker({tickerValue: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let tickerValue = ticker.tickerValue.toUpperCase()
        getTickerData(tickerValue);
        console.log(tickerValue);
        passTicker(tickerValue);
        setTicker({tickerValue: ""})
    }
    return (
        <form className="searchForm" onSubmit={handleSubmit}>
            <div>
                <input type="text" name="TickerSearch" placeholder="Search by ticker" value={ticker.tickerValue} onChange={handleChange} />
            </div>
            <button>Search</button>
        </form>
    )
};

export default TickerSearchForm;