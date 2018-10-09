import React from 'react';
import './App.css';
import Header from './Header/header';
import Sidebar from './sidebar/sidebar.jsx';
import Layout from './Layout/layout';
import RouterFile from './routerFile.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TimeOff from './TimeOff/TimeOff.js';

export default class App extends React.Component {
  render() {
    return (
      <div className="App1">
        <Header className="App-header" />
        
        <Router >
          <div className='App-layout'>
            <Sidebar className='App-sidebar' />
            <div>
              <Route path="/ApplyTimeOff" component={TimeOff} />
              <Route path="/ViewEmployees" component={Layout} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
