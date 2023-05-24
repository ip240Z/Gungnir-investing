import './App.css';
import StockBody from './components/StockBody';
import NoMatch from './components/NoMatch';
import { Routes, Route } from 'react-router-dom';
import bgPic from "./mainBG.png"


function App() {


  return (
    <div className="App" >
      <Routes>
        <Route path="/*" element={<StockBody />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </div>
  );
}

export default App;
