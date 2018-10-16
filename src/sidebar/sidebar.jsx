import React from 'react';
import './sidebarStyle.css';
import { Link } from "react-router-dom";

export default class Sidebar extends React.Component {
    handleClick = () => {
        let Element = document.getElementById('treeview-option');
        if (Element.style.display === 'none') {
            Element.style.display = 'block';
        }
        else {
            Element.style.display = 'none';
        }
    }

    handleClick1 = () => {
        let Element = document.getElementById('treeview-option1');
        if (Element.style.display === 'none') {
            Element.style.display = 'block';
        }
        else {
            Element.style.display = 'none';
        }
    }

    render() {
        return (
            <div className="area">
                <nav className="main-menu">
                    <ul>
                        <li className="has-subnav" onClick={this.handleClick}>
                            <a href="#">
                                <i className="fa fa-users fa-2x"></i>
                                <span className="nav-text">Employee Management</span>
                                <i className="fa fa-angle-left pull-right"></i>
                            </a>

                            <ul className="treeview-menu" id='treeview-option' style={{ display: 'none' }}>
                                <li style={{ marginLeft: '10px' }} >
                                    <Link to='/ViewEmployees'><a href="/Employee/ViewEmployees" id="10" target="">
                                        <i className="fa fa-street-view"></i>View Employee
                                     </a></Link>
                                </li>
                                <li style={{ marginLeft: '10px' }}>
                                    <a href="/Employee/SearchEmployees" id="14" target="">
                                        <i className="fa fa-search"></i>Search Employees</a>
                                </li>
                                <li style={{ marginLeft: '10px' }}>
                                    <a href="/Employee/OrganizationChart" id="18" target="">
                                        <i className="fa fa-users"></i>Organization Chart
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="has-subnav" >
                            <a href="#">
                                <i className="fa fa-clock-o fa-2x"></i>
                                <span className="nav-text">Time Management</span>
                                <i className="fa fa-angle-left pull-right" style={{ display: 'hidden' }}></i>
                            </a>
                        </li>

                        <li className="has-subnav" onClick={this.handleClick1}>
                            <a href="#">
                                <i className="fa fa-ban fa-2x"></i>
                                <span className="nav-text">Time-Off Management</span>
                                <i className="fa fa-angle-left pull-right"></i>
                            </a>

                            <ul className="treeview-menu" id='treeview-option1' style={{ display: 'none' }}>
                                <li style={{ marginLeft: '10px' }}>
                                    <Link to="/ApplyTimeOff">
                                        <a href="/Leave/ApplyLeave" id="12" target="">
                                            <i className="fa fa-calendar-minus-o"></i>Apply TimeOff
                                        </a>
                                    </Link>
                                </li>
                                <li style={{ marginLeft: '10px' }}>
                                    <Link to="/TimeOffBalance">
                                        <a href="/Leave/GetLeaveBalance" id="13" target="">
                                            <i className="fa fa-th-list"></i>TimeOff Balance
                                        </a>
                                    </Link>
                                </li>
                                <li style={{ marginLeft: '10px' }}>
                                    <a href="/Leave/GetLeaveHistory" id="11" target="">
                                        <i className="fa fa-history"></i>TimeOff History
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li  >
                            <Link to="/PerformanceManagement">
                                <a href="#">
                                    <i className="fa fa-ban fa-2x"></i>
                                    <span className="nav-text">Performance Management</span>
                                    <i className="fa fa-angle-left pull-right"></i>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}