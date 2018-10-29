import React from 'react';
import './sidebarStyle.css';
import { Link } from "react-router-dom";

export default class Sidebar extends React.Component {

    handleClick = () => {
        let Element = document.getElementById('treeviewOption');
        if (Element.style.display === 'none') {
            Element.style.display = 'block';
        }
        else {
            Element.style.display = 'none';
        }
    }

    handleClick1 = () => {
        let Element = document.getElementById('treeviewOption1');
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

                            <ul className="treeview-menu" id='treeviewOption'>
                                <li className="treeview-dropdown">
                                    <Link to='/ViewEmployees'>
                                        <i className="fa fa-street-view"></i>View Employee
                                    </Link>
                                </li>
                                <li className="treeview-dropdown">
                                    <a href="/Employee/SearchEmployees" target="">
                                        <i className="fa fa-search"></i>Search Employees
                                    </a>
                                </li>
                                <li className="treeview-dropdown">
                                    <a href="/Employee/OrganizationChart" target="">
                                        <i className="fa fa-users"></i>Organization Chart
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="has-subnav" >
                            <a href="#">
                                <i className="fa fa-clock-o fa-2x"></i>
                                <span className="nav-text">Time Management</span>
                                <i className="fa fa-angle-left pull-right" style={{ display: 'none' }}></i>
                            </a>
                        </li>

                        <li className="has-subnav" onClick={this.handleClick1}>
                            <a href="#">
                                <i className="fa fa-ban fa-2x"></i>
                                <span className="nav-text">Time-Off Management</span>
                                <i className="fa fa-angle-left pull-right"></i>
                            </a>

                            <ul className="treeview-menu" id='treeviewOption1' >
                                <li className="treeview-dropdown">
                                    <Link to="/ApplyTimeOff">
                                        <i className="fa fa-calendar-minus-o"></i>Apply TimeOff
                                    </Link>
                                </li>
                                <li className="treeview-dropdown">
                                    <Link to="/TimeOffBalance">
                                        <i className="fa fa-th-list"></i>TimeOff Balance
                                    </Link>
                                </li>
                                <li className="treeview-dropdown">
                                    <a href="/Leave/GetLeaveHistory" target="">
                                        <i className="fa fa-history"></i>TimeOff History
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link to="/PerformanceManagement">
                                <i className="fa fa-line-chart fa-2x"></i>
                                <span className="nav-text">Performance Management</span>
                                <i className="fa fa-angle-left pull-right"></i>
                            </Link>
                        </li>

                        <li>
                            <Link to="/ProjectManagement" target="_blank">
                                <i className="fa fa-line-chart fa-2x"></i>
                                <span className="nav-text">Project Management</span>
                                <i className="fa fa-angle-left pull-right"></i>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}