import './App.css';
import NavBar from './Components/NavBar';
import News from './Components/News';
import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            {/* <Route exact path="/" element={<News pagesize={12} country="in" category="general"/>} /> */}
            <Route exact path="/" element={<News key="general" pagesize={12} country="in" category="general"/>} />

            <Route exact path="/business" element={<News key="business" pagesize={12} country="in" category="business"/>} />
            <Route exact path="/entertainment" element={<News key="entertainment" pagesize={12} country="in" category="entertainment"/>} />
            <Route exact path="/general" element={<News key="general" pagesize={12} country="in" category="general"/>} />
            <Route exact path="/health" element={<News key="health" pagesize={12} country="in" category="health"/>} />
            <Route exact path="/science" element={<News key="science" pagesize={12} country="in" category="science"/>} />
            <Route exact path="/sports" element={<News key="sports" pagesize={12} country="in" category="sports"/>} />

            <Route exact path="/technology" element={<News pagesize={12} country="in" category="technology"/>} />



          </Routes>
          
        </BrowserRouter>
      </div>
    )
  }
}
