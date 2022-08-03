import './App.css';
import NavBar from './Components/NavBar';
import News from './Components/News';
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  const apikey = process.env.REACT_APP_NEWS_API;
  return (
    <div >
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<News key="general" apikey={apikey} pagesize={12} country="in" category="general" />} />
          <Route exact path="/business" element={<News key="business" apikey={apikey} pagesize={12} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News key="entertainment" apikey={apikey} pagesize={12} country="in" category="entertainment" />} />
          <Route exact path="/general" element={<News key="general" apikey={apikey} pagesize={12} country="in" category="general" />} />
          <Route exact path="/health" element={<News key="health" apikey={apikey} pagesize={12} country="in" category="health" />} />
          <Route exact path="/science" element={<News key="science" apikey={apikey} pagesize={12} country="in" category="science" />} />
          <Route exact path="/sports" element={<News key="sports" apikey={apikey} pagesize={12} country="in" category="sports" />} />
          <Route exact path="/technology" element={<News apikey={apikey} pagesize={12} country="in" category="technology" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App; 