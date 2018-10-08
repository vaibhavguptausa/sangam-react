import React from 'react';
import './sidebar.css';

export default class Sidebar extends React.Component {
  render() {
    return (
        <div className="area">
        <nav className="main-menu">
            <ul>
                <li>
                    <a href="#">
                    <i className="fa fa-users fa-2x"></i>
                    <span className="nav-text">Employee Management</span>
                    </a>              
                </li>
                
                <li className="has-subnav">
                    <a href="#">
                    <i className="fa fa-clock-o fa-2x"></i>
                    <span className="nav-text">Time Management</span>
                    </a>
                </li>
                
                <li className="has-subnav">
                    <a href="#">
                    <i className="fa fa-ban fa-2x"></i>
                    <span className="nav-text">Time-Off Management</span>
                    </a>
                </li>
                
                <li className="has-subnav">
                    <a href="#">
                    <i className="fa fa-bar-chart-o fa-2x"></i>
                    <span className="nav-text">Reports</span>
                    </a>       
                </li>
                    
                <li>
                    <a href="#">
                    <i className="fa fa-adn fa-2x"></i>
                    <span className="nav-text">Service Management</span>
                    </a>
                </li>
                
                <li>
                    <a href="#">
                    <i className="fa fa-cogs fa-2x"></i>
                    <span className="nav-text">Performance Management</span>
                    </a>
                </li>
                
                <li>
                    <a href="#">
                    <i className="fa fa-archive fa-2x"></i>
                    <span className="nav-text">Organisation Documents</span>
                    </a>
                </li>
                
                <li>
                    <a href="#">
                    <i className="fa fa-money fa-2x"></i>
                    <span className="nav-text">Benefits Management</span>
                    </a>
                </li>
                
                <li>
                    <a href="#">
                    <i className="fa fa-clipboard fa-2x"></i>
                    <span className="nav-text">Training</span>
                    </a>
                </li>
                
            </ul>

        </nav>
        </div>
    );
  }
}