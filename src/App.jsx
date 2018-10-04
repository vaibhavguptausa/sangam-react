import React, { Component } from 'react';
import './App.css';
import {Header} from './Header/header' ;
import {Sidebar} from './sidebar/sidebar' ;
 import {Layout} from './Layout/layout' ;
class App extends Component {
  render() {
    return (
      <div className="App1">
        <Header className="App-header" />
        <Sidebar className='App-sidebar' />
        <Layout className='App-layout' />
      </div>
    );
  }
}

export default App;
