import React from 'react';
import './header.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className='main-header'>
        <div className='main-header-logo'>
          <img src={"http://sangam.ggktech.com/Images/logoggk-sangam.png"} border="0" alt="GGK-Tech" title="GGK-Tech" />
        </div>

        <div className='main-header-user'>
          <i className="fa fa-user fa-2x" aria-hidden="true"></i>
          <span className="main-header-username">Diksha Singh</span>
        </div>
      </div>

    );
  }
}