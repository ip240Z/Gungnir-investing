import './App.css';
import StockBody from './components/StockBody';
import NoMatch from './components/NoMatch';
import { Routes, Route } from 'react-router-dom';
import bgPic from "./mainBG.png"
import logo from "./logo.png"


function App() {


  return (
    <main className='App'>
        <Routes>
          <Route path="/*" element={<StockBody />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
        <div className='bg'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        <img src={logo} alt="blarg?" className='bgImg'/>
        </div>
     
    </main>
  );
}

export default App;
