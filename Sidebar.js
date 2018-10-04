import React from 'react';
import './sidebar.css';

export default class Sidebar extends React.Component {
  render() {
    return (
        <div class="area">
        <nav class="main-menu">
            <ul>
                <li>
                    <a href="#">
                    <i class="fa fa-users fa-2x"></i>
                    <span class="nav-text">Employee Management</span>
                    </a>              
                </li>
                
                <li class="has-subnav">
                    <a href="#">
                    <i class="fa fa-clock-o fa-2x"></i>
                    <span class="nav-text">Time Management</span>
                    </a>
                </li>
                
                <li class="has-subnav">
                    <a href="#">
                    <i class="fa fa-ban fa-2x"></i>
                    <span class="nav-text">Time-Off Management</span>
                    </a>
                </li>
                
                <li class="has-subnav">
                    <a href="#">
                    <i class="fa fa-bar-chart-o fa-2x"></i>
                    <span class="nav-text">Reports</span>
                    </a>       
                </li>
                    
                <li>
                    <a href="#">
                    <i class="fa fa-adn fa-2x"></i>
                    <span class="nav-text">Service Management</span>
                    </a>
                </li>
                
                <li>
                    <a href="#">
                    <i class="fa fa-cogs fa-2x"></i>
                    <span class="nav-text">Performance Management</span>
                    </a>
                </li>
                
                <li>
                    <a href="#">
                    <i class="fa fa-archive fa-2x"></i>
                    <span class="nav-text">Organisation Documents</span>
                    </a>
                </li>
                
                <li>
                    <a href="#">
                    <i class="fa fa-money fa-2x"></i>
                    <span class="nav-text">Benefits Management</span>
                    </a>
                </li>
                
                <li>
                    <a href="#">
                    <i class="fa fa-clipboard fa-2x"></i>
                    <span class="nav-text">Training</span>
                    </a>
                </li>
                
            </ul>

        </nav>
        </div>
    );
  }
}