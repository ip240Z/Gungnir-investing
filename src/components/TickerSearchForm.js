import React, { useEffect, useState, Component } from "react";
import { Link, Route, Routes } from "react-router-dom";

let TickerSearchForm = (props) => {

    let APIKEY = process.env.REACT_APP_APIKEY

    const [ticker, setTicker] = useState({tickerValue: ""})

    const [chartData, setChartData] = useState()

    const passTicker = (symbol) => {
        props.passTicker(symbol)
    }

    const passChartData = (data) => {
        props.passChartData(data)
    }


    useEffect(() => {
        if (chartData) {
          passChartData(chartData);
        }
      }, [chartData]);
    
      let getTickerData = async (ticker) => {
        try {
          const response = await fetch(
            `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=30min&slice=year1month3&outputsize=full&adjusted=false&apikey=${APIKEY}`
          );
          if (!response.ok) {
            throw new Error("Error fetching ticker data");
          }
          const data = await response.json();
          console.log("Fetched chart data:", data);
          setChartData(data);
        } catch (error) {
          console.error("An error occurred:", error);
        }
      };
      

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
                    <input 
                    type="text" 
                    name="TickerSearch" 
                    placeholder="Search by ticker" 
                    value={ticker.tickerValue} 
                    onChange={handleChange} 
                    />
                </div>
                
                <button to={`/chart/${ticker.tickerValue}`}>Search</button>
            </form>
        </section>
    )
};

export default TickerSearchForm;