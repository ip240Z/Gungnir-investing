# Gungnir Investments React Application

This React.js application makes use of the Alpha Vantage API's historical trade data and news endpoints. 

The primary goal is to provide a user with a daily candlestick chart dating to the past 6 months.
Especially for newer investors, a longer, less minute-by-minute strategy is typically a safer way of entering the equities markets. 

The user begins by searching a ticker inside the main body of the application. Upon submitting their searched ticker, 
a candlestick chart is rendered inside main container. After searching a ticker, the user is then able to click the "News"
button to render a list of relevant news articles about that ticker. The user can switch between these two views without delay.

This tool's function is to bring the basic ideas of equities market investing to those with little to no experience. 

The user would initially use the search bar to search a companies publicly traded ticker symbol. Upon submitting the search, a fetch is ran to the alpha vantage api to get data for a 15 minute candlestick chart. The user can use the "Chart" button to view this chart and the "News" button to view a list of related articles. 

The "News" button will send a fetch request to Alpha Vantage's news api. Gungnir will then filter the standard 50 article response down to only articles that pass a certain relevance threshold for the user's selected ticker. The top 3 articles will be displayed as featured articles, the remaining articles will be displayed in the "Related articles" section. 