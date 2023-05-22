import { useEffect, useState } from "react";
import {APIKEY, StockDataAPIKEY} from "../APIKEY";
import "./TickerSearchForm.css"


let TickerSearchForm = (props) => {

    const [ticker, setTicker] = useState({tickerValue: "TSLA"})

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
        getTickerData(ticker.tickerValue);
        console.log(ticker.tickerValue);
        passTicker(ticker.tickerValue);
    }
    return (
        <form className="searchForm" onSubmit={handleSubmit}>
            <div>
                <input type="text" name="TickerSearch" placeholder="Search by ticker" value={ticker.tickerValue.toUpperCase()} onChange={handleChange} />
            </div>
            <button>Search</button>
        </form>
    )
};

export default TickerSearchForm;