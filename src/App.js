import logo from './logo.svg';
import './App.css';
import TickerSearchForm from './components/TickerSearchForm';
import StockBody from './components/StockBody';
import NoMatch from './components/NoMatch';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<StockBody />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
