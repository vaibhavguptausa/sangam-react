import React, { Component } from 'react';
import './App.css';
import Header from './Header/header';
import Sidebar from './sidebar/sidebar.jsx';
import Layout from './Layout/layout';

export default class App extends React.Component {
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
