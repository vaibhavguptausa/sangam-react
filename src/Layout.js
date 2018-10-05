import React from 'react';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Footer from './Footer.js';
import Tabs from './Tab.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div>
      <div><Header /></div>
      <div><Sidebar /></div>
      </div>
      <div>
      <div><Tabs /></div>
      <div><Footer /></div>
      </div>
      </div>
    );
  }
}